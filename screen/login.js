import React from 'react';
import {
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useState} from 'react';
import styles from '../stylesheet/LoginStyleSheet';
import appStr from '../AppDefaultStr';
import appColor from '../AppColor';



const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  var Email = email;
  var Pass = pass;

  const hasError = () => {
    return !Email.includes('@');
  };


  const login = ()=>{
    console.log("login")
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        {/* logo image */}
        <View style={{justifyContent: 'center', width: '100%', height: 100, padding: 20}}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assert/logo/workfreeli_final_logo_transparent.png')}
          />
        </View>

        {/* login screen welcome text */}
        <View style={{justifyContent: 'center', width: '100%', marginTop:50}}>
          <View
            style={{justifyContent: 'center', width: '100%'}}>
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
          <View style={{justifyContent: 'center', width: '100%', marginTop:30, flexDirection:'column'}}>

            <View style={{flexDirection:'column'}}>

            <Text style={{color:'#fff'}}>Email</Text>
              <TextInput
                style={styles.inputbox}
                placeholder="example@hayven.com"
                placeholderTextColor={appColor.text_color_gray}
                onChangeText={Email => setEmail(Email)}
              />
            </View>
          
          

            <View style={{flexDirection:'column'}}>
              <Text style={{color:'#fff'}}>Password</Text>
              <TextInput
              style={styles.inputbox}
                secureTextEntry={true}
                autoCorrect={false}
                placeholder="Enter Password"
                placeholderTextColor={appColor.text_color_gray}
                onChangeText={Pass => setPass(Pass)}
              />
            </View>
          

            <TouchableOpacity style={styles.button}
                onPress = {() => navigation.navigate("connect")}>
              <Text style={styles.buttonText} onPress={()=>login()}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
export default Login;
