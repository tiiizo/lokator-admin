import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
 
import { Register } from '../../register/register';
import { RegisterForm } from './register-form.model';

const REGISTER_URL = '/api/account/Register';

@Injectable()
export class RegisterFormService {
    constructor(private httpClient: HttpClient) { }

    register(register: RegisterForm) {
        return this.httpClient.post(REGISTER_URL, register);
    }
}