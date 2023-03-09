import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';



const Login_verifycode = ({ route, navigation }) => {



  var { userinfo } = route.params;


  console.log(1234, userinfo)




  const [code, setCode] = useState('');

  const codeInputRefs = useRef([]);

  const handleCodeChange = (index, value) => {

    const newCode = code.split('');
    newCode[index] = value;
    setCode(newCode.join(''));

    if (value && index < code.length - 1) {
      codeInputRefs.current[index + 1].focus();
    }
  };



  const handleSignup = () => {






    const opt_reqData = {
      email: userinfo.email,
      password: userinfo.password,
      code: code,
      device_id: 'e366824a8a86ee83',
      device_type: 'android',
      ipAddress: ipAddress,
      countryName: countryName,
      city: city,
      time: 'Mar 6, 2023 at 5:56 PM',
      gcm_id: 'frRn9moKRdk:APA91bFgn_qg-Qm2Xc3HA7LHqCVU-TjTjIiUTu7YyltHwV_pZCrDvKjfWftZin7zirhNL2xaYP0VACOkjfBTWQiWuUzTQ0hFetN0v0AnB5Wyrhhvjjc2yvOnvatcpwxIqI-STDaYuBCP',
      xmpp_token: 'xmpptoken',
      // company_id: "f4e2ccb0-5a3a-11ec-9799-a4ea5366ede0"
    }



    axios.post("https://caapicdn02.freeli.io/v2/users/login", opt_reqData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function (response) {
        console.log(5555, response.data.companies);

        navigation.navigate("login_companylist", {userinfodata:opt_reqData, companies: response.data.companies});
      })
      .catch(function (error) {
        console.log(999, error)
        ToastAndroid.show(error, ToastAndroid.SHORT);
      });



  }

  return (
    <View style={styles.container}>

      <Text style={styles.verify_header}>
        Verification
      </Text>

      <View style={styles.request_suggest}>
        <Text style={{ color: '#a0d2fd', fontSize: 10 }}>Enter verification code.</Text>
      </View>

      <View style={styles.verify_input_feild}>
        {[0, 1, 2, 3, 4, 5].map(i => (
          <TextInput
            key={i}
            ref={ref => (codeInputRefs.current[i] = ref)}
            style={styles.codeInput}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={value => handleCodeChange(i, value)}
            value={code[i]}
          />
        ))}
      </View>

      <View style={styles.verify_suggest_condition}>
        <Text style={{ color: 'gray', fontSize: 10 }}>Verification code has been sent to your email..</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Continue</Text>
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
  verify_header: {
    width: '100%',
    fontSize: 27,
    color: 'white',
    marginBottom: 60,
    lineHeight: 30,
    textAlign: 'center'
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
  already_member: {
    color: 'gray',
    marginTop: 20
  },

  signin_text: {
    color: '#a0d2fd',
    fontSize: 17
  },
  verify_input_feild: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  codeInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#a0d2fd",
    color: 'black',
    textAlign: 'center',
    fontSize: 17,
    marginHorizontal: 5,
    backgroundColor: 'white',
  },
  verify_suggest_condition: {
    width: '95%',
    fontSize: 16,
    marginBottom: 40,
    marginTop: 10
  },
  request_suggest: {
    width: '95%',
    marginBottom: 10
  }
});

export default Login_verifycode;
