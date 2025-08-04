import React, { ReactNode } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import Colors from "@/styles/colors";

type HeaderlessContainerProps = {
  children: ReactNode;
  style?: ViewStyle; // Opcional: permite passar estilos extras
};

export default function HeaderlessContainer({ children, style }: HeaderlessContainerProps) {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: Colors.background3,
  },
});