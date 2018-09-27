import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FontAwesomeModule
  ],
  declarations: [FeaturesComponent]
})
export class FeaturesModule { }
