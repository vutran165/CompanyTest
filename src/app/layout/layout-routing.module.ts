import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes_layout: Routes = [
  {
    path: '',
    component: LayoutComponent,
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes_layout)
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule { }
