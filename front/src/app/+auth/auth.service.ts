import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {canChangeValue} from 'ngx-bootstrap/timepicker/timepicker-controls.util';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    // store the URL so we can redirect after logging in
    redirectUrl: string;

  constructor(
      private afAuth: AngularFireAuth,
      private router: Router) {}
  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Nice, it worked!');
          this.router.navigateByUrl('/profile');
        })
        .catch(err => {
          console.log('Something went wrong: ', err.message);
        });
  }
  emailSignup(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Sucess', value);
          this.router.navigateByUrl('/profile');
        })
        .catch(error => {
          console.log('Something went wrong: ', error);
        });
  }
  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
        .then(value => {
          console.log('Sucess', value);
          console.log('The given name is ' + value.additionalUserInfo.profile.given_name);
          this.router.navigateByUrl('/home');
        })
        .catch(error => {
          console.log('Something went wrong: ', error);
        });
  }
  fbLogin() {
      const provider = new firebase.auth.FacebookAuthProvider();
      return this.oAuthLogin(provider)
          .then(value => {
              console.log('Sucess', value);
              console.log('The given name is ' + value.additionalUserInfo.profile.given_name);
              this.router.navigateByUrl('/home');
          });
  }
  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }
}
