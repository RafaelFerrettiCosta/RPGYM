import Colors from '@/styles/colors';
import React, { use, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Animated, Image } from 'react-native';
import Svg, { Defs, Filter, FeDropShadow, Circle } from 'react-native-svg';
import imgUser from '../assets/images/user.jpeg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface CircularProgressProps {
  onPress?: () => void;
  size?: number;
  strokeWidth?: number;
  progress: number; // valor de 0 a 100
  currentLevel: number;
  color?: string;
  backgroundColor?: string;
}

const CircularProgressBar = ({
  size = 100,
  strokeWidth = 12,
  progress,
  onPress,
  currentLevel,
  color = Colors.brandColor1,
  backgroundColor = '#e6e6e6',
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const shadowPad = 12;
  const circumference = 2 * Math.PI * radius;
  const animatedProgress = useRef(new Animated.Value(0)).current;
  const animatedLevel = useRef(new Animated.Value(0)).current;
  const [displayedLevel, setDisplayedLevel] = useState(0);

  useEffect(() => {
    const id = animatedLevel.addListener(({ value }) => {
      setDisplayedLevel(Math.floor(value));
    });

    Animated.parallel([
      Animated.timing(animatedProgress, {
        toValue: progress,
        duration: 1200,
        useNativeDriver: false,
      }),
      Animated.timing(animatedLevel, {
        toValue: currentLevel,
        duration: 1200,
        useNativeDriver: false,
      }),
    ]).start();
    return () => animatedLevel.removeListener(id);
  }, [progress, currentLevel]);

  const strokeDashoffset = animatedProgress.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
  });

  return (
    <TouchableOpacity activeOpacity={0.87} onPress={onPress}>
      <View style={[{ width: size, height: size }, styles.container]}>
        <View style={styles.userImage}>
          <Image
            source={imgUser}
            style={{ width: '100%', height: '100%', flex: 1 }}
            resizeMode="cover"
          />
        </View>
        <Svg
          width={size}
          height={size}
          viewBox={`
    -${shadowPad} 
    -${shadowPad} 
    ${size + shadowPad * 2} 
    ${size + shadowPad * 2}
  `}
          style={[{ borderRadius: 1000 }]}
        >
          <Defs>
            <Filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
              <FeDropShadow
                dx={2} // desloca 2px à direita
                dy={2} // desloca 2px pra baixo
                stdDeviation={3} // desfoque
                floodColor="black"
                floodOpacity={0.4}
              />
            </Filter>
          </Defs>
          <Circle
            stroke={backgroundColor}
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            filter="url(#dropShadow)"
          />
          <AnimatedCircle
            stroke={color}
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset as any}
            strokeLinecap="round"
            transform={`
                translate(${size} 0)
                scale(-1 1)
                rotate(20 ${size / 2} ${size / 2})
                `}
          />
          <Circle
            stroke={Colors.brandColor2}
            fill={Colors.brandColor2}
            cx={14}
            cy={90}
            r={20}
            strokeWidth={4}
            filter="url(#dropShadow)"
          />
        </Svg>

        <View style={styles.levelContainer}>
          <Text style={styles.levelText}>
            <Text style={styles.span}>Lv.</Text>
            {displayedLevel}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    borderRadius: 1000,
    justifyContent: 'center',
    bottom: 20,
    right: 10,
  },

  levelContainer: {
    position: 'absolute',
    top: 24,
    left: -38,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  span: {
    fontFamily: 'MontserratThin',
    color: Colors.white,
    fontSize: 10,
    // fontWeight: 'bold',
    // letterSpacing:-1,
  },

  userImage: {
    position: 'absolute',
    top: 17,
    left: 17,
    width: 86,
    height: 86,
    borderRadius: 50,
    zIndex: 0,
    overflow: 'hidden',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  levelText: {
    fontFamily: 'MontserratBold',
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
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
