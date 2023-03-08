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
import { ToastAndroid } from 'react-native';


import axios from 'axios';




const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passError, setPassError] = useState(false);


  const hasError = () => {
    return !Email.includes('@');
  };


 const requiestLogin = () => {
 

console.log(email);
console.log(pass);
const reqData={
  email: email,
  password: pass,
  gcm_id: 'frRn9moKRdk:APA91bFgn_qg-Qm2Xc3HA7LHqCVU-TjTjIiUTu7YyltHwV_pZCrDvKjfWftZin7zirhNL2xaYP0VACOkjfBTWQiWuUzTQ0hFetN0v0AnB5Wyrhhvjjc2yvOnvatcpwxIqI-STDaYuBCP',
  device_id: 'e366824a8a86ee83',
  device_type: 'android',
  lat: '',
  lang: '',
  city: 'Lakshmipur',
  ipAddress: '103.138.27.165',
  countryName: 'Bangladesh',
  continentCode: 'AS',
  continentName: 'Asia',
  countryCode: 'BD',
  stateProv: 'Chittagong',
  time: 'Mar 6, 2023 at 5:56 PM'
}

    axios.post('https://cadevapicdn02.freeli.io/users/login_new', reqData,{
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .then(function (response) {
        
if(response.data.message==="success"){
 // console.log(response.data);
  console.log(response.data.message);
  console.log(response.data);
  ToastAndroid.show('Login success!', ToastAndroid.SHORT);
  navigation.navigate("connect_chat", {res : response})
}else{
  console.log("failed");
  ToastAndroid.show('login failed!', ToastAndroid.SHORT);
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

            {/* email input box style */}
            <View style={styles.inputboxLayout}>
              <View>
                <Entypo name="email" size={25} color={appColor.app_color_main_blue}/>
              </View>
              <TextInput
                style={styles.inputBox}
                placeholder="example@hayven.com"
                placeholderTextColor={appColor.text_color_gray}
                onChangeText={Email => setEmail(Email)}
              />
            </View>
          
          {/* password input box style */}
            <View style={styles.inputboxLayout}>
              <View>
                <Entypo name="eye-with-line" size={25} color={appColor.app_color_main_blue}/>
              </View>
              <TextInput
                style={styles.inputBox}
                secureTextEntry={true}
                autoCorrect={false}
                placeholder="Password"
                placeholderTextColor={appColor.text_color_gray}
                onChangeText={Pass => setPass(Pass)}
              />
            </View>
            {/* password miss match text style */}

            {passError ? <Text style={{ color: 'gray', fontSize: 11 }}>Mnimum 6 characters, one lowercase & one number</Text> : <View></View>}
            


            {/* sign in with otp and frogot password style */}
            <View style={{justifyContent:'flex-start',alignItems:'center',width:'100%',
                          height:50,flexDirection:'row'}} >

              <Text style={styles.textBlueLight}>Sign in with OTP?</Text>

              <View style={{width:'100%',height:'100%',flexDirection:'row-reverse',flex:1,
                            justifyContent:'flex-start',alignItems:'center'}}>
                <Text style={styles.textBlueLight}>Forgot Your Password?</Text>
              </View>

            </View>

            {/* sign in button style */}
            <TouchableOpacity style={styles.signInButton}
              onPress={() => requiestLogin()}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            {/* sign in button style */}

            <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>

              <Text style={styles.defaultMsgColor}>Privacy Policy </Text>
              <Text style={styles.defaultMsgColor}>|</Text>
              <Text style={styles.defaultMsgColor}> Contact</Text>

            </View>

            
            
          </View>
        </View>
      </View>
    </>
  );
}
export default Login;
