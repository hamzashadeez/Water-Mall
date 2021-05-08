import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Product = ({route, navigation}) => {
    const {data} = route.params
    return (
        <View style={styles.container}>
            <Image resizeMode='cover' source={data.url} style={styles.img}/>
            <View style={{backgroundColor: 'white', padding: 15}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'dodgerblue', marginBottom: 5}}>{data.name}</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 5}}>{data.price}</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Free Shipping</Text>
            </View>
            <TouchableOpacity style={{padding: 15, backgroundColor: 'dodgerblue', elevation: 2, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: "white"}}>Add To Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding: 15, backgroundColor: 'white', elevation: 2, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: "dodgerblue"}}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    img:{
        width: "100%",
        height: 300
    }
})
