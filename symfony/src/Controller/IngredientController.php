<?php


namespace App\Controller;

use App\Entity\Ingredient;
use App\Repository\IngredientRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;


class IngredientController extends AbstractController
{
    public function create(IngredientRepository $ingredientRepository, EntityManagerInterface $entityManager, $content): Response
    {
        $ingredient = $ingredientRepository->findOneBy(['title' => $content]);

        if ($ingredient == null) {
            $ingredient = new Ingredient();
            $ingredient->setTitle($content);
            $entityManager->persist($ingredient);
            $entityManager->flush();
            return new Response($ingredient->getId());
        } else {
            return new Response($ingredient->getId());
        }
        throw new BadRequestHttpException($content);
    }

    public function edit(IngredientRepository $ingredientRepository, EntityManagerInterface $entityManager, $content): Response
    {
        $serializer = new Serializer([new ObjectNormalizer()], [new JsonEncoder()]);

        $ingredient = $ingredientRepository->findOneBy(['id' => json_decode($content)->id]);
        $serializer->deserialize($content, Ingredient::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $ingredient]);

        if ($ingredient != null) {
            $entityManager->persist($ingredient);
            $entityManager->flush();
            return new Response($ingredient->getId());
        }
        throw new BadRequestHttpException($content);
    }
}
