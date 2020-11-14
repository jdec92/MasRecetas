<?php


namespace App\Controller;




use App\Entity\Ingredient;
use App\Repository\IngredientRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;


class IngredientController extends AbstractController
{
    public function create(IngredientRepository $ingredientRepository, EntityManagerInterface $entityManager,$title) : Response {
        $serializer = new Serializer([new ObjectNormalizer()],[new JsonEncoder()]);

        $ingredient = $ingredientRepository->findOneBy(['title' => $title]);
        if($ingredient == null) {
            $ingredient = new Ingredient();
            $ingredient->setTitle($title);
            $entityManager->persist($ingredient);
            $entityManager->flush();
            return new Response($serializer->serialize($ingredient,'json'));
        }else{
            return new Response($serializer->serialize($ingredient,'json'));
        }
        throw new BadRequestHttpException($title);
    }
}
