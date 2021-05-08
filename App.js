import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppStack from './Stacks/AppStack'
import { UserContext, UserProvider } from './UserContext'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Stacks/AuthStack';
import { Log } from './log'


export default function App() {
  const [user] = useContext(UserContext);
  const Stack = createStackNavigator()
  // useEffect(() => {
  //   console.log(user.isSigned)
  // }, [user])
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <UserProvider>

          <StatusBar style="auto" />
          {/* {user.signed === "underfined" ? <AppStack /> : <AuthStack />} */}
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Auth' component={AuthStack} />
            <Stack.Screen name='Main' component={AppStack} />
          </Stack.Navigator>
        </UserProvider>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
