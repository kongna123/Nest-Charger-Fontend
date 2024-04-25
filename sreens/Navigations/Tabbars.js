import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from 'react-test-renderer'
import Home from './Home';
import Stations from './Stations'
import map from './map'
const Tab = createBottomTabNavigator();
export default function Tabbars() {
  return (
    <Tab.Tabbars screenOptions ={{
        headderShown:false,
    }}>
    <Tab.Screen name='Home'
    component={Home}
    options={{
        tabBarlable:'Search',
        tabBarActiveTintColor:Colors.PRIMARY,
        tabBarIcon:({color,size})=>(
            <Ionicons name="ios-serch"
            size={size} color ={color} />
        )
    }}/>
    <Tab.Screen name='Home'
    component={Stations}/>
    <Tab.Screen name='Stations'
    component={map}/>
    </Tab.Tabbars>
)
}