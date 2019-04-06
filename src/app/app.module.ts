import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PagesComponent} from './pages/pages.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './user/user.component';
import {AdminLoginComponent} from './admin/admin-login/admin-login.component';
import {UserLoginComponent} from './user/user-login/user-login.component';
import {UserRegisterComponent} from './user/user-register/user-register.component';
import {ErrorInterceptor} from './_helpers/error.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {fakeBackendProvider} from './_helpers/fake-backend.interceptor';
import {ReactiveFormsModule} from '@angular/forms';
import { ThNavComponent } from './a_theme/components/th-nav/th-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PagesComponent,
    NotFoundComponent,
    UserComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegisterComponent,
    ThNavComponent

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
