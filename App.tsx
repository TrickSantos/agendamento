import 'react-native-gesture-handler'
import React from 'react'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import App from './src'

const theme = {
  ...DefaultTheme,
  roudness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#193283'
  }
}

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  )
}
