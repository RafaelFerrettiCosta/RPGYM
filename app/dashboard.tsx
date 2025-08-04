import HeaderlessContainer from '@/components/HeaderlessContainer';
import { useEffect, useState } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Colors from '@/styles/colors';
import DashboardBox from '@/components/DashboardBox';
import CircularProgressBar from '@/components/CircularProgressBar';



export default function Dashboard() {
    const [userData, setUserData] = useState("Olá")


    useEffect(()=>{
       
    },[])


    return (
        <HeaderlessContainer>
            <ScrollView contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            <Text style={[styles.text, styles.title]}>BEM VINDO DE VOLTA!</Text>
            <DashboardBox>
                <Text style={[styles.text, styles.boxTitle]}>{userData}</Text>
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
                <Text style={[styles.text, styles.boxTitle]}>Eventos</Text>
            </DashboardBox>
            </ScrollView>
            <CircularProgressBar onPress={() => {setUserData("alo")}} progress={10} size={120}/>
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

    title:{
        color:Colors.brandColor2,
        fontSize:24,
        marginBottom:20
    },

    boxTitle:{
        color:"black",
        fontSize:20,
        marginBottom:20
    },

    text:{
        fontFamily: 'MontserratBold',
    },

    position:{
        position:"fixed",
        bottom:100,
        right:0
    }
});