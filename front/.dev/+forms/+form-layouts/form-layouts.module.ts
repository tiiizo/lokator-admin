import {NgModule} from '@angular/core';

import {CheckoutFormComponent} from "./checkout-form";
import {RegistrationFormComponent} from "./registration-form";
import {ReviewFormComponent} from "./review-form/review-form.component";
import {OrderFormComponent} from "./order-form/order-form.component";
import {CommentFormComponent} from "./comment-form/comment-form.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {SmartadminModule} from "../../../src/app/shared/smartadmin.module";
import {FormLayoutsComponent} from "./form-layouts.component";
import {formLayoutsRouting} from "./form-layouts.routing";
import {SmartadminValidationModule} from "../../../src/app/shared/forms/validation/smartadmin-validation.module";
import {SmartadminInputModule} from "../../../src/app/shared/forms/input/smartadmin-input.module";

@NgModule({
  imports: [
    SmartadminModule,

    formLayoutsRouting,
    SmartadminValidationModule,
    SmartadminInputModule
  ],
  declarations: [CheckoutFormComponent, RegistrationFormComponent,
    ReviewFormComponent, OrderFormComponent, CommentFormComponent, ContactFormComponent,
    FormLayoutsComponent
  ],
})
export class FormLayoutsModule {}
