/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import Counter from './src/Counter';
import ToDo from './src/ToDo';
import NativeBaseComponents from './src/NativeBaseComponents';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Counter') {
            iconName = focused
              ? 'sort'
              : 'sort';
          } else if (route.name === 'ToDo') {
            iconName = focused ? 'tasks' : 'tasks';
          } else if (route.name === 'NativeBaseComponents') {
            iconName = focused ? 'dice-d20' : 'dice-d20';
          }

          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name='Counter' component={Counter} />
      <Tab.Screen name='ToDo' component={ToDo} />
      <Tab.Screen name='NativeBaseComponents' component={NativeBaseComponents} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Counter'>
        <Drawer.Screen name='Counter' component={Counter} />
        <Drawer.Screen name='ToDo' component={ToDo} />
        <Drawer.Screen name='TabNavigation' component={TabNavigation} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
