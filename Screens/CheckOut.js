import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Checkout = () => {
    return (
        <View  style={styles.container}>
            <Text>Checkout</Text>
        </View>
    )
}

export default Checkout

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    }
})
