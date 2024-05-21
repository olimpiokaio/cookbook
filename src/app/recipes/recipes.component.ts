import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService],
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }

  onRecipeDetail(recipeEl: Recipe) {
    this.selectedRecipe = recipeEl;
  }
}
