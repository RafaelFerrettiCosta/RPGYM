export const unstable_settings = {
  initialRouteName: 'index',
};

import { Stack } from 'expo-router';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import Colors from '../styles/colors';
import { useFonts } from 'expo-font';
import { AppProvider } from '@/contexts/AppContext';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    MontserratRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
    MontserratSemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
    MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
    MontserratThin: require('../assets/fonts/Montserrat-Thin.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.brandColor1} />
        <Text style={{ marginTop: 8 }}>
          {!fontsLoaded ? 'Carregando fontes...' : 'Fontes carregadas com sucesso!'}
        </Text>
      </View>
    );
  }

  (Text as any).defaultProps = (Text as any).defaultProps || {};
  (Text as any).defaultProps.style = { fontFamily: 'MontserratRegular' };

  return (
    <AppProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.brandColor1,
          },
          headerTintColor: '#fff',
          animation: 'fade',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Dev Menu' }} />
        <Stack.Screen name="userDetails" options={{ title: 'Detalhes do Usuário' }} />
        <Stack.Screen name="dashboard" options={{ title: 'Dashboard', headerShown: false }} />
        <Stack.Screen
          name="setTraining"
          options={{ title: 'setTraining', headerShown: false, animation: 'none' }}
        />
        <Stack.Screen
          name="cameraUsage"
          options={{ title: 'Registro de Facial', headerShown: false }}
        />
      </Stack>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  montserrat: {
    fontSize: 20,
    fontFamily: 'Montserrat',
  },
});
