import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Service = () => { 
    return (
      <View>
          <View>
          <Image style ={styles.serviceimage} source={require('../src/image/serviceimg.jpg')}/>
          </View>
        <TouchableOpacity>
          <Text style={styles.servicetext}>Our Services</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Service;
  
  const styles = StyleSheet.create({
    serviceimage:{
          width:"100%",
          height:230
      },
      servicetext:{
          fontSize:30,
          color:'blue',
      }
  });