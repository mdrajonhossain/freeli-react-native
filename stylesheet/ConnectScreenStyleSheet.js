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
        backgroundColor:appColor.app_theme_color_main_dark,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:"center"
      },
});


export default connectScreenStyleSheet;
