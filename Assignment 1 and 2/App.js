import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GetStarted from './SCREENS/GetStarted';
import SignUp from './SCREENS/SignUp';
import Login from './SCREENS/Login';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('GetStarted');

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  let ScreenComponent;
  switch (currentScreen) {
    case 'SignUp':
      ScreenComponent = <SignUp navigate={navigate} />;
      break;
    case 'Login':
      ScreenComponent = <Login navigate={navigate} />;
      break;
    default:
      ScreenComponent = <GetStarted navigate={navigate} />;
  }

  return <View style={styles.container}>{ScreenComponent}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
