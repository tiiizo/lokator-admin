import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dygraphsRouting } from './dygraphs.routing';
import { DygraphsComponent } from './dygraphs.component';
import {SmartadminModule} from "../../../src/app/shared/smartadmin.module";
import {DygraphModule} from "../../../src/app/shared/graphs/dygraph/dygraph.module";

@NgModule({
  imports: [
    CommonModule,
    dygraphsRouting,
    SmartadminModule,
    DygraphModule
  ],
  declarations: [DygraphsComponent]
})
export class DygraphsModule { }
