import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Login from "./src/screen/login/Login";

export default function App() {
  return (
    <View style={styles.body}>
      {/* <TextName text={"Chúng Em Yêu Cô Nhài"} />
      <Input label={"Name"} placeholder={"User name"} nameIcon={"user"} colorIcon={"black"} />
      <BigButton /> */}
      <Login/>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    marginLeft: 24,
    marginRight: 24,
  },
});