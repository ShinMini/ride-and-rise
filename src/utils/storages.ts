// import AsyncStorage from '@react-native-async-storage/async-storage';

import { osInternalBuildId } from 'expo-device';

import { LanguageType } from 'i18n';
import { ThemeColor } from 'themes/colors';

import * as SecureStore from 'expo-secure-store';

export enum KeyStorage {
    Language = 'rise_and_ride_language',
    Theme = 'rise_and_ride_theme',
    isTurnOfIntro = 'isTurnOfIntro',
    fcm = 'fcmToken',
}

type StorageValue = LanguageType | ThemeColor;

const storageConfig = {
    id: osInternalBuildId,
    key: process.env.EXPO_PUBLIC_ENCRYPTION_KEY,
} as const;

export class Storage {
    private instance: Storage;
    public getInstance() {
        if (!this.instance) {
            this.instance = new Storage();
        }
        return this.instance;
    }

    private getEncryptedKey(key: string) {
        const prefix = `${storageConfig.id}_${storageConfig.key}`;
        const encryptedKey = `${prefix}_${key}`;
        console.log('[get encryptedKey]: originKey, encryptedKey: ', key, encryptedKey);
        return encryptedKey;
    }

    async get(key: KeyStorage): Promise<string | undefined> {
        const encryptedKey = this.getEncryptedKey(key);

        const value = await SecureStore.getItemAsync(encryptedKey);
        console.log('[storage get] value:', value);
        return value;
    }

    async set(key: KeyStorage, value: StorageValue | string) {
        const encryptedKey = this.getEncryptedKey(key);
        const encryptedValue = await SecureStore.setItemAsync(encryptedKey, value);

        console.log('[storage set] key, value:', encryptedKey, encryptedValue);

        return encryptedValue;
    }

    async remove(key: KeyStorage) {
        return await SecureStore.deleteItemAsync(key);
    }

    async clear() {
        return await SecureStore.deleteItemAsync(storageConfig.id);
    }
}

export default Storage;
