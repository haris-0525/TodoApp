import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { StackHeaderProps } from "@react-navigation/stack";
import { colors } from "../constants/colors";
import TodoImage from "../assets/images/todo.svg";
import SettingsImage from "../assets/images/settings.svg";

export default function HeaderHome(props: StackHeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <TodoImage />
      <SettingsImage onPress={() => console.log("settings")} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: colors.white,
  },
});
