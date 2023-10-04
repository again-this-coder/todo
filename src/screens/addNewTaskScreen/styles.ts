import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {
  normalize,
  scaleByHeight,
  scaleByWidth,
  SCREEN_WIDTH,
} from '../../assets/style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scaleByWidth(10),
  },
  createButton: {
    position: 'absolute',
    bottom: scaleByHeight(60),
    backgroundColor: colors.purple,
    borderRadius: 50,
    width: SCREEN_WIDTH,
  },
  buttonText: {
    paddingVertical: scaleByHeight(18),
    textAlign: 'center',
    fontSize: normalize(16),
    fontWeight: '500',
    color: colors.white,
  },
  input: {
    marginTop: scaleByHeight(40),
    color: colors.white,
    borderWidth: 2,
    borderColor: colors.white,
    padding: scaleByWidth(10),
    borderRadius: 8,
  },
  descriptionContainer: {
    marginTop: scaleByHeight(18),
    height: 140,
    borderWidth: 2,
    borderColor: colors.white,
    padding: scaleByWidth(10),
    borderRadius: 8,
    color: colors.white,
  },
  priorityContainer: {
    marginTop: scaleByHeight(18),
    backgroundColor: colors.purple,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingVertical: scaleByHeight(10),
    width: '50%',
  },
  labelText: {
    color: colors.white,
  },
  marginRight: {
    marginRight: scaleByWidth(4),
  },
  disabled: {
    opacity: 0.4,
  },
});
