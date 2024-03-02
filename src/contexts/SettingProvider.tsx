import { TFunction } from 'i18next';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useColorScheme } from 'react-native';
// import { getLocales, getCalendars } from 'expo-localization';
import { getLocales } from 'expo-localization';

import i18n, { LanguageType } from 'i18n';
import { ThemeColor } from 'themes/colors';
import Storages, { KeyStorage } from 'utils/storages';

interface Props {
    children: React.ReactElement;
}

interface ILanguageContext {
    t: TFunction<'translation'>;
    language: LanguageType;
    updateLanguage: (language: LanguageType) => void;
}

interface IThemeContext {
    theme: ThemeColor;
    updateTheme: (theme: ThemeColor | null) => void;
}

type ISettingContext = ILanguageContext & IThemeContext;

const SettingContext = createContext<ISettingContext>({} as ISettingContext);

const SettingProvider = (props: Props) => {
    const { t } = useTranslation();
    const themeDevice = useColorScheme() || ThemeColor.Light;
    const [language, setLanguage] = useState<LanguageType>(LanguageType.Korean);
    const [theme, setTheme] = useState<ThemeColor>(ThemeColor.Light);

    const storage = new Storages().getInstance();

    const findOldLanguage = () => {
        storage.get(KeyStorage.Language).then(oldLanguage => {
            let languageCurrent: LanguageType;
            if (oldLanguage) {
                languageCurrent = oldLanguage as LanguageType;
            } else {
                const locales = getLocales();
                const languagePrioritized = locales[0].languageCode;
                languageCurrent =
                    languagePrioritized === LanguageType.Korean ? LanguageType.Korean : LanguageType.English;
            }

            // 개발 모드일때는 영어가 아니라 한국어로 설정
            // languageCurrent = __DEV__ ? LanguageType.Korean : LanguageType.English;
            console.debug(`${languageCurrent === 'ko' ? '현재 설정된 언어' : 'Current Language'}:`, languageCurrent === 'ko' ? '한국어' : 'English')
            updateLanguage(languageCurrent);
        });
    };

    const findOldTheme = () => {
        storage.get(KeyStorage.Theme).then(oldTheme => {
            oldTheme === ThemeColor.Dark ? setTheme(ThemeColor.Dark) : setTheme(ThemeColor.Light);
        });
    };

    useEffect(() => {
        findOldLanguage();
    }, []);

    useEffect(() => {
        findOldTheme();
    }, [themeDevice]);

    const updateLanguage = (value: LanguageType) => {
        setLanguage(value);
        i18n.changeLanguage(value).then(() => {
            storage.set(KeyStorage.Language, value).catch();
        });
    };

    const updateTheme = (themeColor: ThemeColor | null) => {
        if (themeColor) {
            // Todo
            themeColor === ThemeColor.Dark ? setTheme(ThemeColor.Dark) : setTheme(ThemeColor.Light);
            storage.set(KeyStorage.Theme, themeColor).catch();
        } else {
            storage.remove(KeyStorage.Theme).catch();
        }
    };

    return (
        <SettingContext.Provider value={{ t, language, theme, updateLanguage, updateTheme }}>
            {props.children}
        </SettingContext.Provider>
    );
};

export const useSetting = () => useContext(SettingContext);
export default SettingProvider;
