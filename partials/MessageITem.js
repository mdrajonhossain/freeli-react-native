import React, {useState} from 'react';
import { View, Image, Text, Dimensions, Pressable } from 'react-native';
import StyleSheetJs from '../stylesheet/ChattingStyleSheet';
import colorValues from '../AppColor';
import EmojyViewDesign from './emojyViewDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';


const win = Dimensions.get('window');
const imgH = ((win.height) / 8)
const imgW = ((win.width) / 4)

const ReplyViewDesign = ( {item, navigation} ) =>{
    var re = item.has_reply;
    var replyCount = item.reply_count;
    var lastReplyName = item.last_reply_from;
    var [isReplySeen, setReplySeen] = useState(true);
        
    if (re === "false") {
        return(
            <View></View>
        );
    }
    else{
        let data = {
            "msgItem":item
        }
        return(
            <Pressable style={{flexDirection:'column',marginTop:8}}
                onPress={()=>{
                    console.log("reply click");
                }}
                >
                {isReplySeen ? 
                    <Text style={{
                        fontSize:15,
                        color:colorValues.blue
                    }}>Reply in thread({replyCount})</Text> : 
                    <Text style={{
                        fontSize:15,
                        color:colorValues.red
                    }}>Reply in thread({replyCount})</Text>}
                <Text style={{fontSize:12,color:colorValues.black}}>last reply from {lastReplyName}</Text>
            </Pressable>
        );
    }


}
const VideoFileView = ({ item }) => {
    var array = item.video_file;
    var videoFileSize = array.length;

    const list = () => {
        return array.map((element,index) => {
         return (
            <View key ={index.toString()} style={StyleSheetJs.otherFileParent} >
                    <Image
                        source={require('../assert/images/mp4.png')}
                        style={{alignItems: 'center', height: 70, width: 70, borderRadius: 10 }}
                    />
                    <View style={{ flex: 1, marginLeft: 8, flexDirection: 'column', justifyContent: 'center' }}>
                        <Text numberOfLines={3} ellipsizeMode='head' >
                            mji.jahirulislam505_new.mp4
                        </Text>
                        <Text>9 MB</Text>

                    </View>
                </View>
         );
       });
     };
    
     if (videoFileSize > 0) {
          return (
          <View>{list()}</View>
          );
    }
    else {
        return(
            <View></View>
        )
     }
 }
const AudioFileView = ({ item }) => {
    var array = item.audio_file;
    var audioFileSize = array.length;

    const list = () => {
        return array.map((element,index) => {
         return (
            <View key ={index.toString()} style={StyleSheetJs.otherFileParent} >
                    <Image
                        source={require('../assert/images/mp3.png')}
                        style={{ height: 80, width: 80, borderRadius: 10 }}
                    />
                    <View style={{ flex: 1, marginLeft: 8, flexDirection: 'column', justifyContent: 'center' }}>
                        <Text numberOfLines={3} ellipsizeMode='head' >
                            mji.jahirulislam505_new.mp3
                        </Text>
                        <Text>3 MB</Text>

                    </View>
                </View>
         );
       });
     };
    
     if (audioFileSize > 0) {
          return (
          <View>{list()}</View>
          );
    }
    else {
        return(
            <View></View>
        )
     }
}
const OtherFileView = ({ item }) => {
    var array = item.other_file;
    var otherFileSize = array.length;

    const list = () => {
        return array.map((element,index) => {
         return (
            <View key={index.toString()} style={StyleSheetJs.otherFileParent} >
               <Image
                   source={require('../assert/images/pdf.png')}
                   style={{alignItems: 'center', height: 70, width: 70, borderRadius: 10 }}
               />
               <View style={{ flex: 1, marginLeft: 8, flexDirection: 'column', justifyContent: 'center' }}>
                   <Text numberOfLines={3} ellipsizeMode='head' >
                       mji.jahirulislam505@demo_profile.pdf
                   </Text>
                   <Text>100 KB</Text>

               </View>
            </View>
         );
       });
     };
    
     if (otherFileSize > 0) {
          return (
          <View>{list()}</View>
          );
    }
    else {
        return(
            <View></View>
        )
     }
}

const ImageFileView = ({ item }) => {

    var attachImg = item.attach_img;
    var arraySize = attachImg.length;
    if(arraySize>0){
        if(arraySize === 4){
            var imgListView = [];
            var imgStr = attachImg[0];
            var imgStr1 = attachImg[1];
            var imgStr2 = attachImg[2];
            var imgStr3 = attachImg[3];
            imgListView.push(
                <View key={'a'} style={StyleSheetJs.chatSingleImgStyle} >
                    <View key={'aa'} style={StyleSheetJs.multiPleImgFirstRow} >
                        <Image
                            source={{ uri: imgStr }}
                            style={StyleSheetJs.multipleImg1}
                        />
                        <Image
                            source={{ uri: imgStr1 }}
                            style={StyleSheetJs.multipleImg2}
                        />
                    </View>
                    <View key={'ab'} style={StyleSheetJs.multiPleImgSecondtRow} >
                        <Image
                            source={{ uri: imgStr2 }}
                            style={StyleSheetJs.multipleImg3}
                        />
                        <Image
                            source={{ uri: imgStr3 }}
                            style={StyleSheetJs.multipleImg4}
                        />
                    </View>
                </View>
            )
            return (imgListView);
        }
        else if (arraySize >4) {
            var imgListView =[];
            var extImg = arraySize - 4;
            var imgStr = attachImg[0];
            var imgStr1 = attachImg[1];
            var imgStr2 = attachImg[2];
            var imgStr3 = attachImg[3];
            imgListView.push(
                <View key={'a'} style={StyleSheetJs.chatSingleImgStyle} >
                    <View key ={'aa'} style={StyleSheetJs.multiPleImgFirstRow} >
                        <Image
                            source={{ uri: imgStr }}
                            style={StyleSheetJs.multipleImg1}
                        />
                        <Image
                            source={{ uri: imgStr1 }}
                            style={StyleSheetJs.multipleImg2}
                        />
                    </View>
                    <View key = {'ab'} style={StyleSheetJs.multiPleImgSecondtRow} >
                        <Image
                            source={{ uri: imgStr2 }}
                            style={StyleSheetJs.multipleImg3}
                        />
                        <View style={StyleSheetJs.multipleImg4}>
                            <Image
                                source={{ uri: imgStr3 }}
                                style={StyleSheetJs.multipleImg4WithPos}
                            />
                            <View style={
                                {
                                    opacity: 0.6, backgroundColor: colorValues.black, width: '100%', height: '100%',
                                    borderBottomRightRadius: 20, justifyContent: 'center', alignItems: 'center'
                                }} >

                                <Text
                                    style={
                                        {
                                            fontSize: 20, fontWeight: 'bold', color: colorValues.white,
                                        }} > {extImg}+</Text>

                            </View>

                        </View>

                    </View>
                </View>
            )
        return (imgListView)
        }
        else{
            
                return attachImg.map((element,index) => {
                 return (
                    <View key={index.toString()} style={StyleSheetJs.chatSingleImgStyle} >
                       <View>
                        <Image
                            source={{ uri: element }}
                            style={StyleSheetJs.chatSingleImgStyle}
                        />
                     </View>
                    </View>
                 );
            });
        }
    }else{
        return(
            <View></View>
        )
    }
}

const AdditionFileView = ({ item }) => {
    return (
        <View>
            <ImageFileView item={item} />
            <OtherFileView item={item} />
            <AudioFileView item={item} />
            <VideoFileView item={item} />
        </View>


    )

}

const MessageItemView = ({ item, index, longPressHandeler, navigation, setVisiableUserPro,setSelectMsgData }) => {
    var hasFlaged = item.has_flaged;
    var msgType = item.messageType;
    var isChecklist = false;
    var isText = false;
    var isCall = false;

    switch(msgType){
        case "text":
            isText=true;
            isChecklist=false;
            isCall=false
            break;
        case "call":
            isText=false;
            isChecklist=false;
            isCall=true
            break;
        default:
            isText=true;
            isChecklist=false;
            isCall=false
            break;
    }

    return (
        <View  key={item.id} style={StyleSheetJs.messageItem}>
            <Pressable
                onPress={() => {
                    setVisiableUserPro(true);
                    setSelectMsgData(item);
                    }} >
                <Image style={StyleSheetJs.msgSenderImg}
                    source={require('../assert/images/demo_profile.png')} />
            </Pressable>
            <Pressable style={StyleSheetJs.messageNameTime}
                onLongPress={()=>{longPressHandeler(index)}} >
                <View style={{ flexDirection: 'row-reverse' }}>
                    <View style={{
                        marginRight: 5, marginLeft: 5, justifyContent: 'center',
                        alignItems: 'center', flexDirection: 'row'
                    }} >
                        {hasFlaged ? 
                        <View></View> : <View></View>}
                        <Text style={{ fontSize: 12, color: colorValues.gray }}> {item.last_updateAt}</Text>
                    </View>

                    <Text style={{ flex: 1, fontSize: 16, marginLeft: 5, fontWeight: 'bold', color: colorValues.appThemColor }}>
                        {item.name} </Text>
                </View>
                <View style={{ flex: 1 }}>

                    {isChecklist ? <View></View> : <View>
                        {isCall ? <View>
                            <Text style={{ fontSize: 15, color: colorValues.black }}> calling </Text>
                        </View> : <View>
                            <Text style={{ fontSize: 15, color: colorValues.black }}> {item.messageBody} </Text>
                        </View> }
                    </View> }

                    
                </View>

                {/* other_message, audio and video Show View */}
                <View>
                    {isCall ? <View></View> : <View>
                        {isChecklist ? <CheckListItemView item={item} navigation={navigation} /> : <AdditionFileView item={item} /> }
                    </View> }
                    <ReplyViewDesign item={item} navigation={navigation} />
                    <EmojyViewDesign item={item} />
                
                </View>


            </Pressable>

        </View>
    );
}

export default MessageItemView;