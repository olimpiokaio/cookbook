import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  public name: string;
  public presentation: string;
  public description: string;
  public imagePath: string;
  public free: boolean;
  public ingredients: Ingredient[];

  constructor(
    name: string,
    presentation: string,
    desc: string,
    imagePath: string,
    free: boolean,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.presentation = presentation
    this.description = desc;
    this.imagePath = imagePath;
    this.free = free;
    this.ingredients = ingredients;
  }
}
