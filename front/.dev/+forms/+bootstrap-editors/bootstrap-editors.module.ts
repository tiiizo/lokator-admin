import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapEditorsComponent } from './bootstrap-editors.component';
import {bootstrapEditorsRouting} from "./bootstrap-editors.routing";
import {SmartadminEditorsModule} from "../../../src/app/shared/forms/editors/smartadmin-editors.module";
import {SmartadminModule} from "../../../src/app/shared/smartadmin.module";

@NgModule({
  imports: [
    CommonModule,
    bootstrapEditorsRouting,
    SmartadminEditorsModule,
    SmartadminModule,

  ],
  declarations: [BootstrapEditorsComponent]
})
export class BootstrapEditorsModule { }
