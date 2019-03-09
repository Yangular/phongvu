import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './home/menu/menu.component';
import { ContainerComponent } from './home/container/container.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { ContainerAdminComponent } from './admin/container-admin/container-admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';

//router
import { appRoutes } from './app.router';
import { AuthGuard } from './Service/Guards/auth.guard'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    HomeComponent,
    HeaderComponent,
    AdminComponent,
    MenuComponent,
    ContainerComponent,
    FooterComponent,
    HeaderAdminComponent,
    MenuAdminComponent,
    ContainerAdminComponent,
    LoginAdminComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
