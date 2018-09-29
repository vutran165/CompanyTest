import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DeleteComponent } from './delete/delete.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [NgbActiveModal],
  entryComponents: [DeleteComponent, CreateComponent, EditComponent, DetailComponent],
  declarations: [FeaturesComponent, DeleteComponent, CreateComponent, EditComponent, DetailComponent]
})
export class FeaturesModule { }
