import { Component } from '@angular/core';
import { Language } from 'angular-l10n';

@Component({
    selector: 'app-header-unauthorized',
    templateUrl: './header-unauthorized.component.html',
})
export class HeaderUnauthorizedComponent {

    @Language() lang: string;

    constructor() {
    }
}
