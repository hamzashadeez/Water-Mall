import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import BottomStack from './BottomStack';
import Home from '../Screens/Home';
import Product from '../Screens/Product';

const HomeStack = () => {
    const Stack = createStackNavigator()
    return (
       <Stack.Navigator screenOptions={{headerShown: false}}>
           <Stack.Screen name='Home' component={Home} />
           <Stack.Screen name='Product' component={Product} />
       </Stack.Navigator>
    )
}

export default HomeStack
