import { NgModule } from '@angular/core';

import { HeaderUnauthorizedComponent } from './header-unauthorized.component';
import { CommonModule } from '@angular/common';
import { LanguageSelectorModule } from '../../language-selector/language-selector.module';

@NgModule({
    imports: [
      CommonModule,
      LanguageSelectorModule
    ],
    declarations: [
      HeaderUnauthorizedComponent
    ],
    exports: [
      HeaderUnauthorizedComponent
    ]
  })
export class HeaderUnauthorizedModule { }
