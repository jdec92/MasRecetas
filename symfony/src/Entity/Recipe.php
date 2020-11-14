<?php

namespace App\Entity;

use App\Repository\RecipeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RecipeRepository::class)
 */
class Recipe
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $image_path;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $category;

    /**
     * @ORM\Column(type="text")
     */
    private $preparation;

    /**
     * @ORM\OneToMany(targetEntity=RecipeHasIngredient::class, mappedBy="recipe")
     */
    private $recipesHasIngredient;

    public function __construct()
    {
        $this->recipesHasIngredient = new ArrayCollection();
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
        return $this->image_path;
    }

    public function setImagePath(?string $image_path): self
    {
        $this->image_path = $image_path;

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

    /**
     * @return Collection|RecipeHasIngredient[]
     */
    public function getRecipesHasIngredient(): Collection
    {
        return $this->recipesHasIngredient;
    }

    public function addRecipesHasIngredient(RecipeHasIngredient $recipesHasIngredient): self
    {
        if (!$this->recipesHasIngredient->contains($recipesHasIngredient)) {
            $this->recipesHasIngredient[] = $recipesHasIngredient;
            $recipesHasIngredient->setRecipe($this);
        }

        return $this;
    }

    public function removeRecipesHasIngredient(RecipeHasIngredient $recipesHasIngredient): self
    {
        if ($this->recipesHasIngredient->removeElement($recipesHasIngredient)) {
            // set the owning side to null (unless already changed)
            if ($recipesHasIngredient->getRecipe() === $this) {
                $recipesHasIngredient->setRecipe(null);
            }
        }

        return $this;
    }
}
