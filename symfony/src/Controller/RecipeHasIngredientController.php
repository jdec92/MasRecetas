<?php


namespace App\Controller;


use App\Entity\Ingredient;
use App\Entity\Recipe;
use App\Entity\RecipeHasIngredient;
use App\Repository\RecipeHasIngredientRepository;
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
    public function create(EntityManagerInterface $entityManager, Request $request): Response
    {
        $serializer = new Serializer([new ObjectNormalizer()], [new JsonEncoder()]);

        $content = $request->getContent();

        $responseRecipe = $this->forward("App\Controller\RecipeController::create", [
            'content' => $content
        ]);
        if ($responseRecipe->getStatusCode() !== 200) {
            throw new BadRequestHttpException("Error Recipe Save");
        }
        $recipe = $serializer->deserialize($responseRecipe->getContent(), Recipe::class, 'json');

        $ingredients = json_decode($request->getContent())->ingredients;
        foreach ($ingredients as &$object) {
            $recipeHasIngredient = $serializer->deserialize(json_encode($object), RecipeHasIngredient::class, 'json');

            $responseIngredient = $this->forward("App\Controller\IngredientController::create", [
                'title' => $object->title
            ]);
            if ($responseIngredient->getStatusCode() !== 200) {
                throw new BadRequestHttpException("Error Ingredient Save");
            }
            $ingredient = $serializer->deserialize($responseIngredient->getContent(), Ingredient::class, 'json');

            $recipeHasIngredient->setIngredient($ingredient);
            $recipeHasIngredient->setRecipe($recipe);
            $entityManager->persist($recipeHasIngredient);
            $entityManager->flush();
        }
        return new Response("OK");
    }
}
