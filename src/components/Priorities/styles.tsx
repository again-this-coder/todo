import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {normalize, scaleByHeight, scaleByWidth} from '../../assets/style';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: scaleByHeight(22),
    paddingHorizontal: scaleByWidth(16),
    flexWrap: 'wrap',
    gap: scaleByWidth(16),
    flexDirection: 'row',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: scaleByWidth(6),
    padding: scaleByWidth(14),
    width: scaleByWidth(64),
    height: scaleByHeight(64),
    backgroundColor: colors.blackFaded,
    borderRadius: 4,
  },
  number: {
    color: colors.white,
    fontSize: normalize(18),
  },
  itemSelected: {
    backgroundColor: colors.purple,
  },
});
