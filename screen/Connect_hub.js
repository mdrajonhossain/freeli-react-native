import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Connect_tabbar from './Connect_tabbar';




const Connect_hub = ({ navigation }) => {




  return (
    <View style={styles.container}>

      <View style={styles.topbar}>

        <View style={styles.tab_top}>
          <Text> Logo </Text>
          <Text> Search </Text>
          <Text> Alert </Text>
          <Text> Toggle </Text>
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
    flexDirection: 'row'
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
  footer: {
    flex: 2
  }


});

export default Connect_hub;
