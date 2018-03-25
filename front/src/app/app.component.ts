import {Component, ViewContainerRef} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {

  public constructor(private viewContainerRef: ViewContainerRef, db: AngularFirestore) {}

}
