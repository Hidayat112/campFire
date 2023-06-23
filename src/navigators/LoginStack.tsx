import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login/Login'
import Password from '../screens/Login/Password'
import forgotPassword from '../screens/Login/forgotPassword'
import ForgotPassword from '../screens/Login/forgotPassword'
import Congrats from '../screens/Login/congrats'

const LoginStack = createStackNavigator()
export default function() {
  return (
      <LoginStack.Navigator initialRouteName='Login' screenOptions={{
        headerShown: false 
      }}>         
          <LoginStack.Screen name="Login" component={Login} />
          <LoginStack.Screen name="Password" component={Password} />
      <LoginStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <LoginStack.Screen name='congrats' component={Congrats}/>
          {/* forgotPassword */}
    </LoginStack.Navigator>
  )
}

const styles = StyleSheet.create({})