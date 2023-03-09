import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
import axios from 'axios';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Handle signup logic here
    requestSigunupOtp();
  };

  const emaiValidate = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      return false;
    }
    else{
      return true;
    }
  }
  const requestSigunupOtp = () => {
 
    if (!emaiValidate()) {
      // do something
      ToastAndroid.show('Please enter valid email '.concat(email), ToastAndroid.SHORT);
      return;
    }
  
  const reqData={
    email: email,
  }
  
  console.log(reqData);
  
      axios.post('https://cadevapicdn02.freeli.io/users/signup_email_otp', reqData,{
        headers: {
          'Content-Type': 'application/json'
        }
        })
        .then(function (response) {
          console.log(response.data);
          if(response.data.status===true){
            ToastAndroid.show("OTP sent mail succes!", ToastAndroid.SHORT);
            navigation.navigate('signup_varifiy_code')
          }else{
            ToastAndroid.show(response.data.status, ToastAndroid.SHORT);
          }
  
        })
        .catch(function (error) {
          ToastAndroid.show(error, ToastAndroid.SHORT);
        });
  
  
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <Text style={styles.get_stated}>Get stated with Workfreeli for free!
      </Text>
      <View style={{ width: '90%' }}>
        <Text style={styles.sign_input_feld}>E-mail address <Text style={styles.sign_star}>*</Text></Text>
        <Text style={styles.sign_attha}>@</Text>
        <TextInput
          style={styles.input}
          placeholder="example@workfreeli.com"
          placeholderTextColor="gray"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>
      <Text style={styles.smalText}>Please use your work e-mail so we can help connect you with your team. This will be your username to login.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText} >Continue</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 15 }}>
        <Text>
          <Text style={styles.already_member}>Already a member ? </Text>
          <Text style={styles.signin_text} onPress={() => navigation.navigate('login')}> Sign in</Text>
        </Text>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d2150',
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  get_stated: {
    fontSize: 15,
    color: '#a0d2fd',
    marginBottom: 60,
    marginTop: 10,
  },
  input: {
    color: 'white',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    paddingLeft: 60,
    position: 'relative',
    borderWidth: 1.4,
    borderColor: '#a0d2fd'
  },
  sign_attha: {
    position: 'absolute',
    color: '#a0d2fd',
    top: 33,
    left: 20,
    fontSize: 24
  },
  button: {
    backgroundColor: '#868fa3',
    borderRadius: 5,
    width: '90%',
    height: 50,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  smalText: {
    color: 'gray',
    width: '90%',
    textAlign: 'left',
    fontSize: 10,
    marginTop: -15,
    marginBottom: 40,
  },
  sign_input_feld: {
    marginBottom: 10,
    color: '#a0d2fd',
    width: '90%',
    textAlign: 'left',
  },
  already_member: {
    color: 'gray',
    marginTop: 20
  },
  sign_star: {
    color: 'red',
    fontSize: 14
  },
  signin_text: {
    color: '#a0d2fd',
    fontSize: 17
  }
});

export default Signup;
