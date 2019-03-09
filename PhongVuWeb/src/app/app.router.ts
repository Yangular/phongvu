import { Routes } from '@angular/router';

//component
import { AdminComponent } from './admin/admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';

//CanActivate
import { AuthGuard } from './Service/Guards/auth.guard';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login-admin',
    pathMatch: 'full'
  },

  {
    path: 'login-admin',
    component: LoginAdminComponent
  },

  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
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