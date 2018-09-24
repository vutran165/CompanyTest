import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionComponent } from './solution.component';
import { SolutionRoutingModule } from './solution-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SolutionRoutingModule
  ],
  declarations: [SolutionComponent]
})
export class SolutionModule { }
