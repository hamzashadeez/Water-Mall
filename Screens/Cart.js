import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Cart = () => {
    return (
        <View style={styles.container}>
            <View style={{ padding: 15, backgroundColor: 'white' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: "dodgerblue", textAlign: "center" }}>Cart</Text>
            </View>
            <View>
                <View style={{marginTop: 10, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20 ,padding: 15, backgroundColor: 'white', width: "90%", marginLeft: "5%", elevation: 2 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: "black" }}>Snickers</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: "seagreen" }}>$20.99</Text>
                </View>
                <View style={{marginTop: 10, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20 ,padding: 15, backgroundColor: 'white', width: "90%", marginLeft: "5%", elevation: 2 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: "black" }}>Apple Airpod</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: "seagreen" }}>$250.99</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%", paddingHorizontal: 20, justifyContent: "space-between", marginTop: 40 }}>
                <TouchableOpacity style={{ padding: 15, backgroundColor: "white" }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: "dodgerblue" }}>Empty Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 15, backgroundColor: "dodgerblue" }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: "white" }}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})
