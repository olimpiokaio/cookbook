import { Component, OnDestroy, OnInit } from "@angular/core";
import { Recipe } from "../../../recipes/recipe.model";
import { RecipeService } from "../../../recipes/recipe.service";

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrl: './catalog-list.component.css',
})
export class CatalogListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

}
