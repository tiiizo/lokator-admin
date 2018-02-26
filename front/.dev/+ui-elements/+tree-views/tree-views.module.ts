import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { treeViewsRouting } from './tree-views.routing';
import {TreeViewsComponent} from "./tree-views.component";
import {SmartadminModule} from "../../../src/app/shared/smartadmin.module";
import {TreeViewModule} from "../../../src/app/shared/ui/tree-view/tree-view.module";

@NgModule({
  imports: [
    CommonModule,
    treeViewsRouting,
    SmartadminModule,
    TreeViewModule
  ],
  declarations: [TreeViewsComponent]
})
export class TreeViewsModule { }
