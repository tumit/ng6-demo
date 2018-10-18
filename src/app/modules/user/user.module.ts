import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [
    UserPageComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
