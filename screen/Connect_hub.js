import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Connect_tabbar from './Connect_tabbar';




const Connect_hub = ({ navigation }) => {




  return (
    <View style={styles.container}>

      <View style={styles.topbar}>

      <View style={styles.tab_top}>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 5 }}>
              <Image
                source={require('../assert/logo/DarkLogo.png')}
                style={styles.connect_logo}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Image
                source={require('../assert/images/alert.png')}
                style={styles.alert}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Image
                source={require('../assert/images/searchh.png')}
                style={styles.search}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Image
                source={require('../assert/images/toggle.png')}
                style={styles.search}
              />
            </View>
          </View>
        </View>

        <View style={styles.tab}>
          <Connect_tabbar />
        </View>
      </View>



      <View style={styles.user_body}>
        <Text> File hubs </Text>
      </View>


      <View style={styles.footer}>
        <Text> testa </Text>
      </View>




    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#0d2150'
  },
  topbar: {
    flex: 3
  },
  tab_top: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#0d2158',
    height: '100%',
    alignItems: 'center',
    paddingLeft: 15
  },
  tab: {
    flexDirection: 'row',
    flex: 1,
  },
  user_body: {
    flex: 15,
    backgroundColor: 'white'
  },
  user_photo: {
    width: 40,
    height: 40,
    borderRadius: 40
  },
  connect_logo: {
    width: 38,
    height: 35
  },
  alert: {
    width: 23,
    height: 22
  },
  footer: {
    flex: 2
  }


});

export default Connect_hub;
