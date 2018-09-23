import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardModule } from './dashboard/dashboard.module';

const routes_admin: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: '../admin/dashboard/dashboard.module#DashboardModule' },
      // { path: '', loadChildren: () => DashboardModule },
    ]
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
