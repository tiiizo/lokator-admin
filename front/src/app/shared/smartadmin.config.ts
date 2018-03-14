import { AvailableLanguageCodes } from './i18n/available-language-codes.model';

export interface Config {
  readonly defaultLocale: AvailableLanguageCodes;
  smartSkin: string;
  apiUrl: string;
}

export const config: Config = {
  defaultLocale: AvailableLanguageCodes.PL,
  apiUrl: 'assets/api',
  smartSkin: 'smart-style-1',
}
