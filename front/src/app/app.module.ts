import { NgModule, ApplicationRef, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing'
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';

// Core providers
import { CoreModule } from '../core/core.module';

import { ModalModule } from 'ngx-bootstrap/modal';

import { L10nLoader, LocalizationModule, L10nConfig, StorageStrategy, ProviderType } from 'angular-l10n';
import { LayoutModule } from './shared/layout/layout.module';

const l10nConfig: L10nConfig = {
  locale: {
    languages: [
      { code: 'pl', dir: 'ltr' },
      { code: 'en', dir: 'ltr' }
    ],
    language: 'pl',
    storage: StorageStrategy.Local
  },
  translation: {
    providers: [
      { type: ProviderType.Static, prefix: './assets/langs/locate-' }
    ],
    caching: true,
    missingValue: 'No key'
  }
};

export function initL10n(l10nLoader: L10nLoader): Function {
  return () => l10nLoader.load();
}

@NgModule({
  imports: [
    LocalizationModule.forRoot(l10nConfig),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ModalModule.forRoot(),
    CoreModule,
    LayoutModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initL10n,
      deps: [L10nLoader],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {
  }
}

