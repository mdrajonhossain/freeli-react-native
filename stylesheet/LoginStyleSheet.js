import { StyleSheet } from 'react-native';

import appColor from '../AppColor';

const logInStyleSheet =StyleSheet.create({
    container: {
      backgroundColor: appColor.app_theme_color_main_light,
      flex: 1,
      width:'100%',
      height:'100%',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop:50,
      flexDirection: 'column',
    },
    errorMessage: {
      fontSize: 20,
      color: 'red',
      marginLeft: -80,
    },
    inputboxLayout: {
      width: '100%',
      height: 50,
      borderRadius: 5,
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center',
      borderColor: appColor.app_theme_border_color,
      borderWidth: 1,
      backgroundColor: appColor.app_transparent_color,
      marginVertical: 10,
      paddingHorizontal: 10,
    },
    signInButton: {
      width: '100%',
      height: 50,
      borderRadius: 5,
      marginTop: 50,
      justifyContent: 'center',
      backgroundColor: appColor.app_theme_color_main_dark,
    },
    buttonText: {
      color: appColor.text_color_main_white,
      fontSize: 20,
      textAlign: 'center',
    },
    textBlueLight: {
      color: appColor.text_color_main_blue_light,
      fontSize: 16
    },
    welcomeTitleColor: {
      color: appColor.text_color_main_white,
      fontSize: 22,
      width: '100%',
      textAlign: 'center',
      fontStyle: 'normal',
    },
    welcomeMsgColor: {
      width: '100%',
      textAlign: 'center',
      color: appColor.text_color_main_blue,
      fontSize: 12,
    },
    defaultMsgColor: {
      textAlign: 'center',
      color: appColor.text_color_main_white,
      fontSize: 12,
    },
    inputBox:{
      flex:1,
      paddingLeft:10,
      paddingRight:5,
      width: '100%',
    }
  });
  
export default logInStyleSheet;