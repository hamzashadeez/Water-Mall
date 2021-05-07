import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'

const Uncomming = () => {
    return (
        <View style={styles.cont}>
           <View style={{flex: 1}}>
               <Text style={{fontSize: 18, fontWeight: "bold"}}>Uncomming Tech </Text>
               <Text style={{fontSize: 16}}>Apple launched it's new newest feature in Apple Airpod</Text>
               <TouchableOpacity style={styles.shop}>
                   <Text style={{fontSize: 12, color: "dodgerblue"}}>Shop Now</Text>
               </TouchableOpacity>
           </View>
           <Image source={require('../assets/apple.jpg')}  style={{width:130, height:130, marginLeft: 20, borderRadius: 10}}/>
        </View>
    )
}

export default Uncomming

const styles = StyleSheet.create({
    cont:{
        backgroundColor: "white",
        marginHorizontal: 10,
        marginVertical: 15,
        padding: 15,
        borderRadius: 13,
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center',
        height: 200
    },
    shop:{
        width: 80,
        marginTop:15,
        height:30,
        borderRadius: 15,
        borderColor: 'dodgerblue',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
