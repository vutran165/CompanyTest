import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

const ADMIN_COMPONENT = [
  AdminComponent,
  MenuAdminComponent,
  SidebarComponent
];
@NgModule({
  imports: [
    AdminRoutingModule,
    FontAwesomeModule,
    NgbDropdownModule.forRoot()
  ],
  exports: [
    FontAwesomeModule
  ],
  declarations: [ADMIN_COMPONENT]
})
export class AdminModule { }
