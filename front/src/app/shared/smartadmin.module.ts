import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AlertModule, BsDropdownModule, ButtonsModule, ModalModule, ProgressbarModule, TabsModule, TooltipModule } from 'ngx-bootstrap';

import { PopoverModule } from 'ngx-popover';

import { SmartadminWidgetsModule } from './widgets/smartadmin-widgets.module';

import { UtilsModule } from './utils/utils.module';
// import {ChatModule} from "./chat/chat.module";
import { StatsModule } from './stats/stats.module';
import { InlineGraphsModule } from './graphs/inline/inline-graphs.module';
import { SmartadminFormsLiteModule } from './forms/smartadmin-forms-lite.module';
import { SmartProgressbarModule } from './ui/smart-progressbar/smart-progressbar.module';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule,


  ],
  declarations: [],
  exports: [
    CommonModule, FormsModule, RouterModule,

    ModalModule,
    ButtonsModule,

    AlertModule,
    TabsModule,
    TooltipModule,
    BsDropdownModule,
    ProgressbarModule,


    PopoverModule,

    LayoutModule,

    UtilsModule,

    SmartadminFormsLiteModule,

    SmartProgressbarModule,

    InlineGraphsModule,

    SmartadminWidgetsModule,

    // ChatModule,

    StatsModule

  ]
})
export class SmartadminModule {
}
