import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdminComponent } from './login-admin.component';
import { LoginAdminRoutingModule } from './login-admin-routing.module.1';

@NgModule({
  imports: [
    CommonModule,
    LoginAdminRoutingModule
  ],
  declarations: [LoginAdminComponent]
})
export class LoginAdminModule { }
