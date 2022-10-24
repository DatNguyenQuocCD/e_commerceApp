import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TypeInput from "./src/components/atoms/Input/TypeInput";
import TextName from "./src/components/atoms/text/TextName";

export default function App() {
  return (
    <View style={styles.body}>
      <TextName text={"Chúng Em Yêu Cô Nhài"} />
      <TypeInput placeholder={"Name"} />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    marginLeft: 24,
    marginRight: 24,
  },
});