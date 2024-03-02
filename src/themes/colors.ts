export enum ThemeColor {
    Light = 'light',
    Dark = 'dark',
}

const Common = {
    yellow: '#FEE500',
    blue: '#5628F4',
    blue2: '#5628F5',
    blue3: '#3A78E9',
    gray: '#9CA3AF',
    lightGray2: '#F1F1F1',
    lightGray3: '#EBF1FD',
    darkGray: '#2E2E33',
    shadowColorMinium: '#d7e2f5',
    shadowColorMedium: 'rgba(20, 20, 20, 0.5)',

    neutralGray_900: '#171717',
    neutralGray_800: '#262626',
    neutralGray_700: '#404040',
    neutralGray_600: '#525252',
    neutralGray_500: '#737373',
    neutralGray_400: '#A3A3A3',
    neutralGray_300: '#D4D4D4',
    neutralGray_200: '#E5E5E5',
    neutralGray_100: '#F5F5F5',
    neutralGray_50: '#FAFAFA',

    darkBlue: '#334155',
    darkBlueGray_900: '#111827',
    darkBlueGray_800: '#1F2937',
    darkBlueGray_700: '#374151',
    darkBlueGray_600: '#4B5563',
    darkBlueGray_500: '#6B7280',
    darkBlueGray_400: '#D1D5DB',
    darkBlueGray_300: '#D1D5DB',
    darkBlueGray_200: '#E5E7EB',
    darkBlueGray_100: '#F3F4F6',
    darkBlueGray_50: '#F9FAFB',

    emojiGray: '#F6F5F1',

    blueGray: '#64748B',

    error_900: '#AB1010',
    error_800: '#C31212',
    error_300: '#DA1414',
    error_200: '#F48989',
    error_100: '#FEEFEF',

    success_900: '#1C5629',
    success_800: '#226A33',
    success_300: '#287D3C',
    success_200: '#5ACA75',
    success_100: '#EDF9F0',

    warning_900: '#863A00',
    warning_800: '#9F4500',
    warning_300: '#B95000',
    warning_200: '#FF8F39',
    warning_100: '#FFF4EC',

    info_900: '#234584',
    info_800: '#294F98',
    info_300: '#2E5AAC',
    info_200: '#89A7E0',
    info_100: '#EEF2FA',

    borderGray: '#D9D9D9',
    textGray75: '#757575',

    // new color
    transparent: 'transparent',
    black: '#000000',
    white: '#FFFFFF',
    red: '#DA1414', // error_300
    yellowMain: '#EEE40A',
    main1: '#D20F58',
    green: '#00C73C',
    gray2: '#B1B1B1',
    lightGray: '#E7E7E7',

    greenOpacity10: 'rgba(0, 199, 60, 0.1)',
    redOpacity10: '#DA14141A',

    text1: '#111827', // darkBlueGray_900
    text2: '#374151', // darkBlueGray_700
    text3: '#64748B', // blueGray
    text4: '#9CA3AF', // gray
    text5: '#4B5563', // darkBlueGray_600
    text6: '#262626', // neutralGray_800
    text7: '#475569',
    text8: '#0C243B',

    // ========================== THEFITLOVE ==========================
    Primary01: '#F6F5F1',
    Primary02: '#E4E2D9',
    Primary03: '#E4E2D9',
    Secondary: '#A58555', // darkBlueGray_500
    Secondary01: '#A58555', //
    Gray01: '#353535',
    Gray02: '#9B9B9B',
    Gray03: '#D7D7D7',
    Gray04: '#FFFFFF',
    Gray05: '#000000',
    Gradient01: '#F6F5F1',
    Gradient02: '#F3F2ED',
    Gradient03: '#F0EFE9',
    Gradient04: '#EDECE5',
    Gradient05: '#EAE8E1',
    Gradient06: '#E7E5DD',
    Gradient07: '#E4E2D9',
    Transparent: 'transparent',

    bgLinear: 'linear-gradient(180deg, #F6F5F1 0%, #E4E2D9 100%)',

    blackOpacity10: 'rgba(0, 0, 0, 0.1)',
    blackOpacity70: 'rgba(0, 0, 0, 0.7)',

    line1: '#D1D5DB', // darkBlueGray_400, darkBlueGray_300
    line2: '#E5E7EB', // darkBlueGray_200
    line3: '#EEEEEE',

    bg1: '#F9FAFB', // darkBlueGray_50
    bg2: '#F3F4F6', // darkBlueGray_100
    bg3: '#F6F7F8',
    bg4: '#EBF1FD',
    bg5: '#D0D5DA',
    // bgHome: '#2662D0',
    bgHome: '#F48989',
} as const;
const LightTheme = {
    backgroundColor: '#FFFFFF',
    textColor: '#333333',

    black: '#000000',
    white: '#FFFFFF',
    blue: '#5628F4',
    blue2: '#5628F5',
    blue3: '#3A78E9',
    gray: '#9CA3AF',
    gray2: '#B1B1B1',
    lightGray: '#E7E7E7',
    lightGray2: '#F1F1F1',
    lightGray3: '#EBF1FD',
    yellow: '#FEE500',
    darkGray: '#2E2E33',
    shadowColorMinium: '#d7e2f5',
    shadowColorMedium: 'rgba(20,20,20, 0.1)',

    borderGray: '#D9D9D9',
    textGray75: '#757575',

    textTitle: '#353535',

    ...Common,
} as const;

const DarkTheme = {
    backgroundColor: '#2B2B2F',
    textColor: '#FFFFFF',

    black: '#000000',
    white: '#FFFFFF',
    blue: '#5628F4',
    blue2: '#5628F5',
    blue3: '#3A78E9',
    gray: '#9CA3AF',
    gray2: '#B1B1B1',
    lightGray: '#E7E7E7',
    lightGray2: '#F1F1F1',
    lightGray3: '#EBF1FD',
    yellow: '#FEE500',
    darkGray: '#2E2E33',
    shadowColorMinium: '#d7e2f5',
    shadowColorMedium: 'rgba(20,20,20, 0.1)',

    borderGray: '#D9D9D9',
    textGray75: '#757575',

    textTitle: '#353535',

    ...Common,
} as const;

const Colors = {
    ...Common,
    light: LightTheme,
    dark: DarkTheme,
} as const;

export default Colors;
