import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { MyCars } from '../screens/MyCars';
import { SignIn } from '../screens/SignIn/inde';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="CarDetails"
        component={CarDetails}
      />
      <Screen
        name="Scheduling"
        component={Scheduling}
      />
      <Screen
        name="SchedulingDetails"
        component={SchedulingDetails}
      />
      <Screen
        name="SchedulingComplete"
        component={SchedulingComplete}
      />
      <Screen
        name="MyCars"
        component={MyCars}
      />
      <Screen
        name="SignIn"
        component={SignIn}
      />
    </Navigator>
  );
}
