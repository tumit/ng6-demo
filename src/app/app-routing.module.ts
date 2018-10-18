import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';

const routes: Routes = [
  { path:'sign-in', component: SignInPageComponent },
  { path:'faq', component: FaqPageComponent },
  { path:'user', loadChildren: './modules/user/user.module#UserModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
