import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface CircularProgressProps {
  onPress?: () => void;
  size?: number;
  strokeWidth?: number;
  progress: number; // valor de 0 a 100
  color?: string;
  backgroundColor?: string;
}

const CircularProgressBar = ({
  size = 100,
  strokeWidth = 10,
  progress,
  onPress,
  color = '#A4DE02',
  backgroundColor = '#e6e6e6',
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <TouchableOpacity onPress={onPress}>
    <View style={[{ width: size, height: size }, styles.container]}>
      <Svg width={size} height={size}>
        <Circle
          stroke={backgroundColor}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={color}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(150 ${size / 2} ${size / 2})`}
        />
      </Svg>
      <View style={styles.centeredText}>
        <Text style={styles.progressText}>{`${Math.round(progress)}%`}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        bottom:20,
        right:20,
        // backgroundColor:"red",
    },

  centeredText: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CircularProgressBar;
