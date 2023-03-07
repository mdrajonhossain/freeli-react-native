import React, { useState,useEffect} from 'react';
import { StyleSheet, Image, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Connect_tabbar from './Connect_tabbar';


const data=null




const Connect_chat = ({route, navigation }) => {

  const [pin_convs, setPin_convs] = useState([]);
  const [unpin_convs, setUnpin_convs] = useState([]);

  var { res } = route.params;

  useEffect(() => {
    
    setPin_convs(res.data.pin_convs)
    setUnpin_convs(...pin_convs, res.data.unpin_convs)
  
  },[]);

  console.log(1234, res.data.pin_convs)
  //data= res.data.pin_convs
  


  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', paddingVertical: 5, borderBottomWidth: 0.5, borderBottomColor: 'lightgray', marginLeft: 10 }}>
      <View >

        <Image
          source={{uri: item.conv_img}}
          style={styles.user_photo}
        />
      </View>

      <View style={{ paddingVertical: 10, marginLeft: 10 }}>
        <Text style={{ fontSize: 14, color: '#032e84' }}> {item.title}</Text>
      </View>
    </View>
  );





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
        <FlatList
          data={unpin_convs}
          renderItem={renderItem}
          keyExtractor={index => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>


      <View style={styles.footer}>



        <View style={styles.thread_message}>
          <View style={styles.thread_message_text}><Text style={{ color: 'white', fontSize: 16 }}>Threaded message(s)</Text></View>
          <View style={styles.thread_message_counter}><Text>46</Text></View>
        </View>


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
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  thread_message: {
    flex: 5,
    flexDirection: 'row'
  },
  thread_message_counter: {
    flex: 1
  }


});

export default Connect_chat;
