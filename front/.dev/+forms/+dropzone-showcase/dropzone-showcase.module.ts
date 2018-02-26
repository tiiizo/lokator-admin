import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dropzoneShowcaseRouting } from './dropzone-showcase.routing';
import {SmartadminModule} from "../../../src/app/shared/smartadmin.module";
import {DropzoneModule} from "../../../src/app/shared/forms/dropzone/dropzone.module";
import {DropzoneShowcaseComponent} from "./dropzone-showcase.component";

@NgModule({
  imports: [
    CommonModule,
    dropzoneShowcaseRouting,
    SmartadminModule,
    DropzoneModule
  ],
  declarations: [DropzoneShowcaseComponent]
})
export class DropzoneShowcaseModule { }
