import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthGuard } from "../auth/auth.guard";

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: 'shopping-list',
        component: ShoppingListComponent,
        canActivate: [AuthGuard],
      },
    ]),
  ],
})
export class ShoppingListModule {}
