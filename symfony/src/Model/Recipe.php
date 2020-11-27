<?php


namespace App\Model;

class Recipe
{
    private $id;

    private $title;

    private $imagePath;

    private $category;

    private $preparation;

    private $ingredients;

    public function __construct(\App\Entity\Recipe $recipe,$ingredients)
    {
        $this->id = $recipe->getId();
        $this->title = $recipe->getTitle();
        $this->imagePath = $recipe->getImagePath();
        $this->category = $recipe->getCategory();
        $this->preparation = $recipe->getPreparation();
        $this->ingredients = $ingredients;
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

    public function getImagePath(): ?string
    {
        return $this->imagePath;
    }

    public function setImagePath(?string $imagePath): self
    {
        $this->imagePath = $imagePath;

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getPreparation(): ?string
    {
        return $this->preparation;
    }

    public function setPreparation(string $preparation): self
    {
        $this->preparation = $preparation;

        return $this;
    }

    public function getIngredients()
    {
        return $this->ingredients;
    }

    public function setIngredients($ingredients): void
    {
        $this->ingredients = $ingredients;
    }


}
