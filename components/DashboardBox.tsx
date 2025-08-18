import { View, Text, Image, StyleSheet, ViewStyle } from 'react-native';
import Colors from '@/styles/colors';
import { ReactNode } from 'react';

interface DashboardBoxProps {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
  // buttonImg: any;
}

const DashboardBox = ({ children, style }: DashboardBoxProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '96%',
    marginLeft: '2%',
    height: 'auto',
    gap: 10,
    padding: 10,
    paddingBottom: 20,
    marginBottom: 20,
    backgroundColor: Colors.white,
    boxShadow: '0px 5px 6px rgba(0, 0, 0, 0.40)',
    borderRadius: 8,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default DashboardBox;
