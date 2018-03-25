import { L10nConfig, StorageStrategy, ProviderType } from 'angular-l10n';

export interface Config {
  smartSkin: string;
  apiUrl: string;
}

export const config: Config = {
  apiUrl: 'assets/api',
  smartSkin: 'smart-style-1',
}
