import { Language } from './language.model';
import { AvailableLanguageCodes } from './available-language-codes.model';


export const AvailableLanguages: Language[] = [
  {
    CultoreName: 'en-US',
    DisplayName: 'English (US)',
    Code: AvailableLanguageCodes.US
  },
  {
    CultoreName: 'pl-PL',
    DisplayName: 'Polski',
    Code: AvailableLanguageCodes.PL
  }
];
