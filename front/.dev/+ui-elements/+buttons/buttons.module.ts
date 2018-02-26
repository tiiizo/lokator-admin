import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { buttonsRouting } from './buttons.routing';
import {ButtonsComponent} from "./buttons.component";
import {SmartadminModule} from "../../../src/app/shared/smartadmin.module";

@NgModule({
  imports: [
    CommonModule,
    buttonsRouting,
    SmartadminModule
  ],
  declarations: [ButtonsComponent]
})
export class ButtonsModule { }
