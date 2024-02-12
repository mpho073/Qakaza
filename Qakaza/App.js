import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import SignIn from './screens/SignIn';
import ForgotPassword from './screens/ForgotPassword';
import Signup from './screens/Signup';
import Home from './screens/Home';
import ProfileUser from './screens/ProfileUser';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Scanner from './screens/Scanner';
import AdminSignUp from './screens/AdminSignUp';
import AdminSignIn from './screens/AdminSignIn';
import AdminHome from './screens/AdminHome';
import UserLists from './screens/UserLists';
 


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
      
      <Stack.Screen name='AdminHome' component={AdminHome} options={{ headerShown: false }} />
        <Stack.Screen name='AdminSignUp' component={AdminSignUp} options={{headerShown:false}}/>
        <Stack.Screen name='AdminSignIn' component={AdminSignIn} options={{headerShown:false}}/>
        <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='ProfileUser' component={ProfileUser} options={{ headerShown: false }} />
        <Stack.Screen name='UserLists' component={UserLists} options={{ headerShown: false }} />
        <Stack.Screen name='Scanner' component={Scanner} options={{ headerShown: false }} />
      </Stack.Navigator>

    </NavigationContainer>
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
