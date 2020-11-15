<?php


namespace App\Controller;


use App\Entity\RecipeHasIngredient;
use App\Repository\IngredientRepository;
use App\Repository\RecipeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class RecipeHasIngredientController extends AbstractController
{
    public function create(RecipeRepository $recipeRepository, IngredientRepository $ingredientRepository, EntityManagerInterface $entityManager, Request $request): Response
    {
        $serializer = new Serializer([new ObjectNormalizer()], [new JsonEncoder()]);

        $content = $request->getContent();
        $ingredients = json_decode($request->getContent())->ingredients;

        $recipeId = $this->createObject("App\Controller\RecipeController::create", $content);
        $recipe = $recipeRepository->findOneBy(['id' => $recipeId]);

        try {
            foreach ($ingredients as &$object) {
                $recipeHasIngredient = $serializer->deserialize(json_encode($object), RecipeHasIngredient::class, 'json');

                $ingredientId = $this->createObject("App\Controller\IngredientController::create", $object->title);
                $ingredient = $ingredientRepository->findOneBy(['id' => $ingredientId]);

                $recipeHasIngredient->setRecipe($recipe);
                $recipeHasIngredient->setIngredient($ingredient);
                $entityManager->persist($recipeHasIngredient);
                $entityManager->flush();
            }
            return new Response("OK");
        } catch (\Exception $e) {
            return new BadRequestHttpException("Database error");
        }
    }

    public function createObject(string $controller, string $content): ?int
    {
        $response = $this->forward($controller, ['content' => $content]);
        if ($response->getStatusCode() !== 200) {
            return null;
        }
        return (int)$response->getContent();
    }
}
