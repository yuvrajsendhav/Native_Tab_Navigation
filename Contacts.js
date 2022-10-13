import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Contacts = () => {
  return (
    <View>
          <View>
          <Image style ={styles.contactimage} source={require('../src/image/contactus.webp')}/>
          </View>
        <TouchableOpacity>
          <Text style={styles.contacttext}>Contact Us</Text>
        </TouchableOpacity>
      </View>
  )
}

export default Contacts

const styles = StyleSheet.create({
    contactimage:{
        width:"100%",
        height:230
    },
    contacttext:{
        fontSize:30,
        color:'blue',
    }
})