import React from 'react';
import {
  TextInput,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useState} from 'react';



const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  var Email = email;
  var Pass = pass;

  const hasError = () => {
    return !Email.includes('@');
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        {/* logo image */}
        <View style={{justifyContent: 'center', width: '100%'}}>
          <Image
            style={{width: '100%', height: 80}}
            source={require('../assert/logo/workfreeli_final_logo.png')}
          />
        </View>

        {/* login screen welcome text */}
        <View style={{justifyContent: 'center', width: '100%', marginTop:50}}>
          <View
            style={{justifyContent: 'center', width: '100%'}}>
            <Text adjustsFontSizeToFit style={styles.textColor1}>
              Hello! Welcome back
            </Text>
            <Text adjustsFontSizeToFit style={styles.textColor2}>
              Sign into your account here
            </Text>
          </View> 
        </View>

        {/* login screen body view */}
        <View>
          <View style={{justifyContent: 'center', width: '100%', marginTop:30}}>
            <Text>Email Address</Text>
            <TextInput
              style={styles.inputbox}
              placeholder="example@hayven.com"
              onChangeText={Email => setEmail(Email)}
            />

            <Text>Password</Text>
            <TextInput
              style={styles.inputbox}
              secureTextEntry={true}
              autoCorrect={false}
              placeholder="Enter Password"
              onChangeText={Pass => setPass(Pass)}
            />

            <TouchableOpacity style={styles.button}
                onPress={() => {
                   console.log("Log in button click");
                }}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    width:'100%',
    height:'100%',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'column',
  },
  errorMessage: {
    fontSize: 20,
    color: 'red',
    marginLeft: -80,
  },
  inputbox: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    borderColor: '#023d67',
    backgroundColor: '#c6cbca',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    marginTop: 50,
    justifyContent: 'center',
    backgroundColor: '#023d67',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
  },
  textColor1: {
    color: '#000000',
    fontSize: 22,
    width: '100%',
    textAlign: 'center',
    fontStyle: 'normal',
  },
  textColor2: {
    width: '100%',
    textAlign: 'center',
    color: '#000000',
    fontSize: 12,
  },
});

export default Login;
