import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './home/menu/menu.component';
import { ContainerComponent } from './home/container/container.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { FooterAdminComponent } from './admin/footer-admin/footer-admin.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { SettingAdminComponent } from './admin/setting-admin/setting-admin.component';
import { ContainerAdminComponent } from './admin/container-admin/container-admin.component';


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
    FooterAdminComponent,
    MenuAdminComponent,
    SettingAdminComponent,
    ContainerAdminComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
