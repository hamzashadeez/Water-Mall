import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.form}>
        <Ionicons name="search" size={20} color="#161515" style={{marginLeft: 13}}/>
        <TextInput placeholder='Search...' style={styles.searchInput} />
      </View>
      <MaterialCommunityIcons name="bell" size={25} color="#161515" />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  form: {
    backgroundColor: "white",
    width: "80%",
    height: 50,
    marginVertical: 10,
    marginHorizontal:15,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  header: {
    display: "flex",
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  searchInput:{
      marginHorizontal: 10,
      fontSize: 14,
  },
});
