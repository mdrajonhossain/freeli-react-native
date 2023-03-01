import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';


const Home = () => {


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assert/images/images.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>

      <View style={styles.main_slider}>
        <Swiper style={styles.wrapper} autoplay={true}>
          <View style={styles.slide}>
            <Image source={require('../assert/images/slider01.jpg')} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../assert/images/images.png')} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../assert/images/slider01.jpg')} style={styles.image} />
          </View>
        </Swiper>
      </View>


      <TouchableOpacity style={styles.signup_btn}>
        <Text style={styles.signup_txt}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.main_have_account}>
        <Text style={styles.have_account}>Don't thave an account ?
          <Text style={styles.signup_signin}> Sign in</Text>
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    width: '100%',
  },
  logo: {
    width: '80%',
    height: 60,
  },
  main_slider: {
    height: '58%',
  },
  wrapper: {},
  slide: {
    alignItems: 'center',
    height: '80%',
  },
  image: {
    width: '100%',
    resizeMode: "stretch"
  },

  signup_btn: {
    backgroundColor: 'black',
    borderRadius: 5,
    width: '90%',
    height: 40,
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
    color: '#0d2150',
    fontSize: 17,
    fontWeight: 'bold',
  },
  have_account: {
    color: 'gray',
    fontSize: 14,
  }

});

export default Home;




