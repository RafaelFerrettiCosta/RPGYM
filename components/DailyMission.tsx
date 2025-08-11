import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import ProgressBar from './ProgressBar';

interface DailyMissionProps {
  id: number;
}

export default function DailyMission({ id }: DailyMissionProps) {
  return (
    <View>
      <Text style={styles.title}>DailyMission</Text>
      <ProgressBar
        missionId={id}
        progress={Math.floor(Math.random() * 100)}
        width={200}
        height={10}
        hasSound={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 10,
    marginBottom: 20,
    fontFamily: 'MontserratBold',
  },
});
