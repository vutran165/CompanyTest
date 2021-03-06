import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpErrorHandlerService } from '../shared/error/http-error-handler.service';
import { ErrorComponent } from '../shared/error/error.component';
import { PaginationComponent } from './pagination/pagination.component';

const ADMIN_COMPONENT = [
  AdminComponent,
  MenuAdminComponent,
  SidebarComponent,
  ErrorComponent
];
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    NgbDropdownModule,
  ],
  exports: [
    RouterModule,
    FontAwesomeModule
  ],
  providers: [HttpErrorHandlerService],
  declarations: [ADMIN_COMPONENT, PaginationComponent]
})
export class AdminModule { }
