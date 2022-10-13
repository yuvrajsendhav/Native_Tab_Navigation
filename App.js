import * as React from 'react';
import { Text, View, focused } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/Home';
import Service from './src/Service';
import About from './src/About';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'About') {
            iconName = focused ? 'account-details' : 'account-details';
          }
          else if (route.name === 'Service') {
            iconName = focused ? 'room-service' : 'room-service';
          }

          // You can return any component that you like here!
          return <Icons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'black',
      })}
      >
        <Tab.Screen name="Home" component={Home} />
        
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Service" component={Service} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
