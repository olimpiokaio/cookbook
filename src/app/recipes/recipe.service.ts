import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Camarao ao molho branco',
  //     'This is simply a test',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlCPfHnxXHC0PNSewiUtEFbeKLe76L_bIoPFzI8JQnUwOslGah-T01B9mOWOAIjiyo_k&usqp=CAU',
  //     [new Ingredient('Shrimp', 20), new Ingredient('Vegetable', 4)]
  //   ),
  //   new Recipe(
  //     'Torta de limao',
  //     'This is simply a test',
  //     'https://catracalivre.com.br/wp-content/uploads/2022/03/img-8977.jpg',
  //     [
  //       new Ingredient('Limao', 2),
  //       new Ingredient('ovo', 12)
  //     ]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
