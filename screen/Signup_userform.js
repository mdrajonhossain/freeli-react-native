import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Signup_userform = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Handle signup logic here
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.get_stated}>Get stated with Workfreeli for free!
        </Text>
        <Text style={styles.sign_input_feld}>Name <Text style={styles.sign_star}>*</Text></Text>
        <View style={{ width: '92%', flex: 1, flexDirection: 'row', gap: 10 }}>
          <TextInput
            style={styles.input}
            placeholder="First name"
            placeholderTextColor="gray"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="First name"
            placeholderTextColor="gray"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={{ width: '96%', marginTop: 5, flex: 1, flexDirection: 'row', gap: 10 }}>
          <Text style={styles.signup_firstname}>First Name </Text>
          <Text style={styles.signup_firstname}>Last Name </Text>
        </View>

        <Text style={styles.signup_phone}>Phone Number (optional)</Text>

        <View>

          <TextInput
            style={styles.input_phone}
            placeholder="phone number"
            placeholderTextColor="gray"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <Text style={styles.signup_underof_phone}>This is for verification and security purposes only. We will never share your phone number with anyone.</Text>


        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('signup_aboutcompany')}>Continue</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d2150',
    width: '100%',
    padding: 10
  },
  title: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginTop: 60,
    fontWeight: 'bold',
  },
  get_stated: {
    fontSize: 15,
    textAlign: 'center',
    color: '#a0d2fd',
    marginBottom: 40,
    marginTop: 10,
  },
  sign_input_feld: {
    marginBottom: 10,
    color: '#a0d2fd',
    width: '90%',
    textAlign: 'left',
  },
  input: {
    color: 'white',
    height: 50,
    width: '50%',
    borderRadius: 5,
    paddingLeft: 10,
    borderWidth: 1.4,
    borderColor: '#a0d2fd'
  },
  signup_firstname: {
    color: 'gray',
    flex: 1
  },
  signup_phone: {
    color: 'gray',
    marginTop: 20,
    paddingBottom: 8
  },
  input_phone: {
    color: 'white',
    height: 50,
    width: '95%',
    borderRadius: 5,
    paddingLeft: 10,
    borderWidth: 1.4,
    borderColor: '#a0d2fd'
  },
  signup_underof_phone: {
    fontSize: 12,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    color: 'gray',
    marginBottom: 20
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

export default Signup_userform;
