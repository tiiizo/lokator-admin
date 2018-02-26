import {NgModule} from '@angular/core';

import {SmartadminModule} from '../../src/app/shared/smartadmin.module'

import {routing} from './dashboard.routing';


@NgModule({
  imports: [
    SmartadminModule,
    routing,
  ],
  declarations: [],
  providers: [],
})
export class DashboardModule {

}
