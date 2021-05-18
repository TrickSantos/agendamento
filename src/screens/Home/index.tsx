import React, { useEffect, useState } from 'react'
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { IconButton, Snackbar } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import api from '../../services/api'

type RootStackParamList = {
  Login: undefined
  Home: undefined
  Avaliacao: {
    id: number
  }
  Assinatura: {
    id: number
  }
}

type Props = StackScreenProps<RootStackParamList, 'Home'>

interface IData {
  id: number
  nome: string
  status: string
  assinado: boolean
}

function Home({ navigation }: Props) {
  const [candidatos, setCandidatos] = useState([] as IData[])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    navigation.addListener('focus', async () => {
      await api
        .get('/candidatos')
        .then(({ data }) => {
          setCandidatos(data)
        })
        .catch(e => {
          console.log(e)
        })
    })
  }, [])

  useEffect(() => {
    async function Load() {
      await api
        .get('/candidatos')
        .then(({ data }) => {
          setCandidatos(data)
        })
        .catch(e => {
          console.log(e)
        })
    }
    Load()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={candidatos}
        keyExtractor={item => item.id.toString()}
        style={styles.lista}
        renderItem={info => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              if (info.item.status === 'Aguardando') {
                info.item.assinado
                  ? navigation.navigate('Avaliacao', {
                      id: info.item.id
                    })
                  : navigation.navigate('Assinatura', {
                      id: info.item.id
                    })
              } else {
                setVisible(true)
              }
            }}
          >
            <View style={styles.itemInfo}>
              <Text>{info.item.nome}</Text>
              <Text
                style={{
                  color: info.item.status !== 'Aguardando' ? '#d10d0d' : '#000'
                }}
              >
                {info.item.status}
              </Text>
            </View>
            {!info.item.assinado && (
              <IconButton
                icon="pen"
                onPress={() =>
                  navigation.navigate('Assinatura', {
                    id: info.item.id
                  })
                }
              />
            )}
          </TouchableOpacity>
        )}
      />
      <Snackbar
        visible={visible}
        duration={2000}
        onDismiss={() => setVisible(false)}
      >
        Este candidato já terminou sua avaliação
      </Snackbar>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  lista: {
    width: '100%'
  },
  item: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#595959',
    height: 80
  },
  itemInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

export default Home
