import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CkeditorRoutingModule } from './ckeditor-routing.module';
import { CkeditorComponent } from './ckeditor.component';
import {SmartadminLayoutModule} from "../../../src/app/shared/layout/layout.module";
import {StatsModule} from "../../../src/app/shared/stats/stats.module";
import {SmartadminWidgetsModule} from "../../../src/app/shared/widgets/smartadmin-widgets.module";

@NgModule({
  imports: [
    CommonModule,
    CkeditorRoutingModule,


    SmartadminLayoutModule,
		StatsModule,
    SmartadminWidgetsModule,
  ],
  declarations: [CkeditorComponent]
})
export class CkeditorModule { }
