import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';


const Home = ({ navigation }) => {



  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assert/logo/workfreeli_final_logo_transparent.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>

      <View style={styles.main_slider}>
        <Swiper style={styles.wrapper} autoplay={true}>
          <View style={styles.slide}>

            <View style={{ width: '100%', padding: 10, marginTop: 10, marginBottom: 10 }}>
              <Text style={styles.slide_text}>Collaborate with you</Text>
              <Text style={styles.slide_text}>Team on the go</Text>
            </View>
            <Image source={require('../assert/images/imgpsh_fullsize_anim_one.png')} style={{ width: '60%', height: 180, resizeMode: "stretch" }} />
            <View style={{ width: '100%', marginBottom: 20 }}>
              <Text style={{ fontSize: 13, textAlign: 'center', color: '#d6e30d' }}>Send message and hop on</Text>
              <Text style={{ fontSize: 13, textAlign: 'center', color: '#d6e30d', }}>voice and video calls.</Text>
            </View>
          </View>
          <View style={styles.slide}>
            <View style={{ width: '100%', padding: 10, marginTop: 10, marginBottom: 20 }}>
              <Text style={styles.slide_text}>Manage your files from with you</Text>
              <Text style={styles.slide_text}>the palm of your hands</Text>
            </View>
            <Image source={require('../assert/images/imgpsh_fullsize_anim_two.png')} style={{ width: '60%', height: 160, resizeMode: "stretch" }} />
            <View style={{ width: '100%', padding: 10, marginBottom: 20 }}>
              <Text style={{ fontSize: 13, textAlign: 'center', color: '#d6e30d' }}>Access all your files and use</Text>
              <Text style={{ fontSize: 13, textAlign: 'center', color: '#d6e30d', }}>tags to stay organized.</Text>
            </View>
          </View>
          <View style={styles.slide}>
            <View style={{ width: '100%', padding: 10, marginTop: 10, marginBottom: 20 }}>
              <Text style={styles.slide_text}>Always private and secure</Text>
            </View>
            <Image source={require('../assert/images/imgpsh_fullsize_anim_three.png')} style={{ width: '60%', justifyContent: 'center', alignItems: 'center', height: 140, resizeMode: "stretch" }} />
            <View style={{ width: '100%', padding: 10, marginBottom: 20 }}>
              <Text style={{ fontSize: 13, textAlign: 'center', color: '#d6e30d' }}>With end-to-end encryption your</Text>
              <Text style={{ fontSize: 13, textAlign: 'center', color: '#d6e30d', }}>message are kept confidential at all times.</Text>
            </View>
          </View>
        </Swiper>
      </View>

      <TouchableOpacity style={styles.signup_btn}>
        <Text style={styles.signup_txt} onPress={() => navigation.navigate("login")}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.main_have_account}>
        <Text style={styles.have_account}>Don't thave an account ?
          <Text style={styles.signup_signin} onPress={() => navigation.navigate("login_verify_code")}> Sign up</Text>
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0d2150'
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    width: '100%'
  },
  logo: {
    width: '67%',
    height: 56,
  },
  main_slider: {
    height: '58%',
  },
  wrapper: {},
  slide: {
    alignItems: 'center',
  },
  image: {
    width: '60%',
    height: 180,
    resizeMode: "stretch",
  },
  slide_text: {
    fontSize: 20,
    color: '#d6e30d',
    textAlign: 'center'
  },
  signup_btn: {
    backgroundColor: 'black',
    borderRadius: 5,
    width: '90%',
    height: 52,
    justifyContent: 'center',

  },
  signup_txt: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },

  main_have_account: {
    padding: 10,
  },
  signup_signin: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  have_account: {
    color: 'gray',
    fontSize: 14,
  }

});

export default Home;




