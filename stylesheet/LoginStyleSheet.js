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
      flexDirection: 'column',
    },
    errorMessage: {
      fontSize: 20,
      color: 'red',
      marginLeft: -80,
    },
    inputbox: {
      width: '100%',
      height: 50,
      borderRadius: 5,
      borderColor: '#023d67',
      backgroundColor: appColor.text_color_main_white,
      color: appColor.app_theme_color_main_dark,
      marginVertical: 10,
      paddingHorizontal: 10,
    },
    button: {
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
    textColor1: {
      color: appColor.text_color_main_white,
      fontSize: 22,
      width: '100%',
      textAlign: 'center',
      fontStyle: 'normal',
    },
    textColor2: {
      width: '100%',
      textAlign: 'center',
      color: appColor.text_color_main_white,
      fontSize: 12,
    },
  });
  
export default logInStyleSheet;