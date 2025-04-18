import { Component, Input, OnInit } from "@angular/core";
import { Recipe } from "../../../../recipes/recipe.model";

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrl: './catalog-item.component.css',
})
export class CatalogItem implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  linkProfile:string;

  ngOnInit(): void {
    // use o nome de perfil (uniquename) nao use o id para indetificar na url
    this.linkProfile = '/profile/' + this.recipe.name;
  }
}
