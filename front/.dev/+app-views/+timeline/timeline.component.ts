import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../../../src/app/shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
