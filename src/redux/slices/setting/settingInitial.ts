export type SettingStateType = {
    storedId?: string;
    theme: 'light' | 'dark';
};

export const initialSettingState: SettingStateType = {
    theme: 'light',
    storedId: undefined,
} as const;
