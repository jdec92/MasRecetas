<?php


namespace App\Controller;

use App\Entity\Recipe;
use App\Repository\RecipeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;


class RecipeController extends AbstractController
{
    public function create(RecipeRepository $recipeRepository, EntityManagerInterface $entityManager, $content): Response
    {
        $serializer = new Serializer([new ObjectNormalizer()], [new JsonEncoder()]);
        $recipe = $serializer->deserialize($content, Recipe::class, 'json');

        $findRecipe = $recipeRepository->findOneBy(['title' => $recipe->getTitle()]);
        if ($findRecipe == null) {
            $entityManager->persist($recipe);
            $entityManager->flush();
            return new Response($recipe->getId());
        } else {
            return new Response($findRecipe->getId());
        }
        throw new BadRequestHttpException($content);
    }

    public function edit(RecipeRepository $recipeRepository, EntityManagerInterface $entityManager, $content): Response
    {
        $serializer = new Serializer([new ObjectNormalizer()], [new JsonEncoder()]);
        $recipe = $recipeRepository->findOneBy(['id' => json_decode($content)->id]);
        $serializer->deserialize($content, Recipe::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $recipe]);

        if ($recipe != null) {
            $entityManager->persist($recipe);
            $entityManager->flush();
            return new Response($recipe->getId());
        }
        throw new BadRequestHttpException($content);
    }

    public function getCategory(RecipeRepository $recipeRepository): Response
    {
        return new JsonResponse($recipeRepository->recipeCategory());
    }

    public function getUltimateRecipes($number, RecipeRepository $recipeRepository): Response
    {
        return new JsonResponse($recipeRepository->recipeUltimate((int) $number));
    }

    public function uploadFile(Request $request): Response{
        $data = $request->files->get('image');
        $fileName = date("Y-m-d_h-i-s")."_".$data->getClientOriginalName();
        $data->move($this->getParameter('path_project').''.$this->getParameter('path_upload_file'),$fileName);

        return new JsonResponse($this->getParameter('path_image_front').'/'.$fileName);
    }

    public function removeFile(Request $request): Response{
        $path = str_replace($this->getParameter('path_image_front'),$this->getParameter('path_upload_file'), $request->getContent());
        if(unlink($this->getParameter('path_project').''.$path)){
            return new JsonResponse("ok");
        }
        throw new BadRequestHttpException("Error al borrar el archivo ".$path);
    }
}
