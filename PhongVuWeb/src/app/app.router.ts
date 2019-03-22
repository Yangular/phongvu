import { Routes } from '@angular/router';

//component
import { AdminComponent } from './admin/admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ProductsAddComponent } from './admin/container-admin/products-add/products-add.component';
import { ProductsEditComponent } from './admin/container-admin/products-edit/products-edit.component';
import { ProductsListComponent } from './admin/container-admin/products-list/products-list.component';
import { HomeComponent } from './home/home.component';
import { ProductsDeactiveComponent } from './admin/container-admin/products-deactive/products-deactive.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { MainComponent } from './home/main/main.component';

//CanActivate
import { AuthGuard } from './Service/Guards/auth.guard';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'detail',
        component: ProductDetailComponent,
      }
    ]
  },

  {
    path: 'login-admin',
    component: LoginAdminComponent
  },

  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ProductsListComponent
      },
      {
        path: 'add',
        component: ProductsAddComponent
      },
      {
        path: 'deactive',
        component: ProductsDeactiveComponent
      },
      {
        path: 'edit/:id',
        component: ProductsEditComponent
      }
    ]
  },
       
     

 
  // {
  //   path: 'products',
  //   component: ProductListComponent,
  //   canActivate: [AuthGuard]
  // },
  //   {
  //     path: 'product/:id',
  //     component: ProductsComponent,
  //     canActivate: [AuthGuard],
  //     children: [
  //       {
  //         path: '',
  //         component: ProductsDetailComponent
  //       },
  //       {
  //         path: 'edit',
  //         component: ProductEditComponent
  //       }
  //     ]
  //   }
  
];