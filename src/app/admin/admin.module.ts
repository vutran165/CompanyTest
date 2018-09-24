import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';

const ADMIN_COMPONENT = [
  AdminComponent,
  MenuAdminComponent
];
@NgModule({
  imports: [
    AdminRoutingModule,
  ],
  declarations: [ADMIN_COMPONENT]
})
export class AdminModule { }
