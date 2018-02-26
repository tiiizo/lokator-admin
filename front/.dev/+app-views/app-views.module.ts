import {NgModule} from "@angular/core";

import {routing} from "./app-views.routing";
import {SmartadminModule} from "../../src/app/shared/smartadmin.module";

@NgModule({
  declarations: [

  ],
  imports: [
    SmartadminModule,
    routing,

  ],
  entryComponents: []
})
export class AppViewsModule {
}
