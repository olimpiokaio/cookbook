import { Component, OnInit } from "@angular/core";
import { Recipe } from "../../recipes/recipe.model";
import { RecipeService } from "../../recipes/recipe.service";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-catalog-detail',
  templateUrl: './catalog-detail.component.html',
  styleUrl: './catalog-detail.component.html',
})
export class CatalogDetail implements OnInit {
  
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

}
