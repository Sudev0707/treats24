import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Screens from './Screens';
import TabNavigator from './TabNavigator';
import { TabBarProvider } from '../context/TabBarContext';

export type RootStackParamList = {
  SplashBrand: undefined;
  Auth: undefined;
  OTPVerification: undefined;
  SetLocation: undefined;
  Profile: undefined;
  Favorites: undefined;
  Deals: undefined;
  Cart: undefined;
  MainTabs: undefined;

  HeaderDemo1: undefined;
  HeaderDemo2: undefined;
  HeaderDemo3: undefined;
  HeaderDemo4: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoutes = () => {
  return (
    <SafeAreaProvider>
      <TabBarProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="SplashBrand"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="SplashBrand" component={Screens.SplashBrand} />
            <Stack.Screen name="Auth" component={Screens.Auth} />
            <Stack.Screen
              name="OTPVerification"
              component={Screens.OTPVerification}
            />
            <Stack.Screen name="SetLocation" component={Screens.SetLocation} />
            <Stack.Screen name="Favorites" component={Screens.Favorites} />
            <Stack.Screen name="Deals" component={Screens.Deals} />
            <Stack.Screen name="Cart" component={Screens.Cart} />
            <Stack.Screen name="Profile" component={Screens.Profile} />

            <Stack.Screen name="HeaderDemo1" component={Screens.HeaderDemo1} />
            <Stack.Screen name="HeaderDemo2" component={Screens.HeaderDemo2} />
            <Stack.Screen name="HeaderDemo3" component={Screens.HeaderDemo3} />

            <Stack.Screen name="MainTabs" component={TabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </TabBarProvider>
    </SafeAreaProvider>
  );
};

export default AppRoutes;
