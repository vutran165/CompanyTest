import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const ADMIN_COMPONENT = [
  AdminComponent,
  MenuAdminComponent,
  SidebarComponent
];
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    NgbDropdownModule
  ],
  exports: [
    RouterModule,
    FontAwesomeModule
  ],
  declarations: [ADMIN_COMPONENT]
})
export class AdminModule { }
