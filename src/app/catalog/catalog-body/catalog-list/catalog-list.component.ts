import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Recipe } from "../../../recipes/recipe.model";
import { RecipeService } from "../../../recipes/recipe.service";
import { Subscription } from "rxjs";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrl: './catalog-list.component.css',
})
export class CatalogListComponent implements OnInit, OnDestroy {

  private scrollPosition = 0;
  recipes: Recipe[] = [];
  subscription: Subscription;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();

    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
