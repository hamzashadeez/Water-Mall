import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Profile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('Auth')} style={{backgroundColor: "white", padding: 15, width: 150, alignItems: "center", justifyContent: "center", elevation: 2}}>
                <Text style={{color: "dodgerblue", fontWeight: "bold", fontSize: 17}}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    }
})
