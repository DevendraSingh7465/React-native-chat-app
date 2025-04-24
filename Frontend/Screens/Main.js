import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
export default function Main({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 2, alignItems: 'center' }}>
                    <Text style={styles.heading}>ChatGPT</Text>
                </View>
                <View style={{ flex: 4 }}>
                    <Image source={require('../assets/bot2.jpeg')} style={styles.image} />
                </View>
                <View style={styles.buttondiv}>
                    <TouchableOpacity
                        style={styles.letsbeginbtn}
                        onPress={() => navigation.navigate('Chat')}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>Let's Begin!</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    heading: {
        paddingTop: 30,
        fontSize: 30,
        fontWeight: '900',
        color: '#585858',
    },
    letsbeginbtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#6ce2dc",
        width: 200,
        height: 50,
        borderRadius: 15,
    },
    image: {
        height: 400,
        width: 290,
    },
    buttondiv: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
