import metrics from '../theme/metrics';
import { Dimensions, PixelRatio, Platform } from 'react-native';

//Base iPhone iPhoneX Scale
const scale = metrics.screenWidth / 375;

export function normalize(size) {
    const newSize = size * scale;
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)); //- 2
    }
}

export function reverseNormalize(size) {
    const newSize = size / scale;
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)); //- 2
    }
}

export function testID(id) {
    return Platform.OS === 'android'
        ? { accessible: true, accessibilityLabel: id }
        : { testID: id }
}
