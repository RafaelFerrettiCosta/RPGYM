import {View, Text, StyleSheet} from 'react-native';

export default function UserDetails() {
    return (
        <View style={styles.container}>
            <Text>User Details</Text>
            
        </View>
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
});