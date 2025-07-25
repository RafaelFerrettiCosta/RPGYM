import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack 
    screenOptions={{
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}>

    <Stack.Screen name="index" options={{ title: "Dev Menu" }} />
    <Stack.Screen name="userDetails" options={{ title: "Detalhes do Usuário" }} />

  </Stack>

}
