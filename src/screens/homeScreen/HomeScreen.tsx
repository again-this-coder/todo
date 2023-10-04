import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import images from '../../assets/images';
import {styles} from './styles';
import AddIcon from '../../assets/images/addIcon.svg';
import {Screens} from '../screens';
import TodoList from '../../components/todoList/TodoList';
import {fakeData} from '../../components/todoList/fakeData';
import PushNotification from 'react-native-push-notification';
import {getTodos} from '../../features/todos/todosSlice';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = ({navigation}: {navigation: any}) => {
  const handleAddNewTask = () => {
    navigation.navigate(Screens.CREATE_TASK_SCREEN);
  };

  const dispatch = useDispatch();

  console.log(todoList);

  const createChannels = () => {
    PushNotification.createChannel(
      {
        channelId: 'new-id',
        channelName: 'Your Channel Name',
        channelDescription: 'Your Channel Description',
      },
      create => console.log(`channel returrned ${create}`),
    );
  };

  useEffect(() => {
    createChannels();
  }, []);

  const handleNotification = () => {
    PushNotification.localNotification({
      channelId: 'new-id',
      title: 'You clicked a notification',
      message: 'This is the message of the notification.',
      importance: 'high', // Set importance to high
      priority: 'high', // Set priority to high
    });
  };

  return (
    <View style={styles.container}>
      {!fakeData.length ? (
        <View style={styles.emptyTodoContainer}>
          <Image source={images.emptyList} />
          <Text style={styles.title}>What do you want to do today?</Text>
          <Text style={styles.description}>Tap + to add your tasks</Text>
        </View>
      ) : (
        <TodoList data={fakeData} />
      )}
      <TouchableOpacity style={styles.addIcon} onPress={handleNotification}>
        <AddIcon />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
