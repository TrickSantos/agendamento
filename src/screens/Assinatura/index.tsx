import React, { useRef } from 'react'
import { View } from 'react-native'
import SignatureScreen, {
  SignatureViewRef
} from 'react-native-signature-canvas'
import { StackScreenProps } from '@react-navigation/stack'
import api from '../../services/api'

type RootStackParamList = {
  Login: undefined
  Home: undefined
  Avaliacao: { id: number }
  Assinatura: { id: number }
}

type Props = StackScreenProps<RootStackParamList, 'Assinatura'>

function Assinatura({ navigation, route }: Props) {
  const ref = useRef<SignatureViewRef>(null)
  const { id } = route.params
  return (
    <View style={{ flex: 1 }}>
      <SignatureScreen
        ref={ref}
        onOK={async () => {
          await api.put(`/candidatos/${id}`, { assinado: true }).then(() =>
            navigation.replace('Avaliacao', {
              id
            })
          )
        }}
        descriptionText="Assinatura"
        clearText="Limpar"
        confirmText="Salvar"
      />
    </View>
  )
}

export default Assinatura
