import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { AuthGuard } from "../auth/auth.guard";

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: ProfileComponent,
        canActivate: [AuthGuard]
      }
    ]),
  ]
})
export class ProfileModule {}
