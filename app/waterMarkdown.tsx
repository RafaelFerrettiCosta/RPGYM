import { View, Text, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import HeaderlessContainer from '@/components/HeaderlessContainer';
import Colors from '@/styles/colors';

export default function WaterMarkdown() {
  return (
    <HeaderlessContainer style={{ backgroundColor: Colors.brandColor3 }}>
      <Animated.View
        style={[styles.container, { width: '100%', height: '100%' }]}
        sharedTransitionTag="tag"
      >
        <Text>WaterMarkdown</Text>
      </Animated.View>
    </HeaderlessContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.brandColor3,
    width: '100%',
    justifyContent: 'center',
  },
});
