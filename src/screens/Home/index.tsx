import React from 'react'
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { IconButton } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'

type RootStackParamList = {
  Login: undefined
  Home: undefined
  Avaliacao: undefined
  Assinatura: undefined
}

type Props = StackScreenProps<RootStackParamList, 'Home'>

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

const data = [
  {
    id: 1,
    nome: 'Candidato 1',
    status: 'Reprovado',
    assinado: false
  },
  {
    id: 2,
    nome: 'Candidato 2',
    status: 'Aguardando',
    assinado: true
  },
  {
    id: 3,
    nome: 'Candidato 3',
    status: 'Aguardando',
    assinado: false
  },
  {
    id: 4,
    nome: 'Candidato 4',
    status: 'Aguardando',
    assinado: true
  },
  {
    id: 5,
    nome: 'Candidato 5',
    status: 'Aguardando',
    assinado: false
  },
  {
    id: 6,
    nome: 'Candidato 2',
    status: 'Aguardando',
    assinado: true
  },
  {
    id: 7,
    nome: 'Candidato 3',
    status: 'Aguardando',
    assinado: false
  },
  {
    id: 8,
    nome: 'Candidato 4',
    status: 'Aguardando',
    assinado: true
  },
  {
    id: 9,
    nome: 'Candidato 5',
    status: 'Aguardando',
    assinado: false
  }
]

function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        style={styles.lista}
        renderItem={info => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              info.item.assinado
                ? navigation.navigate('Avaliacao')
                : navigation.navigate('Assinatura')
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
                onPress={() => navigation.navigate('Assinatura')}
              />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Home
