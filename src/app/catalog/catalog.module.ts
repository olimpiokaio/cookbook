import { NgModule } from "@angular/core";
import { CatalogComponent } from './catalog.component';
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { SearchComponent } from '../shared/search/search.component';
import { CatalogListComponent } from "./catalog-list/catalog-list.component";
import { TrucatePipe } from "../shared/truncate.pipe";
import { CatalogItem } from "./catalog-list/catalog-item/catalog-item.component";
import { CatalogDetail } from "./catalog-detail/catalog-detail.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    CatalogComponent,
    CatalogListComponent,
    CatalogItem,
    CatalogDetail,
    TrucatePipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CatalogComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ':id',
        component: CatalogDetail,
      },
    ])
  ]
})
export class CatalogMudule {}
