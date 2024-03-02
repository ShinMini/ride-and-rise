import { Dimensions, Platform, StatusBar } from 'react-native';

import { ifIphoneX, isIphoneX } from 'utils/dimensions';

const SIZES = {
    srcWidth: Dimensions.get('window').width,

    srcHeight: Dimensions.get('window').height,

    statusBarHeight: Platform.select({
        ios: ifIphoneX(47, 20),
        android: StatusBar.currentHeight,
        default: 0,
    }),

    bottomSpace: isIphoneX() ? 34 : 0,
};

export default SIZES;
