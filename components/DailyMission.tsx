import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import ProgressBar from './ProgressBar';
import data from '../data/dailyMissions';
import { Mission } from '@/types/mission';

interface DailyMissionProps {
  id: number;
  mission: Mission;
}

export default function DailyMission({ id, mission }: DailyMissionProps) {
  return (
    <View>
      <Text style={styles.title}>{mission.title}</Text>
      <ProgressBar
        missionId={mission.id}
        progress={0}
        goal={mission.goal}
        width={200}
        height={10}
        hasSound={true}
      />
      <Text>{mission.goal}</Text>
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
