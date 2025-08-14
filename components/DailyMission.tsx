import { Text, View, StyleSheet, Animated, Easing } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
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
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [displayedLevel, setDisplayedLevel] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const id = animatedValue.addListener(({ value }) => {
        setDisplayedLevel(Math.floor(value));
      });

      Animated.timing(animatedValue, {
        toValue: mission.userProgress,
        duration: progress * 6 + 200,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }).start();
    }, id * 500);
  }, []);

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
        <Text style={styles.missionProgress}>{`${displayedLevel} / ${
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
