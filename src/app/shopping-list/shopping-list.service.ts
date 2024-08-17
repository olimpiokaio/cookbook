import { Injectable, EventEmitter, Output } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService {

  @Output() ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>()

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 5),
  ];

  public getIngredients() {
    return this.ingredients.slice(); // slice para retornar uma copia! e nao uma referencia.
  }

  public getIngredient(index: number) {
    return this.ingredients[index];
  }

  public updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  public addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice())
  }

}
