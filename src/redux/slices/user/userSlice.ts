import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialUserState } from './userInitial';

import { GlobalVariables } from 'constants/global-variables';

const initialState = initialUserState;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        LOGIN: (state, action: PayloadAction<Partial<User.UserState>>) => {
            GlobalVariables.tokenInfo = {
                accessToken: action.payload?.accessToken,
                refreshToken: action.payload?.refreshToken,
            };
            return {
                ...state,
                ...action.payload,

                isLogin: true,
            };
        },
        LOGOUT: () => {
            return initialState;
        },
        UPDATE_USER: (state, action: PayloadAction<Partial<User.UserState>>) => {
            GlobalVariables.tokenInfo = {
                accessToken: action.payload?.accessToken,
                refreshToken: action.payload?.refreshToken,
            };
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const { LOGIN, LOGOUT, UPDATE_USER } = userSlice.actions;

export default userSlice.reducer;
