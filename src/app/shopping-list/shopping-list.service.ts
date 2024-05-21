import { Injectable, EventEmitter, Output } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService {

  @Output() ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 5)
  ];

  public getIngredients() {
    return this.ingredients.slice(); // slice para retornar uma copia! e nao uma referencia.
  }

  public addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
