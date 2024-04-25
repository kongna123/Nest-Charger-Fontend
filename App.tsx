import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenStackHeaderSearchBarView } from 'react-native-screens';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Login from './sreens/Login';
import Home from './sreens/Home';
import Forgot_Password from './sreens/Forgetpassword';
import Register from './sreens/Register';
import Tabbars from './sreens/Navigations/Tabbars'
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Forgetpassword" component={Forgot_Password} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App