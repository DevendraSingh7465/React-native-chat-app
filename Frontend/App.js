// Stack Navigation Module
import { NavigationContainer } from '@react-navigation/native';


// Drawer Navigation Module
import AppDrawer from './Navigation/AppDrawer';

export default function App() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}
