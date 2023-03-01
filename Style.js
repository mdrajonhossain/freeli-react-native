import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

box: {    
    width: '100%',
    height: '100%',
    backgroundColor: '#0d2150',
    alignSelf: 'center',    
    justifyContent:'center'
  },
  signup:{
  	color:'white',
  	fontFamily: 'work_sans',
  	fontSize:25,
  	textAlign:'center',
  	alignItems:'center'
  },
  under_signup:{
  	color:'white',
  	fontFamily: 'work_sans',
  	fontSize:15,
  	padding:13,
  	textAlign:'center',
  	alignItems:'center',  	
  },
  email_inputfeld:{
  	width: '95%',
  	height:50,
  	borderRadius:10,
  	color:'white',
  	borderWidth: 1,
  	borderColor: 'white',
  	paddingLeft:30,
  	color: 'white',	
  },
  main_input:{  	
  	marginLeft:15,
  	marginTop:50
  },
  email_lavel:{
  	color:'white',
  	textAlign:'left',
  	marginBottom:10,
  },
  signup_input_dis:{
  	padding:10,
  	
  	color:'white',
  	fontSize:12


  }
   
});

export { styles }