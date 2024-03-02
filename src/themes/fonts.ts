// Apple SD Gothic Neo
// --Font name: AppleSDGothicNeo-Regular
// --Font name: AppleSDGothicNeo-Thin
// --Font name: AppleSDGothicNeo-UltraLight
// --Font name: AppleSDGothicNeo-Light
// --Font name: AppleSDGothicNeo-Medium
// --Font name: AppleSDGothicNeo-SemiBold
// --Font name: AppleSDGothicNeo-Bold
// Family name: Apple Symbols
// --Font name: AppleSymbols
// Family name: AppleSDGothicNeoB00
// --Font name: AppleSDGothicNeoB00
// Family name: AppleSDGothicNeoEB00
// --Font name: AppleSDGothicNeoEB00
// Family name: AppleSDGothicNeoH00
// --Font name: AppleSDGothicNeoH00
// Family name: AppleSDGothicNeoR00
// --Font name: AppleSDGothicNeoR00
// Family name: AppleSDGothicNeoSB00

import { StyleProp, TextStyle } from 'react-native';
import scales from 'utils/scales';

// --Font name: AppleSDGothicNeoSB00
const defaultFontConfig = {
    extraLight: {
        fontSize: 8,
        fontWeight: '100',
    },
    thin: {
        fontSize: 10,
        fontWeight: '200',
    },
    light: {
        fontSize: 12,
        fontWeight: '300',
    },
    regular: {
        fontSize: 14,
        fontWeight: '400',
    },
    medium: {
        fontSize: 16,
        fontWeight: '500',
    },
    semiBold: {
        fontSize: 18,
        fontWeight: '600',
    },
    bold: {
        fontSize: 20,
        fontWeight: '700',
    },
    extraBold: {
        fontSize: 22,
        fontWeight: '900',
    },
} as const;

const Fonts = {
    PretendardExtraLight: {
        ...defaultFontConfig.extraLight,
        fontFamily: 'Pretendard-ExtraLight',
    },
    PretendardThin: {
        ...defaultFontConfig.thin,
        fontFamily: 'Pretendard-Thin',
    },
    PretendardLight: {
        ...defaultFontConfig.light,
        fontFamily: 'Pretendard-Light',
    },
    PretendardRegular: {
        ...defaultFontConfig.regular,
        fontFamily: 'Pretendard-Regular',
    },
    PretendardSemiBold: {
        ...defaultFontConfig.semiBold,
        fontFamily: 'Pretendard-SemiBold',
    },
    PretendardBold: {
        ...defaultFontConfig.bold,
        fontFamily: 'Pretendard-Bold',
    },
    PretendardExtraBold: {
        ...defaultFontConfig.extraBold,
        fontFamily: 'Pretendard-ExtraBold',
    },
    AppleSDGothicNeoRegular: {
        ...defaultFontConfig.regular,
        fontFamily: 'AppleSDGothicNeo-Regular',
    },
    AppleSDGothicNeoMedium: {
        ...defaultFontConfig.medium,
        fontFamily: 'AppleSDGothicNeo-Medium',
    },
    AppleSDGothicNeoSemibold: {
        ...defaultFontConfig.semiBold,
        fontFamily: 'AppleSDGothicNeoSB',
    },
    AppleSDGothicNeoBold: {
        ...defaultFontConfig.bold,
        fontFamily: 'AppleSDGothicNeo-Bold',
    },
    SBAggroBold: {
        ...defaultFontConfig.bold,
        fontFamily: 'SBAggroM',
    },
    SBAggroMedium: {
        ...defaultFontConfig.medium,
        fontFamily: 'SBAggroM',
    },
    NotoSansKRBold: {
        ...defaultFontConfig.bold,
        fontFamily: 'NotoSansKR-Bold',
    },
    NotoSansKRMedium: {
        ...defaultFontConfig.medium,
        fontFamily: 'NotoSansKR-Medium',
    },
    NotoSansKRRegular: {
        ...defaultFontConfig.regular,
        fontFamily: 'NotoSansKR-Regular',
    },
    NotoSansKRLight: {
        ...defaultFontConfig.light,
        fontFamily: 'NotoSansKR-Light',
    },
    PoppinsMedium: {
        ...defaultFontConfig.medium,
        fontFamily: 'Poppins-Medium',
    },
    PoppinsRegular: {
        ...defaultFontConfig.regular,
        fontFamily: 'Poppins-Regular',
    },
} as const;

export default Fonts;
