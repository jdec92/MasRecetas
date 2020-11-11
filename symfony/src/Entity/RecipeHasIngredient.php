<?php

namespace App\Entity;

use App\Repository\RecipeHasIngredientRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RecipeHasIngredientRepository::class)
 */
class RecipeHasIngredient
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="float")
     */
    private $amount;

    /**
     * @ORM\Column(type="integer")
     */
    private $measure;

    /**
     * @ORM\ManyToOne(targetEntity=Recipe::class, inversedBy="recipesHasIngredient")
     */
    private $recipe;

    /**
     * @ORM\ManyToOne(targetEntity=Ingredient::class, inversedBy="recipeHasIngredients")
     */
    private $ingredient;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAmount(): ?float
    {
        return $this->amount;
    }

    public function setAmount(float $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    public function getMeasure(): ?int
    {
        return $this->measure;
    }

    public function setMeasure(int $measure): self
    {
        $this->measure = $measure;

        return $this;
    }

    public function getRecipe(): ?Recipe
    {
        return $this->recipe;
    }

    public function setRecipe(?Recipe $recipe): self
    {
        $this->recipe = $recipe;

        return $this;
    }

    public function getIngredient(): ?Ingredient
    {
        return $this->ingredient;
    }

    public function setIngredient(?Ingredient $ingredient): self
    {
        $this->ingredient = $ingredient;

        return $this;
    }
}
