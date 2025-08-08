import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View, StyleSheet, Animated, Easing, ViewStyle } from 'react-native';
import { useAudioPlayer } from 'expo-audio';
import audioTick from '../assets/sounds/tick.mp3';
import Colors from '@/styles/colors';
type WidthProp = number | `${number}%` | '100%';

interface ProgressBarProps {
  progress: number; // 0–100
  missionId?: number; // ms de atraso
  width?: WidthProp; // ex: 240, '100%'
  height?: number; // altura da barra
  color?: string; // cor do preenchimento
  backgroundColor?: string; // cor da trilha
  duration?: number; // ms da animação
  rounded?: boolean; // bordas arredondadas
  reverse?: boolean; // enche da direita p/ esquerda
  trackStyle?: ViewStyle; // estilos extras na trilha
  fillStyle?: ViewStyle; // estilos extras no preenchimento
}

export default function ProgressBar({
  progress,
  missionId = 0,
  width = '100%',
  height = 10,
  color = Colors.brandColor1,
  backgroundColor = '#E6E6E6',
  duration = 800,
  rounded = true,
  reverse = false,
  trackStyle,
  fillStyle,
}: ProgressBarProps) {
  const [containerW, setContainerW] = useState<number>(typeof width === 'number' ? width : 0);
  const audioPlayer = useAudioPlayer(audioTick);
  const anim = useRef(new Animated.Value(0)).current;

  // garante 0–100
  const clamped = useMemo(() => Math.max(0, Math.min(100, progress)), [progress]);

  useEffect(() => {
    // audioPlayer.play();
    // audioPlayer.seekTo(0);
    setTimeout(() => {
      Animated.timing(anim, {
        toValue: clamped,
        duration,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false, // largura não suporta native driver
      }).start();
    }, missionId * 300);
  }, [clamped, duration, anim]);

  // converte % → pixels
  const animatedWidth = anim.interpolate({
    inputRange: [0, 100],
    outputRange: [0, containerW || 0],
  });

  return (
    <View
      style={[
        styles.track,
        { width, height, backgroundColor, borderRadius: rounded ? height / 2 : 0 },
        trackStyle,
      ]}
      onLayout={(e) => {
        if (typeof width !== 'number') {
          setContainerW(e.nativeEvent.layout.width);
        }
      }}
    >
      <Animated.View
        style={[
          styles.fill,
          {
            height,
            backgroundColor: color,
            borderRadius: rounded ? height / 2 : 0,
            width: animatedWidth,
            position: 'absolute',
            top: 0,
            // ancora na esquerda (padrão) ou na direita (reverse)
            left: reverse ? undefined : 0,
            right: reverse ? 0 : undefined,
          },
          fillStyle,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    overflow: 'hidden',
    position: 'relative',
  },
  fill: {
    // nada aqui além do que já setamos dinamicamente
  },
});
