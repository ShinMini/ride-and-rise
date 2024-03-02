import { Platform, StatusBar } from 'react-native';

import { ifIphoneX, isIphoneX } from './dimensions';
import scales from './scales';

export const CommonSize = {
    paddingTopHeader: Platform.OS === 'ios' ? (isIphoneX() ? scales(34) : scales(20)) : scales(20),

    headerHeight: scales(50),

    paddingBottom: isIphoneX() ? scales(20) : 0,
};

export const getStatusBarHeight = (safe?: boolean) => {
    return Platform.select({
        ios: ifIphoneX(safe ? 44 : 30, 20),
        android: StatusBar.currentHeight,
        default: 0,
    });
};

export const getBottomSpace = (): number => {
    return isIphoneX() ? 34 : scales(20);
};

export const HitSlop = {
    default: {
        top: scales(10),
        bottom: scales(10),
        left: scales(10),
        right: scales(10),
    },
    big: {
        top: scales(20),
        bottom: scales(20),
        left: scales(20),
        right: scales(20),
    },
};
