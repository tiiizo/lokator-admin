import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule, TooltipModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavigationModule } from './navigation/navigation.module';
import { RibbonComponent } from './ribbon/ribbon.component';
import { ShortcutComponent } from './shortcut/shortcut.component';
import { MainLayoutComponent } from './app-layouts/main-layout.component';
import { EmptyLayoutComponent } from './app-layouts/empty-layout.component';
import { AuthLayoutComponent } from './app-layouts/auth-layout.component';
import { RouteBreadcrumbsComponent } from './ribbon/route-breadcrumbs.component';
import { UtilsModule } from '../utils/utils.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    NavigationModule,
    FormsModule,
    RouterModule,
    UtilsModule,
    TooltipModule,
    BsDropdownModule
  ],
  declarations: [
    FooterComponent,
    RibbonComponent,
    ShortcutComponent,
    MainLayoutComponent,
    EmptyLayoutComponent,
    AuthLayoutComponent,
    RouteBreadcrumbsComponent
  ],
  exports: [
    NavigationModule,
    FooterComponent,
    RibbonComponent,
    ShortcutComponent
  ]
})
export class LayoutModule {

}
