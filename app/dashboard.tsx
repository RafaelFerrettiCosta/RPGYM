import HeaderlessContainer from '@/components/HeaderlessContainer';
import { useEffect, useState } from 'react';
import DailyMission from '@/components/DailyMission';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Colors from '@/styles/colors';
import iconStreak from '@/assets/icons/streak.png';
import iconWater from '@/assets/icons/water.png';
import DashboardBox from '@/components/DashboardBox';
import CircularProgressBar from '@/components/CircularProgressBar';
import ProgressBar from '@/components/ProgressBar';

export default function Dashboard() {
  const cleanDate = getDate();
  const streakDays = 20;
  const [userData, setUserData] = useState('Olá');
  const [userMissions, setUserMissions] = useState([
    { title: 'abdominal', quant: 50, escala: 'unitario' },
    { title: 'polichinelo', quant: 100, escala: 'unitario' },
    { title: 'corrida', quant: 5, escala: 'km' },
  ]);

  useEffect(() => {}, []);

  function getDate() {
    const date = new Date();
    return date.toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'long',
    });
  }

  return (
    <HeaderlessContainer>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* <Text style={[styles.text, styles.title]}>BEM VINDO DE VOLTA!</Text> */}
        <DashboardBox>
          <Text style={[styles.text, styles.boxTitle]}>{cleanDate.toString()}</Text>
          <View style={styles.streakContainer}>
            <Image source={iconStreak} style={{ width: 30, height: 30 }} />
            <Text style={[styles.text, styles.streak]}> {streakDays} Dias</Text>
          </View>
          <View style={styles.waterContainer}>
            <View style={styles.waterHolder}>
              <Image source={iconWater} style={{ width: 30, height: 30 }} />
              <ProgressBar
                progress={90}
                width={170}
                progressColor={Colors.brandColor3D1}
                height={10}
              />
            </View>
            <TouchableOpacity>
              <Text>Adicionar</Text>
            </TouchableOpacity>
          </View>
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

  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  waterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  waterHolder: {
    flexDirection: 'row',
    alignItems: 'center',
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
    textTransform: 'uppercase',
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
