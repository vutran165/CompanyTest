import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderWebComponent } from './header-web/header-web.component';
import { FooterWebComponent } from './footer-web/footer-web.component';

const WEB_COMPONENT = [
  HeaderWebComponent,
  FooterWebComponent
];

@NgModule({
  imports: [
    LayoutRoutingModule
  ],
  declarations: [LayoutComponent, WEB_COMPONENT],
})
export class LayoutModule { }
