import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../../../../src/app/shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'sa-post-view',
  templateUrl: './post-view.component.html',
})
export class PostViewComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
