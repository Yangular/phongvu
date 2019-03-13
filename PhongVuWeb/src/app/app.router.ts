import { Routes } from '@angular/router';

//component
import { AdminComponent } from './admin/admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ProductsAddComponent } from './admin/container-admin/products-add/products-add.component';
import { ProductsDetailsComponent } from './admin/container-admin/products-details/products-details.component';
import { ProductsListComponent } from './admin/container-admin/products-list/products-list.component';
import { HomeComponent } from './home/home.component';

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
    component: HomeComponent
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
        path: 'edit',
        component: ProductsDetailsComponent
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