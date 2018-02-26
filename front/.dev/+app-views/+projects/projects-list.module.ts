import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsListRoutingModule} from './projects-list-routing.module';
import {ProjectsListComponent} from './projects-list.component';
import {SmartadminDatatableModule} from "../../../src/app/shared/ui/datatable/smartadmin-datatable.module";
import {SmartadminLayoutModule} from "../../../src/app/shared/layout/layout.module";
import {StatsModule} from "../../../src/app/shared/stats/stats.module";
import {SmartadminWidgetsModule} from "../../../src/app/shared/widgets/smartadmin-widgets.module";

@NgModule({
  imports: [
    CommonModule,
    ProjectsListRoutingModule,
    SmartadminLayoutModule,
    StatsModule,
    SmartadminDatatableModule,

    SmartadminWidgetsModule,
  ],
  declarations: [ProjectsListComponent]
})
export class ProjectsListModule {
}
