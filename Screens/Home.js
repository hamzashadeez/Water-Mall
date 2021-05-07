import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import styled from "styled-components";
import HomeHeader from "../Components/HomeHeader";
import Uncomming from "../Components/Uncomming";

const Product = ({ url, name, price }) => {
  return (
    <View style={styles.product}>
      <Image
        source={url}
        style={{ height: 200, width: "100%" }}
      />
      <View style={{padding: 10}}>
        <Text style={{fontSize: 17, fontWeight: "800"}}>{name}</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'seagreen'}}>{price}</Text>
      </View>
    </View>
  );
};

const Home = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <Text style={{ marginLeft: 15, fontWeight: "bold", fontSize: 17 }}>
        Hotest Deal Today
      </Text>
      <ScrollView style={{ flex: 1 }}>
        <Uncomming />
        <Product
          name="Snickers"
          price="$300.66"
          url={require("../assets/1.jpg")}
        />
        <Product
          name="Apple Airpod"
          price="$200.66"
          url={require("../assets/apple.jpg")}
        />
        <Product
          name="Snickers"
          price="$300.66"
          url={require("../assets/2.jpg")}
        />
        <Product
          name="Snickers"
          price="$300.66"
          url={require("../assets/3.jpg")}
        />
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
