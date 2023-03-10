 import React,{Component} from 'react';
 import {View,Text,FlatList} from 'react-native';
import appColor from '../AppColor';
import stylesheet from '../stylesheet/ConnectScreenStyleSheet';
import convData from '../demoData/ConversationData.json'
import ConversationItem from '../partials/ConversationItem'


 const ConnectChat = ({navigation}) =>{

    var jsonArray = convData.array;


    return(
        <View style={{flex:1,backgroundColor:appColor.white,flexDirection:'column-reverse'}}>
            <View style={stylesheet.thread_message}>
                <Text style={{ color: 'white', fontSize: 16 }}>46</Text>
                <Text style={{ color: 'white', fontSize: 16 }}> Threaded message(s)</Text>
        </View>

        <View style = {{flex:1}}>
            <FlatList
            data={jsonArray}
            renderItem={ ({item, index}) => 
                <ConversationItem item={item} index={index}
                    navigation={navigation}/> }
                keyExtractor={i => i.id}
            contentContainerStyle={{ flexGrow: 1 }}
        />
        
        

        </View>

        </View>
    );
 }



 export default ConnectChat;