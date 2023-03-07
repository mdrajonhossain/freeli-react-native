import React from 'react';
import {
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useState } from 'react';
import styles from '../stylesheet/LoginStyleSheet';
import appStr from '../AppDefaultStr';
import appColor from '../AppColor';
import Entypo from 'react-native-vector-icons/Entypo'


import axios from 'axios';




const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");


  const hasError = () => {
    return !Email.includes('@');
  };


  const requiestLogin = () => {

 

    var jsondata = {
        "email": "smjubayercse@gmail.com",
        "password": "abc123",
        "gcm_id": "frRn9moKRdk:APA91bFgn_qg-Qm2Xc3HA7LHqCVU-TjTjIiUTu7YyltHwV_pZCrDvKjfWftZin7zirhNL2xaYP0VACOkjfBTWQiWuUzTQ0hFetN0v0AnB5Wyrhhvjjc2yvOnvatcpwxIqI-STDaYuBCP",
        "device_id": "e366824a8a86ee83",
        "device_type": "android",
        "lat": "",
        "lang": "",
        "city": "Lakshmipur",
        "ipAddress": "103.138.27.165",
        "countryName": "Bangladesh",
        "continentCode": "AS",
        "continentName": "Asia",
        "countryCode": "BD",
        "stateProv": "Chittagong",
        "time": "Mar 6, 2023 at 5:56 PM"
      }
    
 

      axios.post('https://cadevapicdn02.freeli.io/users/login_new', jsondata)
        .then(function (response) {
          if (response.data.message === "success") {
            console.log(response.data.message);
            navigation.navigate("connect_chat", {res : response})
          }

        })
        .catch(function (error) {
          console.log(111, error);
        });

   

  }






  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        {/* logo image */}
        <View style={{ justifyContent: 'center', width: '100%', height: 100, padding: 20 }}>
          <Image
            style={{ width: '100%', height: '100%' }}
            source={require('../assert/logo/workfreeli_final_logo_transparent.png')}
          />
        </View>

        {/* login screen welcome text */}
        <View style={{ justifyContent: 'center', width: '100%', marginTop: 50 }}>
          <View
            style={{ justifyContent: 'center', width: '100%' }}>
            <Text adjustsFontSizeToFit style={styles.welcomeTitleColor}>
              {appStr.login_welcom_title_str}
            </Text>
            <Text adjustsFontSizeToFit style={styles.welcomeMsgColor}>
              {appStr.login_welcom_msg_str}
            </Text>
          </View>
        </View>

        {/* login screen body view */}
        <View>
          <View style={{ justifyContent: 'center', width: '100%', marginTop: 30, flexDirection: 'column' }}>

<<<<<<< HEAD
            <View style={{ flexDirection: 'column' }}>

              <Text style={{ color: 'gray' }}>Your email</Text>
              <TextInput
                style={styles.inputbox}
                placeholder="Email"
                placeholderTextColor="gray"
=======
            {/* email input box style */}
            <View style={styles.inputboxLayout}>
              <View>
                <Entypo name="email" size={25} color={appColor.app_theme_color_main_dark}/>
              </View>
              <TextInput
                style={styles.inputBox}
                placeholder="example@hayven.com"
>>>>>>> 8a3998ca26d83bd7842446b83721d540f26ed8da
                placeholderTextColor={appColor.text_color_gray}
                onChangeText={Email => setEmail(Email)}
              />
            </View>
<<<<<<< HEAD

            <View style={{ flexDirection: 'column' }}>
              <Text style={{ color: 'gray' }}>Your password</Text>
=======
          
          {/* password input box style */}
            <View style={styles.inputboxLayout}>
              <View>
                <Entypo name="eye-with-line" size={25} color={appColor.app_theme_color_main_dark}/>
              </View>
>>>>>>> 8a3998ca26d83bd7842446b83721d540f26ed8da
              <TextInput
                style={styles.inputBox}
                secureTextEntry={true}
                autoCorrect={false}
                placeholder="Password"
                placeholderTextColor={appColor.text_color_gray}
                onChangeText={Pass => setPass(Pass)}
              />
            </View>
            <Text style={{ color: 'gray', fontSize: 11 }}>Mnimum 6 characters, one lowercase & one number</Text>


            <TouchableOpacity style={styles.signInButton}
              onPress={() => navigation.navigate("connect_chat")}>
              <Text style={styles.buttonText} onPress={() => requiestLogin()}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
export default Login;
