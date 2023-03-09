import React from 'react';
import {
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Pressable,
  StatusBar,
  ScrollView,
  ToastAndroid
} from 'react-native';
import { useState } from 'react';
import appStr from '../AppDefaultStr';
import appColor from '../AppColor';
import Entypo from 'react-native-vector-icons/Entypo'




const Login_companylist = ({ navigation }) => {

  const company = [
    { id: "1", name: "sITL company" },
    { id: "2", name: "aITL company" },
    { id: "3", name: "eITL company" },
    { id: "4", name: "gITL company" },
    { id: "5", name: "gITL company" },
    { id: "6", name: "ITL ecompany" },
    { id: "7", name: "ITL excompany" },
    { id: "8", name: "ITL gwcompany" },
    { id: "9", name: "ITL bgcompany" },
    { id: "10", name: "ITL hcompany" },
    { id: "11", name: "ITL jcompany" },
    { id: "12", name: "ITL ucompany" },
    { id: "13", name: "ITL jjcompany" },
    { id: "14", name: "ITL ytcompany" },
    { id: "15", name: "ITL company" },
  ]



  const renderItem = ({ item }) => (
    <Pressable>
      <View style={{ height: 50, borderRadius: 10, marginTop: 10, borderWidth: 1, borderColor: 'white', backgroundColor: '#0c1e47', padding: 10 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>{item.name}</Text>
      </View>
    </Pressable>
  );



  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', marginTop: '15%', width: '88%', fontSize: 26, color: '#0d2150', textAlign: 'center' }}>Please select a business account to continue</Text>

      <View style={{ height: '51%', width: '80%', marginTop: 30 }}>
        <FlatList
          data={company}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    // backgroundColor: '#0d2150',
  },
  button: {
    backgroundColor: '#0d2150',
    borderRadius: 5,
    width: '80%',
    height: 50,
    padding: 10,
    marginTop: 30
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
});


export default Login_companylist;
