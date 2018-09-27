import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolutionComponent } from './solution.component';

const routes: Routes = [
  {
    path: '', component: SolutionComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class SolutionRoutingModule { }
