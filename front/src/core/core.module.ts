import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { JsonApiService } from './api/json-api.service'
import { LayoutService } from '../app/shared/layout/layout.service'
import { UserService } from '../app/shared/user/user.service'

import { throwIfAlreadyLoaded } from './guards/module-import-guard';
import { TabsModule, ProgressbarModule, TooltipModule, BsDropdownModule, AlertModule } from 'ngx-bootstrap';
import { AuthService } from '../app/+auth/auth.service';
import { AuthGuard } from '../app/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    JsonApiService,
    LayoutService,
    UserService,
    AuthGuard,
    AuthService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
