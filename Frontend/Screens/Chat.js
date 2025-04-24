import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button, Image } from 'react-native';

export default function Chat() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Chat Screen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
