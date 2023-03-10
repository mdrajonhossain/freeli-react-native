import React, { useState } from 'react';
import { View, Text, Image, TextInput, FlatList, Pressable, TouchableOpacity } from 'react-native';
import StyleSheetJs from '../stylesheet/ChattingStyleSheet'
import colorValues from '../AppColor';
import MessageItemView from '../partials/MessageITem';
import * as convData from '../demoData/messageData.json';
import {Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const selectItemPos = [];

const TopbarWithOutSelect = ({navigation, setPopupDialg, popUpDialog}) => {
    return(
        <View style={StyleSheetJs.topBarStyle1}>
            {/* BackBtnDesign */}
            <View style={StyleSheetJs.barIconCenter}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Ionicons name="arrow-back" size={30} color={colorValues.appThemColor}/>
                </TouchableOpacity>
            </View>

            {/* nameViewDesign */}
            <View style={StyleSheetJs.topbarNameImg}>
                <TouchableOpacity>
                    <Image 
                        style={StyleSheetJs.topBarProfileImg}
                        source={require('../assert/images/demo_profile.png')}
                        
                    />
                </TouchableOpacity>
                
                 <View style={StyleSheetJs.topbarName}>
                    <TouchableOpacity >
                        <Text 
                            style={StyleSheetJs.topBarNameText}
                            >Jahirul Islam</Text>
                        <Text>online</Text>
                    </TouchableOpacity>
                     
                 </View>

            </View>
            <View style={{flex:3,flexDirection:'row'}}>
                
                <View style={StyleSheetJs.barIconCenter}>
                    <TouchableOpacity>
                        <Ionicons name="call" size={22} color={colorValues.appThemColor} />
                    </TouchableOpacity>
                </View>
                <View style={StyleSheetJs.barIconCenter}>
                    <TouchableOpacity>
                        <Ionicons name="videocam" size={22} color={colorValues.appThemColor} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={StyleSheetJs.barIconCenter}>
                    <MaterialIcons name="more-vert" size={30} color={colorValues.appThemColor} />
                </TouchableOpacity>
            </View>  
                      
        </View>
    );
}

const ChattingScreenTopBar = ({navigation, 
                               setPopupDialg, 
                               popUpDialog,
                               multiSelect,
                               selectItemPos,
                               setMultiSelect,
                               setDeletePopUpState,
                               searchTop,
                               setSearchTop,
                               emojyDialog,
                               setEmojyDialog}) => {
    return(
        <View>

                            <TopbarWithOutSelect  
                                navigation={navigation} 
                                setPopupDialg={setPopupDialg} 
                                popUpDialog={popUpDialog} />

        </View>
    );
    
}

const ChattingScreenBottomView = ( {setAttachPopUpState,attachPopUpState} ) => {
    const [messageText, setMessageText] = useState('');
    return(
        <View style={StyleSheetJs.chattingBottomMessageView}>

            <View style={StyleSheetJs.barIconCenter}>
                {/* <MaterialCommunityIcons name="message-lock-outline" size={30} color={colorValues.appThemColor} /> */}
            </View>
            <View style={StyleSheetJs.topbarNameImg}>
                <TextInput
                    style={StyleSheetJs.messageTextInputStyle}
                    placeholder="Message Jahirul Islam"
                    onChangeText={(val)=>{
                        setMessageText(val);
                    }}
                 />

            </View>
            <View style={{flex:3,flexDirection:'row'}}>
                <View style={StyleSheetJs.barIconCenter}>
                    {/* <Entypo name="emoji-happy" size={24} color={colorValues.appThemColor} /> */}
                </View>
                <View style={StyleSheetJs.barIconCenter}>
                {/* <Entypo name="attachment" size={24} color={colorValues.appThemColor}
                    onPress={()=>{
                        setAttachPopUpState(!attachPopUpState);
                    }} /> */}
                </View>
                <View style={StyleSheetJs.barIconCenter}>
                 {/* <Ionicons name="send" size={24} color={colorValues.appThemColor}
                    onPress={ () => {
                        console.log({messageText})
                    }} /> */}
                </View>
            </View>

        </View>
    );
}

const ChattingBodyView = ( {navigation,attachPopUpState,_setLongSelectItem,setVisiableUserPro,setSelectMsgData} ) => {
    var jsonObj = convData.default;
    var jsonArray = jsonObj.array;
    
    return(
        <View style = {{flex:1}}>
            <FlatList
            data={jsonArray}
            renderItem={ ({item, index}) => 
                <MessageItemView item={item} index={index} longPressHandeler={_setLongSelectItem} 
                    navigation={navigation} setVisiableUserPro={setVisiableUserPro} setSelectMsgData={setSelectMsgData} /> }
                keyExtractor={i => i.id}
            contentContainerStyle={{ flexGrow: 1 }}
        />
        {/* {attachPopUpState ? <AttachMentPopUp /> : <View></View>} */}
        

        </View>
    );
    

}



const ChattingScreen = ({navigation}) => {
    const [popUpDialog, setPopupDialg] = useState(false);
    const [deletePopUpState, setDeletePopUpState] = useState(false);
    const [attachPopUpState, setAttachPopUpState] = useState(false);
    const [multiSelect, setMultiSelect] = useState(false);
    const [searchTop, setSearchTop] = useState(false);
    const [emojyDialog, setEmojyDialog] = useState(false);
    const [visiableUserPro, setVisiableUserPro] = useState(false);
    const [selectMsgData, setSelectMsgData] = useState({})
    


    const _setLongSelectItem =(selectPos) =>{

        console.log("pos",selectPos);
        if(selectItemPos.length >0){
            var b = selectItemPos.includes(selectPos);
            if(b){
                console.log('positiontrue');
                const index = selectItemPos.indexOf(selectPos);
                console.log(index);
                selectItemPos.splice(index, 1);
                
            }else{
                console.log('positionfalse');
                selectItemPos.push(selectPos);
            }
        }else{
            console.log('positionfirst');
            selectItemPos.push(selectPos);
        }
        console.log({"selectItemList":selectItemPos});

        if(selectItemPos.length>0){
            setMultiSelect(true);
            setDeletePopUpState(true);
        }else{
            setMultiSelect(false);
            setDeletePopUpState(false);
        }
        console.log({"selectItemList1":selectItemPos});
    }

    return(
        <Provider>
            <View style={{flex:1}}>
                    <View>
                        <ChattingScreenTopBar navigation={navigation} setPopupDialg={setPopupDialg} popUpDialog={popUpDialog} 
                            multiSelect={multiSelect} selectItemPos={selectItemPos} setMultiSelect={setMultiSelect} setDeletePopUpState ={setDeletePopUpState}
                            searchTop={searchTop} setSearchTop={setSearchTop} emojyDialog={emojyDialog}
                            setEmojyDialog={setEmojyDialog} />
                    </View>
                    <View
                        style={{flex:1,backgroundColor:colorValues.white,flexDirection:'column-reverse'}} >
                            <ChattingScreenBottomView setAttachPopUpState={setAttachPopUpState} attachPopUpState={attachPopUpState} />
                            <ChattingBodyView navigation={navigation} attachPopUpState={attachPopUpState} _setLongSelectItem={_setLongSelectItem}
                               setVisiableUserPro={setVisiableUserPro} setSelectMsgData={setSelectMsgData} />
                            {/* {popUpDialog ? <ChattingMenuPopup navigation={navigation} setProfilePopup={setPopupDialg} 
                            deletePopUp={deletePopUpState}
                                setSearchTop={setSearchTop} setPopupDialg={setPopupDialg} /> :
                                 <Text style={{ display: 'none'}}></Text>} */}
                    </View>
                    <Portal>
                        <Dialog 
                            style={{backgroundColor: '#fff', alignItems: 'center'}}
                            visible={visiableUserPro} onDismiss={() => {
                                setVisiableUserPro(!visiableUserPro);
                                setSelectMsgData({});
                                }}>
                        
                            <Dialog.Content>
                               <View style={{flexDirection:'column',padding:5,alignItems:'center'}} >
                                    <Image style={StyleSheetJs.msgSenderDialogImg}
                                            source={require('../assert/images/demo_profile.png')} />
                                    <Text style={{fontSize: 20, margin: 5, fontWeight: 'bold', color: colorValues.appThemColor}} >
                                        {selectMsgData.name}
                                        </Text>
                                    <Text style={{fontSize: 16, margin: 5, fontWeight: 'bold', color: colorValues.appThemColor}}  >
                                        exampleemail@gmail.com
                                        </Text>
                                    <View style={{height:50,width:200,flexDirection:'row'}} >
                                        <Pressable style={StyleSheetJs.barIconCenter}>
                                            {/* <MaterialIcons name="message" size={30} color={colorValues.appThemColor} 
                                                onPress={() => {
                                                    console.log({"click": "message icon"});
                                                }} /> */}
                                        </Pressable>
                                        <Pressable style={StyleSheetJs.barIconCenter}
                                            onPress={() =>{
                                                console.log({"click": "audio call icon"});
                                            }} >
                                            {/* <Ionicons name="call" size={22} color={colorValues.appThemColor} /> */}
                                        </Pressable>
                                        <Pressable style={StyleSheetJs.barIconCenter}
                                            onPress={() =>{
                                                console.log({"click": "video call icon"});
                                            }} >
                                            {/* <Ionicons name="videocam" size={22} color={colorValues.appThemColor} /> */}
                                        </Pressable>
                                    </View>
                               </View>
                            </Dialog.Content>
                        </Dialog>
                </Portal>
            </View> 
        </Provider>       
    );
}

export default ChattingScreen;
 