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
  const [progress, setProgress] = React.useState(
    Math.floor((mission.userProgress / mission.goal) * 100),
  );

  function translateMetric(metric: string) {
    switch (metric) {
      case 'unit':
        return 'rep';
      case 'km':
        return 'km';
      case 'min':
        return 'min';
      default:
        return 'unidades';
    }
  }

  return (
    <View>
      <Text style={styles.title}>{mission.title}</Text>
      <View style={styles.container}>
        <ProgressBar
          missionId={id}
          progress={progress}
          goal={mission.goal}
          width={200}
          height={10}
          hasSound={true}
        />
        <Text style={styles.missionProgress}>{`${mission.userProgress} / ${
          mission.goal
        } ${translateMetric(mission.metric)}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    // backgroundColor: 'black',
  },

  title: {
    color: 'black',
    fontSize: 10,
    marginBottom: 5,
    fontFamily: 'MontserratBold',
  },

  missionProgress: {
    color: 'black',
    fontSize: 10,
    fontFamily: 'MontserratRegular',
  },
});
