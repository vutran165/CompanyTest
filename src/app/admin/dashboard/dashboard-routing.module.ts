import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes_dashboard: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes_dashboard)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
