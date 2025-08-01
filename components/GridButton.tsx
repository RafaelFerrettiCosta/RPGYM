import { View, Text, Image, StyleSheet } from "react-native";

interface GridButtonProps {
    buttonTitle: string;
    buttonImg: any;
}

const GridButton = ({buttonTitle, buttonImg}: GridButtonProps) =>{
    return(
        <View style={styles.container}>
            <Image source={buttonImg} style={{width: 80, height: 80}} />
            <Text style={styles.title}>{buttonTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        maxHeight: 80,
        flex: 1,
        gap: 10,
        padding: 30,
        backgroundColor: '#fa987bff',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default GridButton