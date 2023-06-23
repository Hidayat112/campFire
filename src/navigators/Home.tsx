import React from 'react';
import { Example } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Name from '../screens/Name';
import Gender from '../screens/Gender/Gender';
import Country from '../screens/Country';
import Age from '../screens/Age';
import ProfileStatic from '../screens/ProfileStatic';

const Stack = createStackNavigator();

// @refresh reset
const HomeNavigator = () => {
  const screenStepMap = [
    { name: 'Dashboard', intialParams: { step: 1 }, component: Home },
    { name: 'Name', intialParams: { step: 2 }, component: Name },
    { name: 'Gender', intialParams: { step: 3 }, component: Gender },
    { name: 'Country', intialParams: { step: 4 }, component: Country },
    { name: 'Age', intialParams: { step: 5 }, component: Age },
    { name: 'ProfileStatic', intialParams: { step: 6 }, component: ProfileStatic },
    { name: 'Adventures', intialParams: { step: 7}, component: Home },
    { name: 'Wishes', intialParams: { step: 8 }, component: Home },
    { name: 'NextAdventures', intialParams: { step: 9 }, component: Home },
  ];
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {screenStepMap.map((screen, idx) => {
        return (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            initialParams={screen.intialParams}
            component={screen.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default HomeNavigator;
