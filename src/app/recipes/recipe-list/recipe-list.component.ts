import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlCPfHnxXHC0PNSewiUtEFbeKLe76L_bIoPFzI8JQnUwOslGah-T01B9mOWOAIjiyo_k&usqp=CAU'),
    new Recipe('A Test Recipe 2', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlCPfHnxXHC0PNSewiUtEFbeKLe76L_bIoPFzI8JQnUwOslGah-T01B9mOWOAIjiyo_k&usqp=CAU')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
