import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Main from './Screens/Main';
import Chat from './Screens/Chat';

import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

// Stack Navigator for the main app flow (including Chat)
function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Main} name='Main' options={{ headerShown: false }} />
      <Stack.Screen component={Chat} name='Chat' options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

// Drawer Navigator
function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName="AppStack">
      <Drawer.Screen name="AppStack" component={AppStack} options={{ headerShown: false, drawerLabel: 'Chat & Main' }} />
      {/* You can add more drawer items here for other screens */}
      <Drawer.Screen name="Settings" component={() => <View><Text>Settings Screen</Text></View>} />
      {/* Add more screens to your drawer */}
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}

// export default function App1() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen component={Main} name='Main' options={{ headerShown: false }} />
//         <Stack.Screen component={Chat} name='Chat' options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
