import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Signup_varifiycode = ({ navigation }) => {



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

  const handleCodeSubmit = () => {

    console.log(code);
  };


  const handleSignup = () => {

  };



  return (
    <View style={styles.container}>

      <Text style={styles.verify_header}>
        We have send an activation code to rajonhossaindhaka@gmail.com
      </Text>


      <View style={styles.request_suggest}>
        <Text style={{ color:'#a0d2fd', fontSize: 10 }}>Please enter the activation code that has been sent to you.</Text>
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
            onSubmitEditing={handleCodeSubmit}
          />
        ))}
      </View>

      <View style={styles.verify_suggest_condition}>
        <Text style={{ color: 'gray', fontSize: 10 }}>If you haven't received an activation code in your inbox, please check your SPAM folder or click this line to resend the code.</Text>
      </View>


      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('signupuser_form')}>Continue</Text>
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
    width: '95%',
    fontSize: 19,
    color: 'white',
    marginBottom: 70,
    lineHeight: 30,
    marginTop: 10,
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

export default Signup_varifiycode;
