import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TextName = (props) => {
    return (
        <View>
            <Text style={styles.Title}>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Title: {
        fontFamily: "Overpass",
        fontSize: 20,
        fontWeight: "500",
        color: "#090F47",
    },
});

export default TextName;