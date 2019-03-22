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

  // home component
  import { BannerComponent } from './home/banner/banner.component';
  import { MainComponent } from './home/main/main.component';
  import { FooterComponent } from './home/footer/footer.component';
  import { ProductDetailComponent } from './home/product-detail/product-detail.component'; 
  
  //admin component
  import { LoginAdminComponent } from './login-admin/login-admin.component';

  import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
  import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
  import { ContainerAdminComponent } from './admin/container-admin/container-admin.component';
    // products admin
    import { ProductsListComponent } from './admin/container-admin/products-list/products-list.component';
    import { ProductsEditComponent } from './admin/container-admin/products-edit/products-edit.component';    
    import { ProductsAddComponent } from './admin/container-admin/products-add/products-add.component';
    import { ProductsDeactiveComponent } from './admin/container-admin/products-deactive/products-deactive.component';

//router-service
import { appRoutes } from './app.router';
import { AuthGuard } from './Service/Guards/auth.guard';
import { ProductsService } from './Service/products.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    FooterComponent,
    BannerComponent,
    HeaderAdminComponent,
    MenuAdminComponent,
    ContainerAdminComponent,
    LoginAdminComponent,
    ProductsListComponent,
    ProductsEditComponent,
    ProductsAddComponent,
    MainComponent,

    ProductsDeactiveComponent,

    ProductDetailComponent,

    ProductsDeactiveComponent,
    ProductDetailComponent,
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
