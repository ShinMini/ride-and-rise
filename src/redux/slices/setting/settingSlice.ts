import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { SettingStateType, initialSettingState } from './settingInitial';

const initialState = initialSettingState;

const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        SET_THEME: (state, action: PayloadAction<SettingStateType>) => {
            action.payload.theme === 'light' || action.payload.theme === 'dark'
                ? (state.theme = action.payload.theme)
                : (state.theme = 'light');
        },
        UPDATE_STORED_ID: (state, action: PayloadAction<string | undefined>) => {
            state.storedId = action.payload;
        },
    },
});

export const { SET_THEME, UPDATE_STORED_ID } = settingSlice.actions;

export default settingSlice.reducer;
