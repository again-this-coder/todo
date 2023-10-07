import {StyleSheet} from 'react-native';
import {normalize, scaleByHeight} from '../../assets/style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  emptyTodoContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: normalize(12),
  },
  title: {
    fontSize: normalize(20),
    color: 'white',
  },
  description: {
    fontSize: 16,
    color: 'white',
  },
  addIcon: {
    position: 'absolute',
    bottom: scaleByHeight(50),
    right: '40%',
  },
});
