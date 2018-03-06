import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { TermsModalComponent } from './terms-modal/terms-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterFormService } from './register-form/register-form.service';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,

    FormsModule,
  ],
  exports: [],
  declarations: [
    RegisterComponent,
    TermsModalComponent,
    RegisterFormComponent],
  providers: [RegisterFormService]
})
export class RegisterModule { }
