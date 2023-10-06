import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Button} from 'react-native'
import { useAuth, useUser } from "@clerk/clerk-expo";
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

const SignOut = () => {
  const { isLoaded,signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View>
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};
export default function Profile(): JSX.Element {
  return (
    <View>
        <Text>Profile</Text>
        <Text>Welcome {useUser().user?.fullName}</Text>
        <SignOut />
    </View>
  )
}