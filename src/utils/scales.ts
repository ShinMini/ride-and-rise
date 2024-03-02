import Config from 'constants/config';
import SIZES from 'themes/sizes';

export default function scales(size: number): number {
    return (size * SIZES.srcWidth) / parseInt(Config.WIDTH_DESIGN, 10);
}

export function scaleDefault(size: number): number {
    return (size * SIZES.srcWidth) / 360;
}
