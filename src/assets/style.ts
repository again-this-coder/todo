import {Dimensions, Platform, StatusBar} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

function isIphoneX() {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (SCREEN_HEIGHT === 780 ||
      SCREEN_WIDTH === 780 ||
      SCREEN_HEIGHT === 812 ||
      SCREEN_WIDTH === 812 ||
      SCREEN_HEIGHT === 844 ||
      SCREEN_WIDTH === 844 ||
      SCREEN_HEIGHT === 896 ||
      SCREEN_WIDTH === 896 ||
      SCREEN_HEIGHT === 926 ||
      SCREEN_WIDTH === 926)
  );
}

const isAndroid = Platform.OS === 'android';

export function normalize(size: number) {
  const standardScreenHeight = 812;

  const standardLength =
    SCREEN_WIDTH > SCREEN_HEIGHT ? SCREEN_WIDTH : SCREEN_HEIGHT;

  const offset =
    SCREEN_WIDTH > SCREEN_HEIGHT
      ? 0
      : !isAndroid
      ? 78
      : Number(StatusBar.currentHeight);

  const deviceHeight =
    isIphoneX() || isAndroid ? standardLength - offset : standardLength;

  const heightPercent = (size * deviceHeight) / standardScreenHeight;

  return Math.round(heightPercent);
}

export const scaleByWidth = (size: number) =>
  (SCREEN_WIDTH / guidelineBaseWidth) * size;
export const scaleByHeight = (size: number) =>
  (SCREEN_HEIGHT / guidelineBaseHeight) * size;
