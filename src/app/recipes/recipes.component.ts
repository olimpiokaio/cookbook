import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit {

  constructor(private dataStoregeService: DataStorageService) {}

  ngOnInit(): void {
    this.dataStoregeService.fetchRecipes().subscribe();
  }

}
