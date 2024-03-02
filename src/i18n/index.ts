import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en';
import ko from './ko';

export enum LanguageType {
    English = 'en',
    Korean = 'ko',
}

i18next
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        interpolation: {
            escapeValue: true,
        },
        lng: LanguageType.English,
        fallbackLng: LanguageType.English,
        resources: {
            en: { translation: en },
            ko: { translation: ko },
        },
    })
    .catch(_err => {
        // TODO: Log i18n init failed
    });

export default i18next;
