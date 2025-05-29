import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Screens
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import UserRegisterScreen from './screens/UserRegisterScreen';
import EventRegisterScreen from './screens/EventRegisterScreen';
import EditProfileScreen from './screens/EditProfileScreen';

// Tab Navigator
import TabNavigator from './navigation/TabNavigator'; 

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      const user = await AsyncStorage.getItem('userProfile');
      setIsLoggedIn(!!user);
      setTimeout(() => setShowSplash(false), 3000);
    };
    checkLogin();
  }, []);

  let screens;

  if (showSplash) {
    screens = (
      <Stack.Screen name="Splash" component={SplashScreen} />
    );
  } else if (isLoggedIn) {
    screens = (
      <>
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="EventRegister" component={EventRegisterScreen} />
      </>
    );
  } else {
    screens = (
      <>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="UserRegister" component={UserRegisterScreen} />
      </>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {screens}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
