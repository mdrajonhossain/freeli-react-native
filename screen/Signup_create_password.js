import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Signup_create_password = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [conpassword, setConpassword] = useState('');

  const handleSignup = () => {
    // Handle signup logic here
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Almost done!</Text>
        <Text style={styles.sub_title}>Set your password for your Workfreeli account</Text>

        <Text style={styles.headofcompany}>Create a password</Text>
        <TextInput
          style={styles.input_company}
          placeholder="Password"
          placeholderTextColor="gray"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Text style={styles.password_details}>Create a strong password that is at least 6 characters long. Include numbers, lower case characters to increase the strength of your password.
        </Text>


        <Text style={styles.headofcompanylist}>Confirm password</Text>
        <TextInput
          style={styles.input_company_list}
          placeholder="Confirm password"
          placeholderTextColor="gray"
          value={conpassword}
          onChangeText={setConpassword}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('Signup_inviteadmin')}>Continue</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 15, alignItems: 'center' }}>
          <Text>
            <Text style={styles.already_member}>Already a member ? </Text>
            <Text style={styles.signin_text} onPress={() => navigation.navigate('login')}> Sign in</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d2150',
    width: '100%',
    padding: 10
  },
  title: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginTop: 60,
  },
  sub_title: {
    marginBottom: 50,
    marginTop: 10,
    textAlign: 'center',
    color: '#a0d2fd',
  },
  password_details: {
    color: 'gray',
    fontSize: 10,
    paddingTop: 2,
    paddingRight: 1
  },

  headofcompany: {
    fontSize: 13,
    color: '#a0d2fd',
    paddingBottom: 10
  },
  input_company: {
    color: 'white',
    height: 50,
    width: '99%',
    borderRadius: 5,
    paddingLeft: 10,
    borderWidth: 1.4,
    borderColor: '#a0d2fd'
  },

  headofcompanylist: {
    fontSize: 13,
    color: '#a0d2fd',
    paddingBottom: 10,
    marginTop: 20
  },
  input_company_list: {
    color: 'white',
    height: 50,
    width: '99%',
    borderRadius: 5,
    paddingLeft: 10,
    borderWidth: 1.4,
    borderColor: '#a0d2fd',
    marginBottom: 30
  },
  button: {
    backgroundColor: '#868fa3',
    borderRadius: 5,
    width: '100%',
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
    marginTop: 20,
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

export default Signup_create_password;
