import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopoverModule } from 'ngx-popover';
import { BsDropdownModule } from 'ngx-bootstrap';

import { UtilsModule } from '../../../utils/utils.module';
import { UserModule } from '../../../user';
import { ActivitiesMessageComponent, ActivitiesNotificationComponent, ActivitiesTaskComponent, ActivitiesComponent
} from './activities';
import { FullScreenComponent } from './full-screen';
import { RecentProjectsComponent } from './recent-projects';
import { CollapseMenuComponent } from './collapse-menu';
import { HeaderAuthorizedComponent } from './header-authorized.component';
import { LanguageSelectorModule } from '../../language-selector/language-selector.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule,
    UtilsModule,
    UserModule,
    PopoverModule,
    LanguageSelectorModule
  ],
  declarations: [
    HeaderAuthorizedComponent,
    ActivitiesMessageComponent,
    ActivitiesNotificationComponent,
    ActivitiesTaskComponent,
    RecentProjectsComponent,
    FullScreenComponent,
    CollapseMenuComponent,
    ActivitiesComponent
  ],
  exports: [
    HeaderAuthorizedComponent
  ]
})
export class HeaderAuthorizedModule { }
