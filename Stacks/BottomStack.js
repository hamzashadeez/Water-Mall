import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons'
import Home from '../Screens/Home'
import Profile from "../Screens/Profile";
import Cart from "../Screens/Cart";
import HomeStack from "./HomeStack";
import CartStack from "./CartStack";

const BottomStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home-sharp'
              : 'home';
          } else if (route.name === 'Profile') {
            iconName ='ios-person-circle-sharp';
          }
          else if (route.name === 'Cart') {
            iconName = 'cart';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'dodgerblue',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomStack;
