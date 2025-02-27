import { NgModule } from "@angular/core";
import { CatalogComponent } from './catalog.component';
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { MenuComponent } from './catalog-header/menu/menu.component';
import { SearchComponent } from './catalog-header/search/search.component';
import { CatalogListComponent } from "./catalog-body/catalog-list/catalog-list.component";
import { TrucatePipe } from "../shared/truncate.pipe";
import { CatalogItem } from "./catalog-body/catalog-list/catalog-item/catalog-item.component";


@NgModule({
  declarations: [
    CatalogComponent,
    MenuComponent,
    SearchComponent,
    CatalogListComponent,
    CatalogItem,
    TrucatePipe
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CatalogComponent,
        canActivate: [AuthGuard],
      },
    ]),
  ],
})
export class CatalogMudule {}
