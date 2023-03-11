import React, {useState} from 'react';
import { View, Image, Text, Dimensions, Pressable } from 'react-native';
import StyleSheetJs from '../stylesheet/ConnectScreenStyleSheet';
import colorValues from '../AppColor';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'


const win = Dimensions.get('window');
const imgH = ((win.height) / 8)
const imgW = ((win.width) / 4)



const ConversationItem = ({ item, index}) => {
    const navigation = useNavigation();

    return (
        <Pressable onPress={()=> navigation.navigate("chatScreen")}>
        <View  key={item.id} style={StyleSheetJs.conversationItem}>
            <Pressable>
                <Image style={StyleSheetJs.conversationImg}
                    source={require('../assert/images/demo_profile.png')} />
            </Pressable>
            <Pressable style={StyleSheetJs.conversationNameTime}>

                <View style={{flexDirection:'column'}}>

                    <Text style={{ fontSize: 12, color: colorValues.gray,marginBottom:5 }}>11/5/2023</Text>

                    <View style={{flexDirection:'row-reverse'}}>

                        <View style={StyleSheetJs.circleBgCounter}>
                            <Text style={{ fontSize: 10, color: colorValues.white }}>99+</Text>
                        </View>

                        <MaterialCommunityIcons name="pin" size={20} color={colorValues.gray}/>

                        <Ionicons name="notifications-off" size={20} color={colorValues.gray}/>

                    </View>


                </View>

                <View style={{ flexDirection: 'column', flex:1,marginLeft:10 }}>

                    <Text style={{ flex: 1, fontSize: 18, fontWeight: 'bold', color: colorValues.appThemColor,marginBottom:5 }}>
                        {item.conv_name} </Text>

                    <Text style={{ flex: 1, fontSize: 14, color: colorValues.gray}}>
                        {item.lastmessage} </Text>

                </View>

            </Pressable>

        </View>
        </Pressable>
    );
}

export default ConversationItem;