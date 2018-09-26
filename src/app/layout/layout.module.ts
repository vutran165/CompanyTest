import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderWebComponent } from './header-web/header-web.component';
import { FooterWebComponent } from './footer-web/footer-web.component';
import { FeaturesWebComponent } from './features-web/features-web.component';
import { ServicesWebComponent } from './services-web/services-web.component';
import { ContactWebComponent } from './contact-web/contact-web.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

const WEB_COMPONENT = [
  HeaderWebComponent,
  FooterWebComponent,
  FeaturesWebComponent, 
  ServicesWebComponent, 
  ContactWebComponent, 
  HomeSliderComponent, 
  
];

@NgModule({
  imports: [
    CommonModule, // Exports all the basic Angular directives and pipes, such as NgIf, NgForOf, DecimalPipe, 
    LayoutRoutingModule,
    NgbModule,
  ],
  exports: [WEB_COMPONENT],
  declarations: [LayoutComponent, WEB_COMPONENT],
  entryComponents:[WEB_COMPONENT]
  // schemas: [NO_ERRORS_SCHEMA]
})
export class LayoutModule { }
