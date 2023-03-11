import { StyleSheet } from "react-native";
import appColor from "../AppColor";

const connectScreenStyleSheet = StyleSheet.create({
    screenHeader:{
        width:'100%',
        height: 50,
        backgroundColor:appColor.app_theme_color_main_dark,
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:"row",
        paddingLeft:10,
        paddingRight:5

    },
    tabBarStyles:{
        width:'100%',
        height: 50,
        backgroundColor:appColor.app_theme_color_main_dark,
    },
    headerImageStyle:{
        height:'100%',
        width:60
    },
    headerRighIconViewStyle:{
        width:'100%',
        height:'100%',
        flexDirection:"row-reverse",
        flex:1,
        paddingLeft:10,
        justifyContent:"flex-start",
        alignItems:"center"
    },
    thread_message: {
        height:50,
        width:'100%',
        backgroundColor:appColor.app_thread_bg_color,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:"center"
      },
      conversationItem: {
        width:'100%',
        height:70,
        flexDirection: "row",
        flexWrap: "wrap",
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent:"flex-start",
        alignItems:"center",
        paddingTop: 10,
        paddingBottom: 5,
       
      },
      conversationNameTime:{
        flex:1,
        //backgroundColor:'red',
        marginLeft:8,
        flexDirection:"row-reverse"
    },
    conversationImg:{
        height:40,
        width:40,
        borderRadius:50,
        marginLeft:5,
        borderWidth:1,
        borderColor:appColor.appThemColor
    },
    circleBgCounter:{
        height:25,
        width:25,
        borderRadius:50,
        marginRight:5,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:appColor.app_bg_color_purple
    },
});


export default connectScreenStyleSheet;
