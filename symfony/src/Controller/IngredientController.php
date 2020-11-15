<?php


namespace App\Controller;




use App\Entity\Ingredient;
use App\Repository\IngredientRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;


class IngredientController extends AbstractController
{
    public function create(IngredientRepository $ingredientRepository, EntityManagerInterface $entityManager,$content) : Response {
        $ingredient = $ingredientRepository->findOneBy(['title' => $content]);

        if($ingredient == null) {
            $ingredient = new Ingredient();
            $ingredient->setTitle($content);
            $entityManager->persist($ingredient);
            $entityManager->flush();
            return new Response($ingredient->getId());
        }else{
            return new Response($ingredient->getId());
        }
        throw new BadRequestHttpException($content);
    }
}
