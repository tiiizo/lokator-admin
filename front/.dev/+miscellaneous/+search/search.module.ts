import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import {SmartadminLayoutModule} from "../../../src/app/shared/layout/layout.module";
import {StatsModule} from "../../../src/app/shared/stats/stats.module";

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,


    SmartadminLayoutModule,
		StatsModule,
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
