import {StyleSheet} from 'react-native';
import {scaleByHeight, scaleByWidth, SCREEN_WIDTH} from '../../assets/style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    width: SCREEN_WIDTH - scaleByWidth(48),
  },
  emptySpace: {
    height: scaleByHeight(12),
  },
});
