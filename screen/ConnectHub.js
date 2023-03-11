import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';
import styles from '../stylesheet/LoginStyleSheet';
import { useState, useEffect } from 'react';
import appStr from '../AppDefaultStr';
import appColor from '../AppColor';
import Entypo from 'react-native-vector-icons/Entypo'
import { ToastAndroid } from 'react-native';



const ConnectHub = () => {
    return (
        <View>
            <View style={{ marginTop:80, width: '100%', padding:15, flexDirection: 'column' }}>

                <TouchableOpacity style={styles.demoButton}>
                    <Text style={styles.buttonText}>Task dashboard</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.demoButton}>
                    <Text style={styles.buttonText}>File hub</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.demoButton}>
                    <Text style={styles.buttonText}>All flagged messages</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.demoButton}>
                    <Text style={styles.buttonText}>All private messages</Text>
                </TouchableOpacity>

            </View>


        </View>
    );
}

export default ConnectHub;