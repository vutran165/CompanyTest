import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes_admin: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes_admin),
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule { }
