import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ScreenName } from 'src/constants/navigationScreenNames';
import { GenericNavigator } from 'src/navigation/navigators';
import { navigatorScreenOptions, navigatorScreenConfigs } from './config';

const { Navigator, Screen } = createStackNavigator();

export const MainStack = memo(() => (
  <GenericNavigator
    navigator={Navigator}
    screen={Screen}
    screenOptions={navigatorScreenOptions}
    screenConfigs={navigatorScreenConfigs}
  />
));

MainStack.displayName = ScreenName.MainStack;
