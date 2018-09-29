import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionComponent } from './solution.component';
import { SolutionRoutingModule } from './solution-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailComponent } from '../solution/detail/detail.component';
import { CreateComponent } from '../solution/create/create.component';
import { EditComponent } from '../solution/edit/edit.component';
import { DeleteComponent } from '../solution/delete/delete.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SolutionRoutingModule,
    FontAwesomeModule,
    NgbModule,
  ],
  providers: [NgbActiveModal],
  entryComponents: [ DetailComponent, CreateComponent, EditComponent, DeleteComponent],
  declarations: [SolutionComponent, DetailComponent, CreateComponent, EditComponent, DeleteComponent]
})

export class SolutionModule { }
