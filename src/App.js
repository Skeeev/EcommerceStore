import 'react-native-gesture-handler';
import React from 'react';
import { NativeModules } from 'react-native';
import { Provider } from 'react-redux';

import { isAndroidPlatform } from './utils/platform';
import { store } from './store';
import { AppNavigator } from './navigation';
import { AppModal } from './components';

const { UIManager } = NativeModules;

if (isAndroidPlatform()) {
  UIManager?.setLayoutAnimationEnabledExperimental(true);
}

const App = () => (
  <Provider store={store}>
    <AppNavigator />
    <AppModal />
  </Provider>
);

export default App;
