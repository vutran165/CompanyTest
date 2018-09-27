import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionComponent } from './solution.component';
import { SolutionRoutingModule } from './solution-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    SolutionRoutingModule,
    FontAwesomeModule
  ],
  declarations: [SolutionComponent]
})

export class SolutionModule { }
