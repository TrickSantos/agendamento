import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './screens/Login'
import Home from './screens/Home'

const AppStack = createStackNavigator()

const Routes: React.FC = () => (
  <AppStack.Navigator initialRouteName="Home">
    <AppStack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false
      }}
    />
    <AppStack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Candidatos',
        headerShown: true,
        headerTintColor: '#FFF',
        headerStyle: {
          backgroundColor: '#193283'
        }
      }}
    />
  </AppStack.Navigator>
)

export default Routes
