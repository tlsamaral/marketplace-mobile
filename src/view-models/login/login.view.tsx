import { router } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'
import { AuthFormHeader } from '../../shared/components/auth-form-header'

export const LoginView = () => {
  return (
    <View className="flex-1 items-center justify-center gap-4 p-4">
      <AuthFormHeader
        title="Acesse sua conta"
        subtitle="Informe seu e-mail e senha para entrar"
      />

      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text>Registro</Text>
      </TouchableOpacity>
    </View>
  )
}
