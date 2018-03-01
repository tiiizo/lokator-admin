import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public username;
  public password;

  constructor(private router: Router, private  authService: AuthService) {
  }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault();
    this.authService.login(this.username, this.password);
    this.router.navigate(['/home'])
  }

}
