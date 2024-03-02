import Config from 'react-native-config';

import SIZES from 'themes/sizes';

export default function scales(size: number): number {
    return (size * SIZES.srcWidth) / parseInt(Config.WIDTH_DESIGN!);
}

export function scaleDefault(size: number): number {
    return (size * SIZES.srcWidth) / 360;
}
