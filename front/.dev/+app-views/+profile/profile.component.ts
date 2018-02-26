import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../../../src/app/shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'sa-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
