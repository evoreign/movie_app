import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './src/navigations/BottomTabNavigation'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Button} from 'react-native'
import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import Constants from "expo-constants"
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import SignInWithOAuth from './components/signInWithOauth';
import * as SecureStore from "expo-secure-store";

const CLERK_PUBLISHABLE_KEY='pk_test_cG9zc2libGUtaG9yc2UtNTAuY2xlcmsuYWNjb3VudHMuZGV2JA'

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App(): JSX.Element {

  return (
    <GestureHandlerRootView style={{flex:1}}>
      <NavigationContainer>
        <SafeAreaView style={{flex:1, marginTop: StatusBar.currentHeight}}>
          <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
          <SignedIn>
            <BottomTabNavigator />
          </SignedIn>
          <SignedOut>
            <Text>Sign in to use the app</Text>
            <SignInWithOAuth />
          </SignedOut>
          </ClerkProvider>
        </SafeAreaView>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}