import {StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <View style={{backgroundColor:'gray',height:'100%'}}>
        <View>
        <Image style ={styles.aboutimage} source={require('../src/image/aboutimg.jpg')}/>
        </View>
      <TouchableOpacity>
        <Text style={styles.abouttext}>This is About Us</Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
    aboutimage:{
        width:"100%",
        height:300
    },
    abouttext:{
        fontSize:30,
        color:'blue',
    }
});
