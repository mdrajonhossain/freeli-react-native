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



const CallListItem = ({ item, index}) => {
    const navigation = useNavigation();

    return (
        <Pressable onPress={()=> navigation.navigate("chatScreen")}>
        <View  key={item.id} style={StyleSheetJs.conversationItem}>
            <Pressable>
                <Image style={StyleSheetJs.conversationImg}
                    source={{uri: item.conv_img}} >
                </Image>
            </Pressable>
            <Pressable style={StyleSheetJs.conversationNameTime}>

                <View style={{flexDirection:'column'}}>

                    <View style={{flexDirection:'row-reverse'}}>
                        <Ionicons name="call" size={20} color={colorValues.appThemColor}/>
                    </View>
                    <Text style={{ fontSize: 12, color: colorValues.gray, marginBottom:5 }}>{item.conv_date}</Text>

                </View>

                <View style={{ flexDirection: 'column', flex:1,marginLeft:15, marginTop:5 }}>
                    <Text 
                        style={{ flex: 1, fontSize: 18, fontWeight: 'bold', color: colorValues.appThemColor, }}>
                        {item.conv_name} 
                    </Text>
                    <Text style={{ display:'none', fontSize: 12, color: colorValues.gray, marginBottom:5 }}>{item.conv_date}</Text>

                </View>

            </Pressable>

        </View>
        </Pressable>
    );
}

export default CallListItem;