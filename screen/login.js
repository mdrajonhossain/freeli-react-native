import React from 'react';
import {
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useState,useEffect } from 'react';
import styles from '../stylesheet/LoginStyleSheet';
import appStr from '../AppDefaultStr';
import appColor from '../AppColor';
import Entypo from 'react-native-vector-icons/Entypo'
import { ToastAndroid } from 'react-native';
import DeviceInfo from 'react-native-device-info';


import axios from 'axios';


global.continentName = "";
global.city = "";
global.continentName = "";
global.ipAddress = "";
global.ipAddress = "";
global.continentCode = "";
global.stateProv = "";
global.time = "";




const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passError, setPassError] = useState(false);



  const emaiValidate = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      return false;
    }
    else{
      return true;
    }
  }

  const passwordValidate = () => {
    let reg = /^((?=.*[a-z])|(?=.*[A-Z]))(?=.*[0-9])(?=.{6,})/;

    if(reg.test(pass) === false){
      return false;
    }
    else{
      return true;
    }

  }

  useEffect(() => {
   requiestLocation();
  },[]);

  

 const requiestLogin = () => {


 
  if (email === '' || email === null|| pass === '' || pass === null) {
    // do something
    ToastAndroid.show('Please enter email and password!', ToastAndroid.SHORT);
    return
  }

const reqData={
  email: email,
  password: pass,
  gcm_id: 'frRn9moKRdk:APA91bFgn_qg-Qm2Xc3HA7LHqCVU-TjTjIiUTu7YyltHwV_pZCrDvKjfWftZin7zirhNL2xaYP0VACOkjfBTWQiWuUzTQ0hFetN0v0AnB5Wyrhhvjjc2yvOnvatcpwxIqI-STDaYuBCP',
  device_id: 'e366824a8a86ee83',
  device_type: 'android',
  lat: '',
  lang: '',
  city: city,
  ipAddress: ipAddress,
  countryName: countryName,
  continentCode: continentCode,
  continentName: continentName,
  countryCode: countryCode,
  stateProv: stateProv,
  time: 'Mar 6, 2023 at 5:56 PM'
}

console.log(reqData);

    axios.post('https://cadevapicdn02.freeli.io/users/login_new', reqData,{
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .then(function (response) {
        console.log(response.data.message);
if(response.data.message==="success"){
  
  ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
  navigation.navigate("connect_chat", {res : response})
}else{

  ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
}

      })
      .catch(function (error) {
        ToastAndroid.show(error, ToastAndroid.SHORT);
      });


  }


  const requiestLocation = () => {
 
    axios.get('https://api.db-ip.com/v2/free/self')
    .then(response => {

     
      console.log(response.data);
      // handle response data
      countryName=response.data.countryName;
      city=response.data.city;
      ipAddress=response.data.ipAddress;
      countryCode=response.data.countryCode;
      continentName=response.data.continentName;
      stateProv=response.data.city;
      const currentTime = new Date();
      console.log("date ",currentTime);
      const deviceId = DeviceInfo.getUniqueId();
      console.log("device",deviceId); // prints the device ID to the console

    
      
    })
    .catch(error => {
      console.error(error);
      // handle error
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
                onChangeText={Email => {
                  setEmail(Email);
                }}
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
              onPress={() => {
                if(emaiValidate() && passwordValidate()){
                  requiestLogin();
                
                }
                else{
                  ToastAndroid.show('Please enter valid email and password!', ToastAndroid.SHORT);
                }
                }}>
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
