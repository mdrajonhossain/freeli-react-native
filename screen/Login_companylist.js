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
import axios from 'axios';



const Login_companylist = ({ route, navigation }) => {




  var { userinfodata, companies } = route.params;
  console.log(1234, userinfodata)




  const handleSignup = async (item) => {
    console.log(item._id)

    const opt_reqData = {
      email: userinfodata.email,
      password: userinfodata.password,
      code: '',
      device_id: 'e366824a8a86ee83',
      device_type: 'android',
      ipAddress: ipAddress,
      countryName: countryName,
      city: city,
      time: 'Mar 6, 2023 at 5:56 PM',
      gcm_id: 'frRn9moKRdk:APA91bFgn_qg-Qm2Xc3HA7LHqCVU-TjTjIiUTu7YyltHwV_pZCrDvKjfWftZin7zirhNL2xaYP0VACOkjfBTWQiWuUzTQ0hFetN0v0AnB5Wyrhhvjjc2yvOnvatcpwxIqI-STDaYuBCP',
      xmpp_token: 'xmpptoken',
      company_id: item._id
    }

    await axios.post("https://caapicdn02.freeli.io/v2/users/login", opt_reqData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function (response) {
        console.log(124, response.data.message);
      })
      .catch(function (error) {
        console.log(999, error)
        ToastAndroid.show(error, ToastAndroid.SHORT);
      });



  }


  const renderItem = ({ item }) => (
    <Pressable>
      <View style={{ height: 50, borderRadius: 10, marginTop: 10, borderWidth: 1, borderColor: 'white', backgroundColor: '#0c1e47', padding: 10 }}>
        <Text style={{ color: 'white', textAlign: 'center' }} onPress={() => handleSignup(item)}>{item.company_name}</Text>
      </View>
    </Pressable>
  );



  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', marginTop: '15%', width: '88%', fontSize: 26, color: '#0d2150', textAlign: 'center' }}>Please select a business account to continue</Text>

      <View style={{ height: '51%', width: '80%', marginTop: 30 }}>
        <FlatList
          data={companies}
          renderItem={renderItem}
          keyExtractor={this._keyExtractor}
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
