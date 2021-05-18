import React, { useRef } from 'react'
import { View } from 'react-native'
import SignatureScreen, {
  SignatureViewRef
} from 'react-native-signature-canvas'
import { StackScreenProps } from '@react-navigation/stack'

type RootStackParamList = {
  Login: undefined
  Home: undefined
  Avaliacao: undefined
  Assinatura: undefined
}

type Props = StackScreenProps<RootStackParamList, 'Assinatura'>

function Assinatura({ navigation }: Props) {
  const ref = useRef<SignatureViewRef>(null)
  return (
    <View style={{ flex: 1 }}>
      <SignatureScreen
        ref={ref}
        onOK={() => navigation.replace('Avaliacao')}
        descriptionText="Assinatura"
        clearText="Limpar"
        confirmText="Salvar"
      />
    </View>
  )
}

export default Assinatura
