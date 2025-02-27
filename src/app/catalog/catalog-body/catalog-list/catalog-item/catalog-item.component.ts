import { Component, Input } from "@angular/core";
import { Recipe } from "../../../../recipes/recipe.model";


@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrl: './catalog-item.component.css',
})
export class CatalogItem {

  @Input() recipe: Recipe;

}
