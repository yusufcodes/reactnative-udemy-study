import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} />
        <Button title="ADD" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderWidth: 1,
    width: "80%",
  },
});
