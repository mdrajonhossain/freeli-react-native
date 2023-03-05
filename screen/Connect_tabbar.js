import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, FlatList, TouchableOpacity } from 'react-native';


const Connect_tabbar = ({ navigation }) => {


  



  return (
    <>
      <View style={styles.chat}>
        <TouchableOpacity>
          <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}> chat </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.call}>
        <TouchableOpacity>
          <Text style={{ textAlign: 'center', color: 'white' }}> call </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.hub}>
        <TouchableOpacity>
          <Text style={{ textAlign: 'center', color: 'white' }}> hub </Text>
        </TouchableOpacity>
      </View>

    </>
  );
};




const styles = StyleSheet.create({

  chat: {
    flex: 1,
    backgroundColor: '#a0d2fd',
    borderRadius: 10,
    height: 30,
    justifyContent: 'center'
  },
  call: {
    flex: 1
  },
  hub: {
    flex: 1
  },


});

export default Connect_tabbar;
