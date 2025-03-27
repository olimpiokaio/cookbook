import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(private dataStoregeService: DataStorageService) {}

  ngOnInit(): void {
    this.subscription = this.dataStoregeService.fetchRecipes().subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
