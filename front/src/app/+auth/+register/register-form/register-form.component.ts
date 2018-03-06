import { Component, OnInit } from '@angular/core';
import { RegisterFormService } from './register-form.service';

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html'
})
export class RegisterFormComponent implements OnInit {

    constructor(private registerFormService: RegisterFormService) { }

    ngOnInit() { }

    public register(): void {
        this.registerFormService.register({ ConfirmPassword: "aaa", Email: "a@a.pl", FirstName: "", Password: "aa", SecondName: "", Username: "" })
            .subscribe(data => {
                console.log(data);
            },
                error => {
                    console.log(error);
                });
    }
}
