import React, { useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Button, TextInput, Snackbar } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'

type RootStackParamList = {
  Login: undefined
  Home: undefined
  Avaliacao: undefined
}

type Props = StackScreenProps<RootStackParamList, 'Login'>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF'
  },
  form: {
    height: 400,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 60
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

function Login({ navigation }: Props) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [visible, setVisible] = useState(false)

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          label="Email"
          mode="outlined"
          value={email}
          onChangeText={text => setEmail(text)}
          left={<TextInput.Icon name="account" />}
        />
        <TextInput
          style={styles.input}
          label="Senha"
          mode="outlined"
          secureTextEntry
          value={senha}
          onChangeText={text => setSenha(text)}
          left={<TextInput.Icon name="lock" />}
        />
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => {
            if (email && senha) {
              navigation.replace('Home')
            } else {
              setVisible(true)
            }
          }}
        >
          Entrar
        </Button>
      </View>
      <Snackbar
        duration={2000}
        visible={visible}
        onDismiss={() => setVisible(false)}
      >
        Usuario e senha precisam ser informados
      </Snackbar>
    </View>
  )
}

export default Login
