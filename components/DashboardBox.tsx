import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '@/styles/colors';
import { ReactNode } from 'react';

interface DashboardBoxProps {
  children: ReactNode;
  // buttonImg: any;
}

const DashboardBox = ({ children }: DashboardBoxProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    gap: 10,
    padding: 10,
    paddingBottom: 20,
    marginBottom: 20,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 3,
    borderRadius: 8,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default DashboardBox;
