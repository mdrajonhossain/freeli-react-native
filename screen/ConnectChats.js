 import React,{Component} from 'react';
 import {View,Text} from 'react-native';
import appColor from '../AppColor';
import stylesheet from '../stylesheet/ConnectScreenStyleSheet';


 const ConnectChat = () =>{
    return(
        <View style={{flex:1,backgroundColor:appColor.white,flexDirection:'column-reverse'}}>
            <View style={stylesheet.thread_message}>
                <Text style={{ color: 'white', fontSize: 16 }}>46</Text>
                <Text style={{ color: 'white', fontSize: 16 }}> Threaded message(s)</Text>
        </View>
        </View>
    );
 }



 export default ConnectChat;