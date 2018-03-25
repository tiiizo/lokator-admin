import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-header-authorized',
  templateUrl: './header-authorized.component.html',
})
export class HeaderAuthorizedComponent implements OnInit {
  private searchMobileActive = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  toggleSearchMobile() {
    this.searchMobileActive = !this.searchMobileActive;
    $('body').toggleClass('search-mobile', this.searchMobileActive);
  }

  onSubmit() {
    this.router.navigate(['/miscellaneous/search']);
  }
}
