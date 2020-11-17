<?php


namespace App\Model;

use App\Entity\RecipeHasIngredient;

class Ingredient
{
    private $id;

    private $title;

    private $amount;

    private $measure;

    public function __construct(RecipeHasIngredient $recipeHasIngredient)
    {
        $this->id = $recipeHasIngredient->getIngredient()->getId();
        $this->title = $recipeHasIngredient->getIngredient()->getTitle();
        $this->amount = $recipeHasIngredient->getAmount();
        $this->measure = $recipeHasIngredient->getMeasure();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
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
}
