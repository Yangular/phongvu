import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
=======
import { AdminComponent } from './admin/admin.component';
import { BannerComponent } from './banner/banner.component';
>>>>>>> 25f1eb8eb58e954c8a54b077aa5fccd051bde8b3

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    HomeComponent,
    HeaderComponent
=======
    AdminComponent,
    BannerComponent
>>>>>>> 25f1eb8eb58e954c8a54b077aa5fccd051bde8b3
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
