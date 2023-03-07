// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home';
import Signup from './screen/Signup';
import Login from './screen/login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Connect_chat from './screen/Connect_chat';
import Connect_call from './screen/Connect_call';
import Connect_hub from './screen/Connect_hub';
import ChattingScreen from './screen/ChattingScreen';

import Signup_varifiycode from './screen/Signup_varifiycode';
import Signup_userform from './screen/Signup_userform';
import Signup_about_company from './screen/Signup_about_company';
import Signup_create_password from './screen/Signup_create_password';
import Signup_invite_admin from './screen/Signup_invite_admin';
import Signup_varifiycode_submission from './screen/Signup_varifiycode_submission';


const Stack = createNativeStackNavigator();

function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
        
        <Stack.Screen name="connect_chat" component={Connect_chat} options={{ headerShown: false }} />
        <Stack.Screen name="connect_call" component={Connect_call} options={{ headerShown: false }} />
        <Stack.Screen name="connect_hub" component={Connect_hub} options={{ headerShown: false }} />
        
                
        <Stack.Screen name="signup_varifiy_code" component={Signup_varifiycode} options={{ headerShown: false }} />
        <Stack.Screen name="signupuser_form" component={Signup_userform} options={{ headerShown: false }} />
        <Stack.Screen name="signup_aboutcompany" component={Signup_about_company} options={{ headerShown: false }} />
        <Stack.Screen name="signup_createpassword" component={Signup_create_password} options={{ headerShown: false }} />
        <Stack.Screen name="Signup_inviteadmin" component={Signup_invite_admin} options={{ headerShown: false }} />
        <Stack.Screen name="signup_varifi_submit" component={Signup_varifiycode_submission} options={{ headerShown: false }} />
      
      

        <Stack.Screen name="chatScreen" component={ChattingScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;