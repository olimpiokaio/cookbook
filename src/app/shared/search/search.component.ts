import { Component } from '@angular/core';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {

  constructor(private dataStorage: DataStorageService) {}

  onSearchRecipe(name: string) {
    this.dataStorage.searchRecipesByName(name.trim()).subscribe();
  }

}
