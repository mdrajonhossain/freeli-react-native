import React, { useState } from 'react';
import { StyleSheet, Image, Button, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';


const Connect_tabbar = () => {
  const navigation = useNavigation();
  const route = useRoute();


  const [chatbtn, setChatbtn] = useState(route.name === "connect_chat" ? true : false)
  const [callbtn, setCallbtn] = useState(route.name === "connect_call" ? true : false)
  const [hubbtn, setHubbtn] = useState(route.name === "connect_hub" ? true : false)




  return (
    <>
      <View style={chatbtn ? styles.active_chat : { flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate('connect_chat')}>
          <Text style={{ textAlign: 'center', color: 'white' }}> chat </Text>
        </TouchableOpacity>
      </View>


      <View style={callbtn ? styles.active_call : { flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate('connect_call')}>
          <Text style={{ textAlign: 'center', color: 'white' }}> call </Text>
        </TouchableOpacity>
      </View>


      <View style={hubbtn ? styles.active_hub : { flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate('connect_hub')}>
          <Text style={{ textAlign: 'center', color: 'white' }}> hub </Text>
        </TouchableOpacity>
      </View>

    </>
  );
};




const styles = StyleSheet.create({

  active_chat: {
    flex: 1,    
    backgroundColor: '#a0d2fd',
    borderRadius: 10,
    height: 30,
    justifyContent: 'center'
  },
  active_call: {
    flex: 1,
    backgroundColor: '#a0d2fd',
    borderRadius: 10,
    height: 30,
    justifyContent: 'center'
  },

  active_hub: {
    flex: 1,
    backgroundColor: '#a0d2fd',
    borderRadius: 10,
    height: 30,
    justifyContent: 'center'
  },


});

export default Connect_tabbar;
