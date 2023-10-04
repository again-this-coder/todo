import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {labelsData} from '../../assets/todoData';

type Props = {
  label: string | null;
  setLabel: (name: string) => void;
};

const Labels: FC<Props> = ({label, setLabel}) => {
  const handleSelect = (itemLabel: string) => {
    setLabel(itemLabel);
  };
  return (
    <View style={styles.container}>
      {labelsData.map(({icon, color, text, id}) => (
        <View key={id} style={styles.itemContainer}>
          <TouchableOpacity
            onPress={() => handleSelect(text)}
            style={[styles.button, text === label && {backgroundColor: color}]}>
            {icon}
          </TouchableOpacity>
          <Text style={styles.number}>{text}</Text>
        </View>
      ))}
    </View>
  );
};

export default Labels;
