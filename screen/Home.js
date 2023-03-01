import React from 'react';
import { View, Text, Button } from 'react-native';

 
const Home = ({navigation}) => {
 



  return (
    <>
      <View>   
      	<Text>Login</Text>
      	<Button
        title="Signup"
        onPress={() => navigation.navigate("signup")}
      />
      </View>
    </>
  );
};

export default Home;