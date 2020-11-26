<?php


namespace App\Controller;


use App\Entity\Ingredient;
use App\Entity\Recipe;
use App\Entity\RecipeHasIngredient;
use App\Repository\IngredientRepository;
use App\Repository\RecipeHasIngredientRepository;
use App\Repository\RecipeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class RecipeHasIngredientController extends AbstractController
{
    public function create(RecipeRepository $recipeRepository, IngredientRepository $ingredientRepository, EntityManagerInterface $entityManager, Request $request): Response
    {
        $serializer = new Serializer([new ObjectNormalizer()], [new JsonEncoder()]);

        $content = $request->getContent();
        $ingredients = json_decode($content)->ingredients;

        $recipe = $this->getRecipe($recipeRepository, "App\Controller\RecipeController::create", $content);
        try {
            foreach ($ingredients as &$object) {
                $recipeHasIngredient = $this->createRecipeHasIngredient($ingredientRepository, $recipe, $object, $serializer);
                $entityManager->persist($recipeHasIngredient);
                $entityManager->flush();
            }
            return new JsonResponse("OK");
        } catch (\Exception $e) {
            return new BadRequestHttpException("Database error");
        }
    }

    public function edit(RecipeRepository $recipeRepository, IngredientRepository $ingredientRepository, RecipeHasIngredientRepository $recipeHasIngredientRepository, EntityManagerInterface $entityManager, Request $request): Response
    {
        $serializer = new Serializer([new ObjectNormalizer()], [new JsonEncoder()]);

        $content = $request->getContent();
        $ingredients = json_decode($content)->ingredients;

        $recipe = $this->getRecipe($recipeRepository, "App\Controller\RecipeController::edit", $content);
        try {
            foreach ($ingredients as &$object) {
                $recipeHasIngredient = null;
                if (property_exists($object, 'id')) {
                    foreach ($recipe->getRecipesHasIngredient()->getValues() as &$iteratorRecipeHasIngredient) {
                        if ($object->id == $iteratorRecipeHasIngredient->getIngredient()->getId()) {
                            $recipeHasIngredient = $iteratorRecipeHasIngredient;
                            $ingredient = $recipeHasIngredient->getIngredient();
                            $serializer->deserialize(json_encode($object), RecipeHasIngredient::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $recipeHasIngredient]);
                            $serializer->deserialize(json_encode($object), Ingredient::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $ingredient]);
                        }
                    }
                } else {
                    $recipeHasIngredient = $this->createRecipeHasIngredient($ingredientRepository, $recipe, $object, $serializer);
                }
                $entityManager->persist($recipeHasIngredient);
                $entityManager->flush();
            }
            return new Response("OK");
        } catch (\Exception $e) {
            return new BadRequestHttpException("Database error");
        }
    }

    public function getRecipeHasIngredient(RecipeRepository $recipeRepository, $recipe_id): Response
    {
        $serializer = new Serializer([new ObjectNormalizer()], [new JsonEncoder()]);
        $recipe = $recipeRepository->findOneBy(['id' => $recipe_id]);
        $ingredients = array();
        foreach ($recipe->getRecipesHasIngredient()->getValues() as &$recipeHasIngredient) {
            array_push($ingredients, new \App\Model\Ingredient($recipeHasIngredient));
        }
        $response = new Response();
        $response->headers->set("Content-Type", 'application/json');
        $response->setContent($serializer->serialize(new \App\Model\Recipe($recipe, $ingredients), 'json'));
        return $response;
    }

    private function createRecipeHasIngredient(IngredientRepository $ingredientRepository, Recipe $recipe, $object, $serializer): RecipeHasIngredient
    {
        $ingredient = $this->getIngredient($ingredientRepository, "App\Controller\IngredientController::create", $object->title);

        $recipeHasIngredient = $serializer->deserialize(json_encode($object), RecipeHasIngredient::class, 'json');
        $recipeHasIngredient->setRecipe($recipe);
        $recipeHasIngredient->setIngredient($ingredient);
        return $recipeHasIngredient;
    }

    private function getRecipe(RecipeRepository $recipeRepository, string $callController, string $content): ?Recipe
    {
        $recipeId = $this->callController($callController, $content);
        return $recipeRepository->findOneBy(['id' => $recipeId]);
    }

    private function getIngredient(IngredientRepository $ingredientRepository, string $callController, string $content): ?Ingredient
    {
        $ingredientId = $this->callController($callController, $content);
        return $ingredientRepository->findOneBy(['id' => $ingredientId]);
    }

    private function callController(string $controller, string $content): ?string
    {
        $response = $this->forward($controller, ['content' => $content]);
        if ($response->getStatusCode() !== 200) {
            return null;
        }
        return $response->getContent();
    }
}
