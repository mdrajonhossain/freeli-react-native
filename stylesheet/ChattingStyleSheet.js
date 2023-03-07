import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
import colorValues from "../AppColor";


const win = Dimensions.get('window');
const imgH = ((win.height)/8)
const imgW = ((win.width)/4)
const sImgH = ((win.height)/4)
const sImgW = ((win.width)/2)


const chattingStylesSheet = StyleSheet.create({
    topBarStyle1:{
        height:60,
        backgroundColor:colorValues.asaHeader,
        flexDirection:"row",
    },
    barIconCenter:{
        //height:50,
        //width:40,
        //alignContent:"center",
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topBarProfileImg:{
        height:50,
        width:50,
        borderRadius:50,
        marginLeft:5,
        borderWidth:1,
        borderColor:colorValues.appThemColor
    },
    topbarNameImg:{
        flex:6,
        //backgroundColor:'coral',
        flexDirection:'row',
        alignItems:'center'
    },
    bottomBarTextInput:{
        flex:6,
        //backgroundColor:'coral',
        flexDirection:'row',
        alignItems:'center'
    },
    topbarName:{
        flex:1,
        marginLeft:8,
        flexDirection:'column'
    },
    topBarNameText:{
        fontSize:20,
        fontWeight:'bold',
        //fontFamily:'bold',
        color:colorValues.appThemColor
    },
    chattingBottomMessageView:{
        height:60,
        backgroundColor:colorValues.white,
        flexDirection:"row",
        borderRadius:10,
        borderColor:colorValues.asaColor,
        margin:1,
        borderWidth:1
    },
    messageTextInputStyle:{
        height:50,
        textAlign:"left",
        textAlignVertical:"center",
        fontSize:15,
        color:colorValues.black,
        paddingLeft:8,
        flex:1
    },
    messageItem: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 10,
        paddingBottom: 5,
       
      },
      messageItemSelect: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 10,
        paddingBottom: 5,
        backgroundColor: colorValues.coral ,
      },
      msgSenderImg:{
        height:40,
        width:40,
        borderRadius:50,
        marginLeft:5,
        borderWidth:1,
        borderColor:colorValues.appThemColor
    },
    msgSenderDialogImg:{
        height:100,
        width:100,
        borderRadius:50,
        borderWidth:1,
        borderColor:colorValues.appThemColor
    },
    messageNameTime:{
        flex:1,
        //backgroundColor:'red',
        marginLeft:8,
        flexDirection:'column'
    },
    otherFileParent:{
        height:90,
        width: '100%',
        padding:5,
        marginTop:5,
        borderColor:colorValues.asaColor,
        borderWidth:1,
        borderRadius:10,
        flexDirection:"row",
        maxWidth:300
    },
    chatSingleImgStyle:{
        height:sImgH,
        width:sImgW,
        marginTop:5,
        marginBottom:5,
        padding:3,
        borderColor:colorValues.asaColor,
        //borderWidth:1,
        borderRadius:20,
        },
    multipleImgMainView:{
        height:sImgH,
        width:sImgW,
        marginTop:5,
        marginBottom:5,
        padding:3,
        borderColor:colorValues.asaColor,
        //borderWidth:1,
        borderRadius:20,
        flexDirection:"column"
        },
    multiPleImgFirstRow:{
        flexDirection:"row",
        paddingTop:3,
        paddingLeft:3,
        paddingRight:3,
        flex:1,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginBottom:1
    },
    multiPleImgSecondtRow:{
        flexDirection:"row",
        paddingBottom:3,
        paddingLeft:3,
        flex:1,
        paddingRight:3,
        marginTop:1,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    multipleImg1:{
        flex:1,
        marginRight:1,
        marginBottom:1,
        borderTopLeftRadius:20
    },
    multipleImg2:{
        flex:1,
        marginLeft:1,
        marginBottom:1,
        borderTopRightRadius:20
    },
    multipleImg3:{
        flex:1,
        marginRight:1,
        marginTop:1,
        borderBottomLeftRadius:20
    },
    multipleImg4:{
        flex:1,
        marginLeft:1,
        marginTop:1,
        borderBottomRightRadius:20,
    },
    multipleImg4WithPos:{
        flex:1,
        marginLeft:1,
        marginTop:1,
        borderBottomRightRadius:20,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    attacmentPopUp:{
        margin:10,
        backgroundColor:colorValues.appThemColor,
        flex:1,
        borderRadius:10,
        borderColor:colorValues.asaColor,
        borderWidth:1,
        padding:5,
        flexDirection:"row"
    },
    attachmentItem:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    attachmentItemText:{
        fontSize:12,
        color:colorValues.white
    },
    emojyDialogMain:{
        flex:1,
        height:80,
        width:'100%',
        backgroundColor:'#ffffff',
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
        opacity:1.0 },
    emojyDialogMain2: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 4,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        flex:1,
        flexDirection:"row"
    },
    checklistParentView:{
        height:90,
        width: '100%',
        marginRight:40,
        padding:5,
        marginTop:5,
        borderColor:colorValues.asaColor,
        borderWidth:1,
        borderRadius:10,
        flexDirection:"column",
        maxWidth:300
    },
    checklistFullItemParent:{
        flex:1,
        margin:10,
        // borderRadius:10,
        // borderColor:colorValues.asaColor,
        // borderWidth:1,
        flexDirection:"column"
    },
    checklistTitemInputText:{
        borderColor:colorValues.asaColor,
        borderRadius:5,
        borderWidth:1,
        width:'100%',
        height:40,
        marginLeft:10,
        marginRight:10,
        alignItems:"center",
        paddingLeft:5,
    },
});

export default chattingStylesSheet;