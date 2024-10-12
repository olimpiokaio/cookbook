import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  collapsed = true;

  constructor(private dataStoregeService: DataStorageService) {}

  onSaveData() {
    this.dataStoregeService.storeRecipes();
  }

  onFetchData() {
    this.dataStoregeService.fetchRecipes().subscribe();
  }

}
