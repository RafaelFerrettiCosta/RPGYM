import HeaderlessContainer from '@/components/HeaderlessContainer';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useContext, useEffect, useRef, useState } from 'react';
import { Easing } from 'react-native';
import Colors from '@/styles/colors';
import IconCamera from '../assets/icons/camera2white.png';
import IconFlipCameraAndroid from '../assets/icons/flipCameraAndroid.png';
import IconFlipCameraApple from '../assets/icons/flipCameraIOS.png';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function cameraUsage() {
  const [facing, setFacing] = useState<CameraType>('front');
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [cameraReady, setCameraReady] = useState(false);
  const cameraRef = useRef<CameraView>(null);
  // const animatedWidth = useRef(new Animated.Value(10)).current;
  const animatedHeight = useRef(new Animated.Value(10)).current;
  const animatedBorderBottomRadius = useRef(new Animated.Value(0)).current;
  const animatedBorderTopRadius = useRef(new Animated.Value(50)).current;
  const animatedButtons = useRef(new Animated.Value(-80)).current;
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  // const translateY = useRef(new Animated.Value(200)).current;

  useEffect(() => {
    const heightTarget = Math.floor(screenHeight * 0.92);
    const widthTarget = Math.floor(screenWidth * 1);
    setTimeout(() => {
      Animated.sequence([
        Animated.parallel([
          // Animated.timing(translateY, {
          //   toValue: 0, // ajuste conforme o layout
          //   duration: 300,
          //   easing: Easing.inOut(Easing.ease),
          //   useNativeDriver: false,
          // }),
          // Animated.timing(animatedWidth, {
          //   toValue: widthTarget + 30,
          //   duration: 300,
          //   easing: Easing.inOut(Easing.ease),
          //   useNativeDriver: false,
          // }),
          Animated.timing(animatedButtons, {
            toValue: 10,
            duration: 250,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
          }),
          Animated.timing(animatedHeight, {
            toValue: heightTarget + 10,
            duration: 350,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
          }),
          Animated.timing(animatedBorderBottomRadius, {
            toValue: 100,
            duration: 250,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
          }),
          Animated.timing(animatedBorderTopRadius, {
            toValue: 0,
            duration: 250,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
          }),
        ]),
        Animated.parallel([
          // Animated.timing(animatedWidth, {
          //   toValue: widthTarget,
          //   duration: 100,
          //   easing: Easing.inOut(Easing.ease),
          //   useNativeDriver: false,
          // }),
          Animated.timing(animatedHeight, {
            toValue: heightTarget,
            duration: 50,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
          }),
          Animated.timing(animatedBorderBottomRadius, {
            toValue: 50,
            duration: 250,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
          }),
        ]),
      ]).start();
    }, 200);
  }, []);

  if (!cameraPermission) {
    // console.log('camera ainda não carregou');
    return <View />;
  }

  if (!cameraPermission.granted) {
    console.log('sem permissao, por enquanto');
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestCameraPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(facing === 'front' ? 'back' : 'front');
  }

  function takePicture() {
    if (cameraRef.current && cameraReady) {
      cameraRef.current
        .takePictureAsync({ quality: 1, base64: true, shutterSound: false })
        .then((data) => {
          console.log(data);
        });
    }
  }

  return (
    <HeaderlessContainer style={styles.container} type="camera">
      <Animated.View
        style={[
          styles.camera,
          {
            // width: animatedWidth,
            height: animatedHeight,
            borderBottomLeftRadius: animatedBorderBottomRadius,
            borderBottomRightRadius: animatedBorderBottomRadius,
          },
          // { transform: [{ translateY }] },
        ]}
      >
        <CameraView
          ref={cameraRef}
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
          facing={facing}
          autofocus="on"
          onCameraReady={() => setCameraReady(true)}
        ></CameraView>
      </Animated.View>
      <AnimatedTouchable
        style={[styles.cameraButton, { bottom: animatedButtons }]}
        onPress={takePicture}
      >
        <Image source={IconCamera} style={{ width: 48, height: 48 }} />
      </AnimatedTouchable>
      {Platform.OS !== 'ios' && (
        <AnimatedTouchable
          style={[styles.flipButton, { bottom: animatedButtons }]}
          onPress={toggleCameraFacing}
        >
          <Image source={IconFlipCameraAndroid} style={{ width: 32, height: 32 }} />
        </AnimatedTouchable>
      )}
      {Platform.OS === 'ios' && (
        <TouchableOpacity
          style={[styles.flipButton, { position: 'absolute', bottom: animatedButtons }]}
          onPress={toggleCameraFacing}
        >
          <Image source={IconFlipCameraApple} style={{ width: 32, height: 32 }} />
        </TouchableOpacity>
      )}
    </HeaderlessContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 0,
    backgroundColor: Colors.white,
  },

  message: {},

  camera: {
    // flex: 1,
    // marginTop: 40,
    // borderTopRightRadius: 0,
    // borderTopLeftRadius: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    width: '100%',
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.40)',
    // height: '90%',
  },

  cameraButton: {
    position: 'absolute',
    // bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 80,
    borderRadius: 50,
    backgroundColor: Colors.brandColor1,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },

  flipButton: {
    position: 'absolute',
    // bottom: 22,
    right: 40,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: Colors.white,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
});
