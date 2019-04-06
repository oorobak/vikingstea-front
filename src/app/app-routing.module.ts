import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages/pages.component';
import {AdminComponent} from './admin/admin.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {UserComponent} from './user/user.component';
import {AdminLoginComponent} from './admin/admin-login/admin-login.component';
import {UserLoginComponent} from './user/user-login/user-login.component';
import {UserRegisterComponent} from './user/user-register/user-register.component';
import {AuthGuard} from './_guards/auth.guard';

/*
  Powinny być dwie strefy routingu:
  - dla admina
  - dla użytkownika
  - dla reszty / serwis
 */
const appRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: './admin/admin.module#AdminModule'
      },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'login',
        component: AdminLoginComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: '',
        loadChildren: './user/user.module#UserModule'
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'login',
        component: UserLoginComponent
      },
      {
        path: 'register',
        component: UserRegisterComponent
      }
    ]
  },
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule'
      },
      {
        path: '404',
        component: NotFoundComponent
      },
      {path: '**', redirectTo: '404'}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload', initialNavigation: 'enabled'})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
