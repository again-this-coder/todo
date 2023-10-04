import {View, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Todo from '../Todo/Todo';

const renderItem = ({item}) => {
  return (
    <Todo
      title={item.title}
      description={item.description}
      priority={item.priority}
      label={item.label}
      labelColor={item.labelColor}
      id={item.id}
    />
  );
};

const extraSpace = () => {
  return <View style={styles.emptySpace} />;
};

const TodoList = ({data}) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={extraSpace}
      />
    </View>
  );
};

export default TodoList;
