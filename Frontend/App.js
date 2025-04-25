import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Main from './Screens/Main';
import Chat from './Screens/Chat';
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Main} name='Main' options={{headerShown:false}} /> 
        <Stack.Screen component={Chat} name='Chat' options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
