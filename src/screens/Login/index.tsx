import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 70,
    backgroundColor: '#FFF'
  },
  form: {
    height: 400,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '100%'
  },
  button: {
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          label="Email"
          mode="outlined"
          left={<TextInput.Icon name="account" />}
        />
        <TextInput
          style={styles.input}
          label="Senha"
          mode="outlined"
          left={<TextInput.Icon name="lock" />}
        />
      </View>
      <Button mode="contained" style={styles.button}>
        Entrar
      </Button>
    </View>
  )
}

export default Login
