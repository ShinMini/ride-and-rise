import { combineReducers, configureStore, Tuple, Middleware } from '@reduxjs/toolkit';
import createDebugger from 'redux-flipper';
import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';

import persistReducerUtil from './persists';
import chatRoomReducer from './slices/chatRoom/chatRoomSlice';
import matchingCardReducer from './slices/matchingCard/matchingCardSlice';
import settingReducer from './slices/setting/settingSlice';
import userReducer from './slices/user/userSlice';

import reactotron from '../../ReactotronConfig';

const mainLog = createLogger({
    collapsed: true,
    duration: true,
});

const rootReducer = combineReducers({
    user: persistReducerUtil('user', userReducer),
    matchingCard: persistReducerUtil('matchingCard', matchingCardReducer),
    setting: persistReducerUtil('setting', settingReducer),
    chatRoom: chatRoomReducer,
});

const MIDDLEWARE: Middleware[] = [];
if (__DEV__) {
    MIDDLEWARE.push(mainLog);
    MIDDLEWARE.push(createDebugger());
}

const enhancers = __DEV__ ? [reactotron.createEnhancer()!] : [];

export const store = configureStore({
    reducer: rootReducer,
    enhancers(getDefaultEnhancers) {
        return getDefaultEnhancers().concat(enhancers);
    },
    middleware: () => new Tuple(...MIDDLEWARE),
    devTools: __DEV__,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
