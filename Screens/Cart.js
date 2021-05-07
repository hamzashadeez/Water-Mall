import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Cart = () => {
    return (
        <View style={styles.container}>
            <Text>Cart</Text>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    }
})