import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { Observable, exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://ng-recipe-book-e2992-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        //console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://ng-recipe-book-e2992-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipe) => {
          return recipe.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }

  searchRecipesByName(name: string) {
    return this.http
      .get<{ [key: string]: Recipe }>( // Firebase retorna um objeto, não um array
        'https://ng-recipe-book-e2992-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((response) => {
          // Converte o objeto do Firebase em um array de recipes
          const recipesArray: Recipe[] = Object.values(response || {});

          return recipesArray
            .filter((recipe) => {
              return recipe.name?.toLowerCase().includes(name.toLowerCase());
            })
            .map((recipe) => ({
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            }));
        }),
        tap((filteredRecipes) => {
          this.recipeService.setRecipes(filteredRecipes);
        })
      );
  }
}
