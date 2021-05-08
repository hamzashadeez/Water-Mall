import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import BottomStack from './BottomStack';
import Cart from '../Screens/Cart';
import CheckOut from '../Screens/CheckOut';

const CartStack = () => {
    const Stack = createStackNavigator()
    return (
       <Stack.Navigator screenOptions={{headerShown: false}}>
           <Stack.Screen name='Cart' component={Cart} />
           <Stack.Screen name='CheckOut' component={CheckOut} />
       </Stack.Navigator>
    )
}

export default CartStack
