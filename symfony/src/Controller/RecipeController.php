<?php


namespace App\Controller;

use App\Entity\Recipe;
use App\Repository\RecipeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;


class RecipeController extends AbstractController
{
    public function create(RecipeRepository  $recipeRepository, EntityManagerInterface $entityManager,$content) : Response {
        $serializer = new Serializer([new ObjectNormalizer()],[new JsonEncoder()]);
        $recipe =$serializer->deserialize($content, Recipe::class,'json');

        $findRecipe = $recipeRepository->findOneBy(['title' => $recipe->getTitle()]);
        if($findRecipe == null) {
            $entityManager->persist($recipe);
            $entityManager->flush();
            return new Response($recipe->getId());
        }else{
            return new Response($findRecipe->getId());
        }
        throw new BadRequestHttpException($content);
    }

    public function getUltimateRecipes($number,RecipeRepository $recipeRepository) : Response {
        $limit = (int) $number;
        $recipes = $recipeRepository->ultimateRecipe($limit);
        return new JsonResponse($recipes);
    }
}
