import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Text } from 'react-native';
import Colors from '@/styles/colors';

type HeaderlessContainerProps = {
  children: ReactNode;
  style?: ViewStyle; // Opcional: permite passar estilos extras
  type?: string;
};

export default function HeaderlessContainer({ children, style, type }: HeaderlessContainerProps) {
  return <View style={type !== 'camera' ? [styles.container, style] : style}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: Colors.background5,
  },
});
