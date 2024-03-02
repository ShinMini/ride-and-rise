import AsyncStorage from '@react-native-async-storage/async-storage';
import { Reducer } from 'redux';
import { persistReducer, Storage } from 'redux-persist';
import SecureStorage from 'utils/storages';
// import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

export default function persistReducerUtil<T>(
    key: string,
    reducer: Reducer<T>,
    whitelist?: string[],
    // version: number = -1,
) {
    const getStorage = () => {
        if (__DEV__) {
            return AsyncStorage;
        }
        const secureStorage = new SecureStorage().getInstance();
        const reduxStorage: Storage = {
            setItem: (k, value) => {
                return secureStorage.set(k, value);
            },
            getItem: k => {
               return secureStorage.get(k);
            },
            removeItem: k => {
                return secureStorage.remove(k);
            },
        };
        return reduxStorage;
    };

    const storage = getStorage();

    const persistConfig = {
        key,
        storage,
        whitelist,
        debug: __DEV__,
        // stateReconciler: autoMergeLevel2,
        // version,
    };

    return persistReducer<T>(persistConfig, reducer);
}
