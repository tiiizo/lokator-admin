import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../../../src/app/shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'app-wizards',
  templateUrl: './wizards.component.html',
})
export class WizardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
