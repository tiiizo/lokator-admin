import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankRoutingModule } from './blank-routing.module';
import { BlankComponent } from './blank.component';
import {SmartadminLayoutModule} from "../../../src/app/shared/layout/layout.module";
import {StatsModule} from "../../../src/app/shared/stats/stats.module";
import {SmartadminWidgetsModule} from "../../../src/app/shared/widgets/smartadmin-widgets.module";

@NgModule({
  imports: [
    CommonModule,
    BlankRoutingModule,

    SmartadminLayoutModule,
		StatsModule,
    SmartadminWidgetsModule,
  ],
  declarations: [BlankComponent]
})
export class BlankModule { }
