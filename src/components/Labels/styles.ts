import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {normalize, scaleByHeight, scaleByWidth} from '../../assets/style';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: scaleByHeight(22),
    paddingHorizontal: scaleByWidth(16),
    flexWrap: 'wrap',
    gap: scaleByWidth(40),
    rowGap: scaleByHeight(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: scaleByWidth(6),
  },
  number: {
    color: colors.white,
    fontSize: normalize(18),
  },
  itemSelected: {
    borderColor: colors.white,
  },
  button: {
    padding: scaleByWidth(16),
    width: scaleByWidth(64),
    height: scaleByHeight(64),
    borderRadius: 4,
    backgroundColor: colors.blackFaded,
  },
});
