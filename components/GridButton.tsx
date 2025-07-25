import { View, Text, Image, StyleSheet } from "react-native";

interface GridButtonProps {
    buttonTitle: string;
    buttonImg: any;
}

const GridButton = ({buttonTitle, buttonImg}: GridButtonProps) =>{
    return(
        <View style={styles.container}>
            <Image source={buttonImg} style={{width: 50, height: 50}} />
            <Text>{buttonTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        gap: 10,
        padding: 30,
        backgroundColor: '#effc7dff',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
});

export default GridButton