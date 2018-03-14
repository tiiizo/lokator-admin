import { Injectable, ApplicationRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { config } from '../smartadmin.config';
import { JsonApiService } from '../../../core/api/json-api.service';
import { Language } from './language.model';
import { AvailableLanguages } from './available-languages.model';
import { AvailableLanguageCodes } from './available-language-codes.model';

@Injectable()
export class I18nService {
  public state;
  public data: {};
  public currentLanguage: Language;

  constructor(private jsonApiService: JsonApiService, private ref: ApplicationRef) {
    this.state = new Subject();
    this.initLanguage(config.defaultLocale);
    this.fetch(this.currentLanguage.Code)
  }

  private fetch(locale: AvailableLanguageCodes) {
    this.jsonApiService.fetch(`/langs/${locale}.json`)
      .subscribe((data: any) => {
        this.data = data;
        this.state.next(data);
        this.ref.tick();
      })
  }

  private initLanguage(locale: AvailableLanguageCodes) {
    const language = AvailableLanguages.find((it) => {
      return it.Code === locale
    });
    if (language) {
      this.currentLanguage = language
    } else {
      throw new Error(`Incorrect locale used for I18nService: ${locale}`);
    }
  }

  setLanguage(language: Language) {
    this.currentLanguage = language;
    this.fetch(language.Code);
  }

  subscribe(sub: any, err: any) {
    return this.state.subscribe(sub, err)
  }

  public getTranslation(phrase: string): string {
    return this.data && this.data[phrase] ? this.data[phrase] : phrase
  }
}
