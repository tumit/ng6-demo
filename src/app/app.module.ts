import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseApiInterceptor } from './interceptors/base-api.interceptor';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    FaqPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
