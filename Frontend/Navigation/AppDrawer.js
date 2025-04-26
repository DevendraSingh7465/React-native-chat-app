import { Text, View, Image } from 'react-native';

// Drawer Navigation Screens
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

// Screens
import AppStack from './AppStack';
import Whisper from '../Screens/Whisper';
import ImageGeneration from '../Screens/ImageGeneration';
import Settings from '../Screens/Settings';

// Drawer Navigator
export default function AppDrawer() {
    return (
        <Drawer.Navigator initialRouteName="AppStack">
            <Drawer.Screen name="AppStack" component={AppStack} options={{
                headerShown: false,
                drawerLabel: () => (
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/chat.png')}
                            style={{ height: 35, width: 35, marginRight: 10, }}
                        />
                        <Text style={{ fontSize: 15 }} >Chat</Text>
                    </View>
                ),
            }}
            />

            <Drawer.Screen
                name="Image Generation"
                component={ImageGeneration}
                options={{
                    headerShown: false,
                    drawerLabel: () => (
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../assets/picture.png')}
                                style={{ height: 35, width: 35, marginRight: 10, }}
                            />
                            <Text style={{ fontSize: 15 }} >Generate Image</Text>
                        </View>
                    ),
                }}
            />

            <Drawer.Screen
                name="Whisper"
                component={Whisper}
                options={{
                    headerShown: false,
                    drawerLabel: () => (
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../assets/mic.png')}
                                style={{ height: 35, width: 35, marginRight: 10, }}
                            />
                            <Text style={{ fontSize: 15 }} >Whisper</Text>
                        </View>
                    ),
                }}
            />

            <Drawer.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerShown: false,
                    drawerLabel: () => (
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../assets/settings.png')}
                                style={{ height: 35, width: 35, marginRight: 10, }}
                            />
                            <Text style={{ fontSize: 15 }} >Settings</Text>
                        </View>
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}