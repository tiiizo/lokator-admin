import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderUnauthorizedModule } from './header-unauthorized/header-unauthorized.module';
import { HeaderAuthorizedModule } from './header-authorized/header-authorized.module';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
  ],
  exports: [
    HeaderUnauthorizedModule,
    HeaderAuthorizedModule,
  ]
})
export class HeaderModule { }
