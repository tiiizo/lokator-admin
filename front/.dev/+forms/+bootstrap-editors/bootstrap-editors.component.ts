import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../../../src/app/shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'app-bootstrap-editors',
  templateUrl: './bootstrap-editors.component.html',
})
export class BootstrapEditorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
