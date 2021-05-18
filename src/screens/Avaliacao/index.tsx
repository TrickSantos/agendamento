import React, { useState, useLayoutEffect, useEffect } from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native'
import { Checkbox, IconButton, Snackbar } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'

type RootStackParamList = {
  Login: undefined
  Home: undefined
  Avaliacao: undefined
}

type Props = StackScreenProps<RootStackParamList, 'Avaliacao'>

const itens = [
  { item: 'Cruzou os braços', valor: 1 },
  { item: 'Bocejou', valor: 1 },
  { item: 'Não se vestiu adequadamente', valor: 1 },
  { item: 'Demonstrou-se desconfortável durante a entrevista', valor: 1 },
  { item: 'Foi prolixo durante as respostas', valor: 1 },
  { item: 'Foi monossilábico durante as respostas', valor: 1 },
  { item: 'Falou mal do emprego anterior', valor: 1 },
  { item: 'Expôs sua vida pessoal em excesso', valor: 1 },
  { item: 'Apresentou dificuldade em articular suas respostas', valor: 1 },
  { item: 'Perguntou sobre salário no início da entrevista', valor: 1 },
  { item: 'Chegou até 15 minutos atrasado', valor: 2 },
  { item: 'Não fez pergunta sobre a vaga ao entrevistador', valor: 2 },
  { item: 'Não trouxe currículo impresso', valor: 2 },
  { item: 'Não tem conhecimento da língua espanhola', valor: 2 },
  { item: 'Estava desinformado sobre a vaga', valor: 2 },
  { item: 'Estava desinformado sobre a empresa', valor: 2 },
  { item: 'Chegou até 30 minutos atrasado', valor: 3 },
  { item: 'Cometeu erro de concordância verbal na entrevista', valor: 3 },
  { item: 'Não tem disponibilidade para viajar', valor: 3 },
  { item: 'Respondeu erroneamente a uma pergunta técnica', valor: 3 },
  { item: 'Chegou mais do que 30 minutos atrasado', valor: 4 },
  { item: 'Usou termo de baixo calão', valor: 4 },
  { item: 'Não tem conhecimento da língua inglesa', valor: 4 },
  { item: 'Saiu da entrevista antes do seu término', valor: 4 }
]

function Avaliacao({ navigation }: Props) {
  const [pontos, setPontos] = useState(0)
  const [visible, setVisible] = useState(false)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Text style={{ color: '#FFF' }}>Salvar</Text>
          <IconButton
            icon="content-save"
            color="#FFF"
            onPress={() => {
              navigation.replace('Home')
            }}
          />
        </View>
      )
    })
  }, [])

  useEffect(() => {
    if (pontos > 3) {
      setVisible(true)
    }
  }, [pontos])

  return (
    <View style={styles.container}>
      <View style={styles.pontuacao}>
        <Text>Faltas: {pontos > 3 ? 'Candidato Eliminado' : pontos}</Text>
      </View>
      <ScrollView style={styles.itens}>
        {itens.map(item => {
          const [checked, setChecked] = useState(false)
          return (
            <View style={styles.item} key={item.item}>
              <Text>{item.item}</Text>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                color="#193283"
                onPress={() => {
                  if (checked) {
                    setPontos(pontos - item.valor)
                    setChecked(false)
                  } else {
                    setPontos(pontos + item.valor)
                    setChecked(true)
                  }
                }}
              />
            </View>
          )
        })}
      </ScrollView>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={2000}
      >
        Candidato Eliminado
      </Snackbar>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  pontuacao: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  },
  itens: {
    flex: 1,
    padding: 10
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  }
})
export default Avaliacao
