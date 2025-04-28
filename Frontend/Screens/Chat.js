import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Chat() {
    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.openDrawer();
    };
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={{ flex: 1, width: '100%' }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -100}
            >
                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <View style={styles.header_container}>
                        <TouchableOpacity
                            onPress={openDrawer}
                            style={styles.send_button}
                        >
                            <Image source={require('../assets/options.png')} style={{ height: 30, width: 30 }} />
                        </TouchableOpacity>
                        <Text style={styles.heading}>ChatGPT</Text>
                        <Image source={require('../assets/user.png')} style={{ height: 35, width: 35 }} />
                    </View>
                    <View style={styles.chat_container}>
                        <Text style={styles.chat_heading}>Hi, User!</Text>
                    </View>

                    <View style={styles.input_field_container}>
                        <TextInput
                            placeholder='Search'
                            placeholderTextColor="#F8F8FF"
                            style={styles.input_field}
                        />
                        <TouchableOpacity
                            style={styles.send_button}
                        >
                            <Image source={require('../assets/send.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1b1c1e',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        width: '100%',
        height: '100%',
    },
    header_container: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    heading: {
        fontSize: 30,
        fontWeight: '900',
        color: '#fff',
    },
    chat_container: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    chat_heading: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '900',
        color: '#fff',
    },
    input_field_container: {
        flexDirection: 'row',
        height: 'auto',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    input_field: {
        borderWidth: 2,
        borderColor: '#3B444B',
        height: 50,
        width: '80%',
        borderRadius: 10,
        fontWeight: '500',
        padding: 10,
        color: '#fff',
    },
    send_button: {
        padding: 10,
    },
});

