import {StyleSheet, Text,  View, Image} from 'react-native';
import React from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Icons from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'cyan'}}>
      <View>
        <Image
          style={styles.homeimage}
          source={require('../src/image/home.jpg')}
        />
        
      </View>
      <View style={{flexDirection: 'row'}}>
        <Pressable
          style={styles.navbar1}
          onPress={() => navigation.navigate('About')}>
          <Text style={styles.navtxt1}>About us</Text>
        </Pressable>
        <Pressable
          style={styles.navbar2}
          onPress={() => navigation.navigate('Service')}>
          <Text style={styles.navtxt2}>Services</Text>
        </Pressable>
      </View>
      <Text style={styles.header}>This is Home Page</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeimage: {
    width: '100%',
    height: 300,
  },
  header: {
    color: 'purple',
    fontSize: 29,
    marginTop: 50,
    textAlign: 'center',
  },
  navbar1: {
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 50,
    backgroundColor: 'gray',
    width: 100,
    height: 40,
    padding: 7,
    fontFamily: 'bold',
    borderRadius: 5,
  },
  navtxt1: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'bold',
  },
  navbar2: {
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 90,
    backgroundColor: 'gray',
    width: 100,
    height: 40,
    padding: 7,
    fontFamily: 'bold',
    borderRadius: 5,
  },
  navtxt2: {
    fontSize: 20,
    fontFamily: 'bold',
    color: 'white',
  },
});
