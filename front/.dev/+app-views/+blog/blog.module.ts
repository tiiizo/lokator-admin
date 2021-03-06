import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import {SmartadminLayoutModule} from "../../../src/app/shared/layout/layout.module";
import {StatsModule} from "../../../src/app/shared/stats/stats.module";

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    SmartadminLayoutModule,
    StatsModule,
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
