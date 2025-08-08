import HeaderlessContainer from '@/components/HeaderlessContainer';
import { useEffect, useState } from 'react';
import DailyMission from '@/components/DailyMission';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Colors from '@/styles/colors';
import DashboardBox from '@/components/DashboardBox';
import CircularProgressBar from '@/components/CircularProgressBar';

export default function Dashboard() {
  const [userData, setUserData] = useState('Olá');
  const [userMissions, setUserMissions] = useState([
    { title: 'abdominal', quant: 50, escala: 'unitario' },
    { title: 'polichinelo', quant: 100, escala: 'unitario' },
    { title: 'corrida', quant: 5, escala: 'km' },
  ]);

  useEffect(() => {}, []);

  return (
    <HeaderlessContainer>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* <Text style={[styles.text, styles.title]}>BEM VINDO DE VOLTA!</Text> */}
        <DashboardBox>
          <Text style={[styles.text, styles.boxTitle]}>Para hoje</Text>
          <Text style={[styles.text, styles.streak]}>Streak: 3 Dias!</Text>
          <Text style={[styles.text, styles.miniTitle]}>Missões diárias</Text>
          {userMissions.map((mission, index) => (
            <DailyMission key={index} id={index} />
          ))}
          <Text style={[styles.text, styles.boxTitle]}>100 Polichinelos</Text>
          <Text style={[styles.text, styles.boxTitle]}>45 Agachamentos Livres</Text>
          <Text style={[styles.text, styles.boxTitle]}>Correr 5km</Text>
        </DashboardBox>
        <DashboardBox>
          <Text style={[styles.text, styles.boxTitle]}>Eventos</Text>
        </DashboardBox>
        <DashboardBox>
          <Text style={[styles.text, styles.boxTitle]}>Eventos</Text>
        </DashboardBox>
        <DashboardBox>
          <Text style={[styles.text, styles.boxTitle]}>Eventos</Text>
        </DashboardBox>
        <DashboardBox>
          <Text style={[styles.text, styles.boxTitle]}>Eventos</Text>
        </DashboardBox>
        <DashboardBox>
          <Text style={[styles.text, styles.boxTitle]}>Eventos</Text>
        </DashboardBox>
        <DashboardBox>
          <Text style={[styles.text, styles.boxTitle]}>Eventos</Text>
        </DashboardBox>
        <DashboardBox>
          <Text style={[styles.text, styles.boxTitle]}>Eventos</Text>
        </DashboardBox>
        <DashboardBox>
          <Text style={[styles.text, styles.boxTitle]}>{userData}</Text>
        </DashboardBox>
      </ScrollView>
      <CircularProgressBar
        onPress={() => {
          setUserData('alo');
        }}
        progress={60}
        currentLevel={45}
        size={120}
      />
    </HeaderlessContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: 'flex-start',
  },

  title: {
    color: Colors.brandColor2,
    fontSize: 24,
    marginBottom: 20,
  },

  streak: {},

  miniTitle: {},

  boxTitle: {
    color: 'black',
    fontSize: 20,
    marginBottom: 20,
  },

  text: {
    fontFamily: 'MontserratBold',
  },

  position: {
    position: 'fixed',
    bottom: 100,
    right: 0,
  },
});
