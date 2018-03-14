import { Component, OnInit } from '@angular/core';

import { I18nService } from '../i18n.service';
import { Language } from '../language.model';
import { AvailableLanguages } from '../available-languages.model';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
})
export class LanguageSelectorComponent implements OnInit {

  public languages: Array<Language>;
  public currentLanguage: Language;

  constructor(private i18n: I18nService) {
  }

  ngOnInit() {
    this.languages = AvailableLanguages;
    this.currentLanguage = this.i18n.currentLanguage;
  }

  setLanguage(language: Language) {
    this.currentLanguage = language;
    this.i18n.setLanguage(language)
  }
}
