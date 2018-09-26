import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes_admin: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: '../admin/dashboard/dashboard.module#DashboardModule' },
      { path: 'feature', loadChildren: '../admin/features/features.module#FeaturesModule' },
      { path: 'service', loadChildren: '../admin/services/services.module#ServicesModule' },
      { path: 'solution', loadChildren: '../admin/solution/solution.module#SolutionModule' },
      { path: 'contact', loadChildren: '../admin/contact/contact.module#ContactModule' },
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
