import React from 'react';
import { Text,View,Image,Pressable,TouchableOpacity,useWindowDimensions  } from 'react-native';
import stylesheet from '../stylesheet/ConnectScreenStyleSheet';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colorValues from '../AppColor';
import {TabView, SceneMap } from 'react-native-tab-view'


import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ConnectCall from './ConnectCall';
import ConnectChat from './ConnectChats';
import appColor from '../AppColor';
import ConnectHub from './ConnectHub';


const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();



const ConnectScreenHeader = () =>{

    return(
        <View style={stylesheet.screenHeader}>
            <Image source={require('../assert/logo/workfreeli_logo_transparent_short.png')} 
            style={stylesheet.headerImageStyle}/>
            <View style={stylesheet.headerRighIconViewStyle}>
                <Pressable style={{marginLeft:5,marginRight:5}}>
                    <FontAwesome5 name="bars" size={25} color={colorValues.white}/>
                </Pressable>

                <Pressable style={{marginLeft:5,marginRight:10}}>
                    <Feather name="search" size={25} color={colorValues.white}/>
                </Pressable>
                
                <Pressable style={{marginLeft:5,marginRight:10}}>
                    <Ionicons name="notifications-sharp" size={25} color={colorValues.white}/>
                </Pressable>

            </View>

        </View>
    );

}

function ConnectScreenTab(navigation){
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: appColor.white,
          tabBarInactiveTintColor: appColor.white,
          tabBarStyle: {
            backgroundColor:appColor.app_theme_color_main_dark
          },
          // tabBarItemStyle:{
          //   backgroundColor: appColor.app_theme_color_main_dark,
          // },
          // tabBarActiveItemStyle:{
          //   backgroundColor: appColor.app_color_main_blue_light,
          // },
          // tabBarActiveBackgroundColor: appColor.app_color_main_blue_light,
          //tabBarIndicator:appColor.app_color_main_blue_light,
          tabBarLabelStyle: {
            textAlign: 'center',
            fontSize: 12,
            textTransform:'capitalize' 
          },
          indicatorStyle:{backgroundColor:appColor.app_color_main_blue_light},
          //tabBarIndicator: () => null,
          tabBarIndicatorStyle: {
            //borderRadius:50,
            borderBottomColor: appColor.app_color_main_blue_light,
            borderBottomWidth: 4,
          },
        }}>
        <Tab.Screen
            name="FirstPage"
            component={ConnectChat}
            //initialParams={{navigation}}
            options={{
                tabBarLabel: 'Chat',
            }}/>
        <Tab.Screen
            name="SecondPage"
            component={ConnectCall}
            //initialParams={{navigation}}
            options={{
                tabBarLabel: 'Call',
            }}/>

        <Tab.Screen
            name="ThirdPage"
            component={ConnectHub}
            //initialParams={{navigation}}
            options={{
                tabBarLabel: 'Hub',
            }}/>
      </Tab.Navigator>
    );
  }


const ConnectScreen = ({navigation }) =>{

    return (
      <>
        <View style={{flexDirection: 'column', flex: 1}}>
          <ConnectScreenHeader />

          <View style={{flex: 1}}>
            <NavigationContainer independent={true} style={{flex: 1}}>
              <Stack.Navigator
                screenOptions={{
                  headerStyle: {backgroundColor: '#633689'},
                  headerTintColor: 'white',
                  headerTitleStyle: {fontWeight: 'bold'},
                }}>
                <Stack.Screen
                  name="home"
                  component={ConnectScreenTab}
                  options={{
                    title: '',
                    headerShown: false,
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </View>


        </View>
      </>
    );

}


export default ConnectScreen;