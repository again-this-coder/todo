import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {normalize, scaleByHeight, scaleByWidth} from '../../assets/style';

export const styles = StyleSheet.create({
  containter: {
    borderRadius: 8,
    backgroundColor: colors.blackFaded,
    paddingHorizontal: scaleByWidth(14),
    paddingVertical: scaleByHeight(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: normalize(18),
    lineHeight: normalize(22),
    color: colors.white,
  },
  details: {
    color: colors.whiteFaded,
  },
  checkbox: {
    width: scaleByWidth(20),
    height: scaleByHeight(20),
    borderRadius: 50,
    borderColor: colors.white,
    borderWidth: 1.3,
    marginRight: 14,
  },
  contentContainer: {
    flex: 1,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priorityBox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.purple,
    borderRadius: 4,
    paddingVertical: scaleByHeight(4),
    paddingHorizontal: scaleByWidth(8),
    gap: 4,
    alignItems: 'center',
  },
  priorityText: {
    color: colors.white,
  },
  additionalInfoContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  label: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderRadius: 4,
    paddingHorizontal: scaleByWidth(4),
  },
  labelText: {
    color: colors.white,
    fontSize: normalize(12),
  },
  modalTitle: {
    paddingTop: scaleByHeight(10),
    textAlign: 'center',
  },
  taskNameModal: {
    marginVertical: scaleByHeight(24),
    textAlign: 'center',
  },
});
