import { Component, OnInit } from '@angular/core';

import { LocaleService } from 'angular-l10n';


import { TranslationService } from 'angular-l10n';
import { Language } from 'angular-l10n/src/models/types';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
})
export class LanguageSelectorComponent implements OnInit {


  public languages:  Language[];
  public currentLanguage: string;

  ngOnInit(): void {
    console.log(this.translation.translate('Sign in'));

    this.translation.translationChanged().subscribe(
      () => { console.log(this.translation.translate('Sign in')); }
    );
  }

  constructor(public locale: LocaleService, public translation: TranslationService) {
    this.languages = locale.getConfiguration().languages;
    this.currentLanguage = locale.getConfiguration().language;
  }

  setLanguage(language: string): void {
    console.log(this.locale);
    this.locale.setDefaultLocale(language);
    this.locale.setCurrentLanguage(language);
    this.currentLanguage = language;

    this.translation.translationChanged().subscribe(
      () => { console.log(this.translation.translate('Sign in')); }
    );
  }
}
