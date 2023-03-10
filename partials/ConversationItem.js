import React, {useState} from 'react';
import { View, Image, Text, Dimensions, Pressable } from 'react-native';
import StyleSheetJs from '../stylesheet/ChattingStyleSheet';
import colorValues from '../AppColor';
import EmojyViewDesign from './emojyViewDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';


const win = Dimensions.get('window');
const imgH = ((win.height) / 8)
const imgW = ((win.width) / 4)


const ConversationItem = ({ item, index, navigation}) => {
    

    return (
        <View  key={item.id} style={StyleSheetJs.messageItem}>
            <Pressable>
                <Image style={StyleSheetJs.msgSenderImg}
                    source={require('../assert/images/demo_profile.png')} />
            </Pressable>
            <Pressable style={StyleSheetJs.messageNameTime}
                >
                <View style={{ flexDirection: 'row-reverse' }}>
                    <View style={{
                        marginRight: 5, marginLeft: 5, justifyContent: 'center',
                        alignItems: 'center', flexDirection: 'row'
                    }} >
                        <Text style={{ fontSize: 12, color: colorValues.gray }}>11/5/2023</Text>
                    </View>

                    <Text style={{ flex: 1, fontSize: 16, marginLeft: 5, fontWeight: 'bold', color: colorValues.appThemColor }}>
                        {item.conv_name} </Text>
                </View>

            </Pressable>

        </View>
    );
}

export default ConversationItem;