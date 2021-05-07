import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import BottomStack from './BottomStack';

const AppStack = () => {
    return (
        <NavigationContainer>
            <BottomStack/>
        </NavigationContainer>
    )
}

export default AppStack
