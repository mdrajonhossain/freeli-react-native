import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Handle signup logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <Text style={styles.get_stated}>Get stated with Workfreeli for free!
</Text>

      <Text style={styles.sign_input_feld}>E-mail address</Text>
      <TextInput
        style={styles.input}
        placeholder="example@workfreeli.com"
        placeholderTextColor="gray"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
       <Text style={styles.smalText}>Please use your work e-mail so we can help connect you with your team. This will be your username to login.
</Text>
   
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.already_member}>Already a member ?  <Text style={styles.signin_text} onPress={() => navigation.navigate('login')}> Sign in</Text></Text>
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
  get_stated:{
  	fontSize: 15,
    color: 'white',
    marginBottom: 60,
    marginTop: 10,
  },
  input: {
    width: '90%',
    color: 'white',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    paddingLeft:25
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
    fontSize:20,
  },
  smalText: {
    color: '#fff',
    width: '90%',    
    textAlign: 'left',
    fontSize:10,
    marginTop: -15,
    marginBottom: 40,
  },
  sign_input_feld:{
    marginBottom: 10,
  	color: '#fff',
    width: '90%',
  	textAlign: 'left',
  },
  already_member:{
  	color:'white',
  	marginTop:20
  },
  signin_text:{
  	color:'#0c6e47',
  	fontSize:18
  }
});

export default Signup;
