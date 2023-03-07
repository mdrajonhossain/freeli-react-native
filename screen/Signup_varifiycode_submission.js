import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Signup = ({ navigation }) => {



  return (
    <View style={styles.container}>

      <Text style={styles.header}>Sign Up</Text>
      <Text style={styles.header_sub}>Get stated with Workfreeli for free!</Text>


      <Text style={styles.header_sub_details}>You have exceeded the limit of creating companies. You will start with our free plan - 10 Companies & 5GB storage per account. Once you finish the sign-up process, please click on top-left profile icon and go to Admin Settings ->Subscription & Billing tab to choose additional user licenses to invite more users in this account.</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in to your account</Text>
      </TouchableOpacity>

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
  header: {
    width: '95%',
    fontSize: 22,
    color: 'white',
    lineHeight: 30,
    paddingBottom: 10,
    textAlign: 'center'
  },
  header_sub: {
    fontSize: 18,
    color: '#a0d2fd'
  },
  header_sub_details: {
    marginTop: 20,
    padding: 8,
    textAlign: 'center',
    fontSize: 14,
    color: 'red'
  },

  button: {
    backgroundColor: '#fce053',
    borderRadius: 5,
    width: '90%',
    height: 50,
    padding: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },


});

export default Signup;
