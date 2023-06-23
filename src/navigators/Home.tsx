import React from 'react';
import { Example } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Name from '../screens/Name';
import Gender from '../screens/Gender/Gender';
import Country from '../screens/Country';

const Stack = createStackNavigator();

// @refresh reset
const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Home} />
      <Stack.Screen name="Name" component={Name} />
      <Stack.Screen name="Gender" component={Gender} />
      <Stack.Screen name="Country" component={Country} />
      <Stack.Screen name="Age" component={Example} />
      <Stack.Screen name="ProfileStatic" component={Example} />
      <Stack.Screen name="Adventurous" component={Example} />
      <Stack.Screen name="Wishes" component={Example} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
