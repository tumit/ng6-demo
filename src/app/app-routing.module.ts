import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';

const routes: Routes = [
  { path:'sign-in', component: SignInPageComponent },
  { path:'faq', component: FaqPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
