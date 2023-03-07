import React, {useState} from 'react';
import { View, Image, Text, Dimensions, Pressable } from 'react-native';
import colorValues from '../AppColor';


const EmojyViewDesign = ( {item} )=>{
    var hasEmojy = item.has_emojy;

    if(hasEmojy){
        var emojyArray =item.emojy_data;
        const list = (emojy_data) => {
            return emojy_data.map((element,index) => {
                var value;
                switch(index) {
                    case 0:
                      value = element.joy;
                      if(value === 0){
                        return(<View key={index.toString()}></View>)
                      }else{
                      return(
                        <View key={index.toString()} style={{marginRight: 10, justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <Image
                                source={require('../assert/images/emojy/joy.png')}
                                style={{height:24,width:24}}
                            />
                            <Text style={{fontSize: 15, color: colorValues.black,marginLeft:2 }}>
                                {value}
                            </Text>
                        </View>
                      )
                    }
                    case 1:
                      value = element.sad;
                      if(value === 0){
                        return(<View key={index.toString()}></View>)
                      }else{
                      return(
                        <View key={index.toString()} style={{marginRight: 10, justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <Image
                            source={require('../assert/images/emojy/disappointe.png')}
                            style={{height:24,width:24}}
                        />
                            <Text style={{fontSize: 15, color: colorValues.black,marginLeft:2 }}>
                                {value}
                            </Text>
                        </View> 
                    )
                    }
                    case 2:
                      value = element.haha;
                      if(value === 0){
                        return(<View key={index.toString()}></View>)
                    }else{
                      return(
                        <View key={index.toString()} style={{marginRight: 10, justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <Image
                                source={require('../assert/images/emojy/grinning.png')}
                                style={{height:24,width:24}}
                            />
                            <Text style={{fontSize: 15, color: colorValues.black,marginLeft:2 }}>
                                {value}
                            </Text>
                        </View>
                       )
                    }
                    case 3:
                      value = element.love;
                      if(value === 0){
                        return(<View key={index.toString()}></View>)
                    }else{ 
                      return(
                        <View key={index.toString()} style={{marginRight: 10, justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <Image
                                source={require('../assert/images/emojy/heart.png')}
                                style={{height:22,width:24}}
                            />
                            <Text style={{fontSize: 15, color: colorValues.black,marginLeft:2 }}>
                                {value}
                            </Text>
                        </View>
                       )
                    }
                    case 4:
                      value = element.angry;
                      if(value === 0){
                        return(<View key={index.toString()}></View>)
                    }else{
                      return(
                        <View key={index.toString()} style={{marginRight: 10, justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <Image
                                source={require('../assert/images/emojy/rage.png')}
                                style={{height:24,width:24}}
                            />
                            <Text style={{fontSize: 15, color: colorValues.black,marginLeft:2 }}>
                                {value}
                            </Text>
                        </View>
                       )
                    }
                    case 5:
                      value = element.thumsup;
                      if(value === 0){
                        return(<View key={index.toString()}></View>)
                      }else{
                      return(
                        <View key={index.toString()} style={{marginRight: 10, justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <Image
                                source={require('../assert/images/emojy/thumbsup.png')}
                                style={{height:22,width:24}}
                            />
                            <Text style={{fontSize: 15, color: colorValues.black,marginLeft:2 }}>
                                {value}
                            </Text>
                        </View>
                       )
                    }
                    case 6:
                      value = element.thumsdown;
                      if(value === 0){
                        return(<View key={index.toString()}></View>)
                    }else{
                        return(
                            <View key={index.toString()} style={{marginRight: 10, justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                                <Image
                                    source={require('../assert/images/emojy/thumbsdown.png')}
                                    style={{height:22,width:24}}
                                />
                                <Text style={{fontSize: 15, color: colorValues.black,marginLeft:2 }}>
                                    {value}
                                </Text>
                            </View>
                        )
                    }
                    default:
                      return(<View></View>)
                    }
           });
        };
        return(
            <View
                style={{height:40, width:'100%',flexDirection:'row'}} >
                    {list(emojyArray)}
            </View>
        )
    }
    else{
        return(
            <View></View>
        )
    }
}
export default EmojyViewDesign;