import HeaderlessContainer from '@/components/HeaderlessContainer';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useContext, useEffect, useRef, useState } from 'react';
import { Easing } from 'react-native';
import Colors from '@/styles/colors';

const screenHeight = Dimensions.get('window').height;

export default function cameraUsage() {
  const [facing, setFacing] = useState<CameraType>('front');
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [cameraReady, setCameraReady] = useState(false);
  const cameraRef = useRef<CameraView>(null);
  const animatedWidth = useRef(new Animated.Value(10)).current;
  const animatedHeight = useRef(new Animated.Value(10)).current;
  const animatedBorderRadius = useRef(new Animated.Value(50)).current;
  const translateY = useRef(new Animated.Value(200)).current;

  useEffect(() => {
    const heightTarget = Math.floor(screenHeight * 0.7);
    Animated.sequence([
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0, // ajuste conforme o layout
          duration: 300,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
        Animated.timing(animatedWidth, {
          toValue: 380,
          duration: 300,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
        Animated.timing(animatedHeight, {
          toValue: heightTarget + 30,
          duration: 300,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
      ]),
      Animated.parallel([
        Animated.timing(animatedWidth, {
          toValue: 350,
          duration: 100,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
        Animated.timing(animatedHeight, {
          toValue: heightTarget,
          duration: 100,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
      ]),
    ]).start();
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
            width: animatedWidth,
            height: animatedHeight,
            borderRadius: animatedBorderRadius,
          },
          { transform: [{ translateY }] },
        ]}
      >
        <CameraView
          ref={cameraRef}
          style={{ flex: 1, borderRadius: 50 }}
          facing={facing}
          autofocus="on"
          onCameraReady={() => setCameraReady(true)}
        ></CameraView>
      </Animated.View>
      <View style={styles.buttonContainer}>
        <Button title="Mudar Camera" onPress={toggleCameraFacing}></Button>
        <Button title="Tirar Foto🔥" onPress={takePicture}></Button>
      </View>
    </HeaderlessContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 0,
    backgroundColor: Colors.brandColor1,
  },

  message: {},

  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',

    //   flexDirection: 'row',
  },

  camera: {
    // flex: 1,
    marginTop: 40,
    borderRadius: 50,
    width: 350,
    // height: '90%',
  },
});
