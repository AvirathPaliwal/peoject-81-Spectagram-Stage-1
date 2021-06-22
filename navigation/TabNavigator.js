import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';
import { createPortal } from 'react-dom';

const Tab = createBottomTabNavigator();
const ButtomTabNavigator = ()=>{
    return(    
        <Tab.Navigator
        screenOptions = { ( {route }) =>  ({
          tabBarIcon : ({ focused , color ,size}) =>{
            let iconName;
            if( route.name === "Feed"){
                iconName = focused ? 'camera' : 'camera-outline'
            }
            else if(route.name === "Post"){
              iconName = focused ? 'cloud-upload' : 'cloud-upload-outline'
            }
            return <Ionicons name = { iconName} size = {size} color={color}/>
          },
        })}
        tabBarOptions = {{
          activeTintColor : 'blue',
          inactiveTintColor : 'gray'
        }}
        >
          <Tab.Screen name = "Feed" component = {Feed}/>
          <Tab.Screen name = "Post" component = {CreatePost}/>
        </Tab.Navigator>
    )
}

export default ButtomTabNavigator