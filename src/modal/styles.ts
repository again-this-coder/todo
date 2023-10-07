import {StyleSheet} from 'react-native';
import {colors} from '../assets/colors';
import {
  normalize,
  scaleByHeight,
  scaleByWidth,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../assets/style';

export const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    padding: scaleByWidth(8),
    paddingBottom: scaleByHeight(16),
    width: SCREEN_WIDTH * 0.95,
    backgroundColor: colors.grey,
    borderRadius: 4,
    justifyContent: 'space-between',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: colors.whiteFaded,
  },
  headerText: {
    color: colors.white,
    paddingBottom: scaleByHeight(10),
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: normalize(20),
  },
  button: {
    paddingVertical: scaleByHeight(12),
    paddingHorizontal: scaleByWidth(24),
    borderRadius: 4,
    backgroundColor: colors.purple,
    width: SCREEN_WIDTH * 0.4,
  },
  buttonText: {
    textAlign: 'center',
    color: colors.white,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonCancel: {
    backgroundColor: colors.red,
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: colors.white,
    opacity: 0.4,
  },
  inActive: {
    opacity: 0.4,
  },
  singleButton: {
    width: '90%',
  },
});
