import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const ADMIN_COMPONENT = [
  AdminComponent,
  MenuAdminComponent
];
@NgModule({
  imports: [
    AdminRoutingModule,
    FontAwesomeModule,
  ],
  exports: [
    FontAwesomeModule
  ],
  declarations: [ADMIN_COMPONENT, SidebarComponent]
})
export class AdminModule { }
