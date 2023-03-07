import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Signup_about_company = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Handle signup logic here
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>About Your Business</Text>

        <Text style={styles.headofcompany}>Create a Comapny Or Workspace</Text>
        <TextInput
          style={styles.input_company}
          placeholder="Company or Workspece"
          placeholderTextColor="gray"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />


        <Text style={styles.headofcompanylist}>Industry</Text>
        <TextInput
          style={styles.input_company_list}
          placeholder="Company or Workspece"
          placeholderTextColor="gray"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('signup_createpassword')}>Continue</Text>
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
    marginBottom: 100
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

export default Signup_about_company;
