import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import HomeHeader from "../Components/HomeHeader";
import Uncomming from "../Components/Uncomming";
import {Data} from '../data'


const Product = ({ url, name, price, navigation }) => {
  const data = {url, name, price}
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("Product", {data:data})} style={styles.product}>
      <Image
        source={url}
        style={{ height: 200, width: "100%" }}
      />
      <View style={{padding: 10}}>
        <Text style={{fontSize: 17, fontWeight: "800"}}>{name}</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'seagreen'}}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <Text style={{ marginLeft: 15, fontWeight: "bold", fontSize: 17 }}>
        Hotest Deal Today
      </Text>
      <ScrollView style={{ flex: 1 }}>
        <Uncomming />
        {Data.map(d=><Product name={d.name} key={d.name} price={d.price} url={d.source} navigation={navigation} />)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E3EF",
  },
  product: {
    backgroundColor: "white",
    width: "94%",
    marginLeft: "3%",
    elevation: 2,
    marginBottom: 20,
  },
});
export default Home;
