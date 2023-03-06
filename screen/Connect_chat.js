import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Connect_tabbar from './Connect_tabbar';



const data = [
  { id: 1, name: 'Md. Mamun Or Rashid Rajon', email: 'john@example.com' },
  { id: 2, name: 'Daily Meeting', email: 'jane@example.com' },
  { id: 3, name: 'Sohel rana', email: 'bob@example.com' },
  { id: 4, name: 'Everyone', email: 'alice@example.com' },
  { id: 5, name: 'call test hangup', email: 'alice@example.com' },
  { id: 6, name: 'ITL Team', email: 'alice@example.com' },
  { id: 7, name: 'APK Call Testing 5', email: 'alice@example.com' },
  { id: 8, name: 'Guest Room e', email: 'alice@example.com' },
  { id: 9, name: 'Alamgir Hossain', email: 'alice@example.com' },
  { id: 10, name: 'Itl Group', email: 'alice@example.com' },
  { id: 11, name: 'Check Group', email: 'alice@example.com' },
  { id: 12, name: 'Test Shakil', email: 'alice@example.com' },
  { id: 13, name: 'Web Groups', email: 'alice@example.com' },
  { id: 14, name: 'Monzurul Alam', email: 'alice@example.com' },
  { id: 15, name: 'Mobile Call Test', email: 'alice@example.com' },
  { id: 16, name: 'Alice', email: 'alice@example.com' },
  { id: 17, name: 'Alice', email: 'alice@example.com' },
  { id: 18, name: 'Alice', email: 'alice@example.com' },
  { id: 19, name: 'Alice', email: 'alice@example.com' },
  { id: 20, name: 'Alice', email: 'alice@example.com' },
  { id: 21, name: 'Alice', email: 'alice@example.com' },
  { id: 22, name: 'Alice', email: 'alice@example.com' },
  { id: 23, name: 'Alice', email: 'alice@example.com' },
  { id: 24, name: 'Alice', email: 'alice@example.com' },
  { id: 25, name: 'Alice', email: 'alice@example.com' },
  { id: 26, name: 'Alice', email: 'alice@example.com' },
  { id: 27, name: 'Alice', email: 'alice@example.com' },
  { id: 28, name: 'Alice', email: 'alice@example.com' },
  { id: 29, name: 'Alice', email: 'alice@example.com' },
  { id: 30, name: 'Alice', email: 'alice@example.com' },
  { id: 31, name: 'Alice', email: 'alice@example.com' },
  { id: 32, name: 'Alice', email: 'alice@example.com' },
  { id: 33, name: 'Alice', email: 'alice@example.com' },
  { id: 34, name: 'Alice', email: 'alice@example.com' },
  { id: 35, name: 'Alice', email: 'alice@example.com' },
  { id: 36, name: 'Alice', email: 'alice@example.com' },
  { id: 37, name: 'Alice', email: 'alice@example.com' },
  { id: 38, name: 'Alice', email: 'alice@example.com' },
  { id: 39, name: 'Alice', email: 'alice@example.com' },
  { id: 40, name: 'Alice', email: 'alice@example.com' },
];



const Connect_chat = ({ navigation }) => {


  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', paddingVertical: 5, borderBottomWidth: 0.5, borderBottomColor: 'lightgray', marginLeft: 10 }}>
      <View >

        <Image
          source={require('../assert/images/userphoto.jpg')}
          style={styles.user_photo}
        />
      </View>

      <View style={{ paddingVertical: 10, marginLeft: 10 }}>
        <Text style={{ fontSize: 14, color: '#032e84' }}> {item.name}</Text>
      </View>
    </View>
  );





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
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
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

export default Connect_chat;
