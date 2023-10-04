import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import FlagIcon from '../../assets/images/flag.svg';
import {styles} from './styles';
import {scaleByWidth} from '../../assets/style';
import {priorityNumbers} from '../../assets/todoData';

type Props = {
  priority: number | null;
  setPriority: (id: number) => void;
};
const Priorities: FC<Props> = ({priority, setPriority}) => {
  const handleSelect = (itemNum: number) => {
    setPriority(itemNum);
  };
  return (
    <View style={styles.container}>
      {priorityNumbers.map(number => (
        <TouchableOpacity
          onPress={() => handleSelect(number)}
          style={[
            styles.itemContainer,
            number === priority && styles.itemSelected,
          ]}
          key={number}>
          <FlagIcon height={scaleByWidth(24)} width={scaleByWidth(24)} />
          <Text style={styles.number}>{number}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Priorities;
