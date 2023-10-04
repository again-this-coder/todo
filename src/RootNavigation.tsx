import * as React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/homeScreen/HomeScreen';
import AddNewTaskScreen from './screens/addNewTaskScreen/AddNewTaskScreen';
import {Screens} from './screens/screens';
import {colors} from './assets/colors';

export default function RootNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.HOME_SCREEN}
          component={HomeScreen}
          options={{
            headerStyle: {backgroundColor: colors.black},
          }}
        />
        <Stack.Screen
          name={Screens.CREATE_TASK_SCREEN}
          component={AddNewTaskScreen}
          options={{
            headerStyle: {backgroundColor: colors.black},
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
