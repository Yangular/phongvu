import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './home/menu/menu.component';
import { ContainerComponent } from './home/container/container.component';
<<<<<<< HEAD
=======
import { FooterComponent } from './home/footer/footer.component';
import { BannerComponent } from './banner/banner.component';
>>>>>>> d02cb497bcefd3a73c8087c6731a7c0d5b0e7b69
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { ContainerAdminComponent } from './admin/container-admin/container-admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ProductsListComponent } from './admin/container-admin/products-list/products-list.component';
import { ProductsDetailsComponent } from './admin/container-admin/products-details/products-details.component';

//router-service
import { appRoutes } from './app.router';
import { AuthGuard } from './Service/Guards/auth.guard';
<<<<<<< HEAD
import { ProductsService } from './Service/products.service';
import { ProductsAddComponent } from './admin/container-admin/products-add/products-add.component';
=======
import { MainComponent } from './home/main/main.component'


>>>>>>> d02cb497bcefd3a73c8087c6731a7c0d5b0e7b69

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    HomeComponent,
    AdminComponent,
    MenuComponent,
    ContainerComponent,
<<<<<<< HEAD
=======
    FooterComponent,

    BannerComponent,

>>>>>>> d02cb497bcefd3a73c8087c6731a7c0d5b0e7b69
    HeaderAdminComponent,
    MenuAdminComponent,
    ContainerAdminComponent,
    LoginAdminComponent,
<<<<<<< HEAD
    ProductsListComponent,
    ProductsDetailsComponent,
    ProductsAddComponent,
=======
    MainComponent,

>>>>>>> d02cb497bcefd3a73c8087c6731a7c0d5b0e7b69
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuard,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
