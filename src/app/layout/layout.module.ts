import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderWebComponent } from './header-web/header-web.component';
import { FooterWebComponent } from './footer-web/footer-web.component';
import { FeaturesWebComponent } from './features-web/features-web.component';
import { ServicesWebComponent } from './services-web/services-web.component';
import { ContactWebComponent } from './contact-web/contact-web.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AboutWebComponent } from './about-web/about-web.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailFeaturesWebComponent } from './features-web/detail-features-web/detail-features-web.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ProjectWebComponent } from './project-web/project-web.component';
import { CustomerWebComponent } from './customer-web/customer-web.component';
import { PartnerWebComponent } from './partner-web/partner-web.component';
import { OwlModule } from 'ngx-owl-carousel';


const WEB_COMPONENT = [
    LayoutComponent,
    HeaderWebComponent,
    FooterWebComponent,
    FeaturesWebComponent,
    ServicesWebComponent,
    ContactWebComponent,
    HomeSliderComponent,
    AboutWebComponent,
    DetailFeaturesWebComponent,
    ProjectWebComponent,
    CustomerWebComponent,
    PartnerWebComponent
];

@NgModule({
    imports: [
        CommonModule, // Exports all the basic Angular directives and pipes, such as NgIf, NgForOf, DecimalPipe,
        LayoutRoutingModule,
        NgbModule,
        FontAwesomeModule,
        FormsModule,
        OwlModule
    ],
    providers: [NgbActiveModal],
    exports: [WEB_COMPONENT],
    declarations: [WEB_COMPONENT],
    entryComponents: [WEB_COMPONENT],
})
export class LayoutModule { }
