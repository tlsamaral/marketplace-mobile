import { router } from 'expo-router'
import type { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { AppInputController } from '../../shared/components/app-input-controller'
import { AuthFormHeader } from '../../shared/components/auth-form-header'
import type { useRegisterViewModel } from './use-register.view.model'

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  control,
  errors,
  onSubmit,
}) => {
  return (
    <View className="flex-1 items-center justify-center gap-4 p-4">
      <AuthFormHeader
        title="Crie sua conta"
        subtitle="Informe os seus dados pessoais e de acesso"
      />

      <AppInputController
        name="name"
        control={control}
        errors={errors}
        placeholder="E-MAIL"
        leftIcon="mail-outline"
      />

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}
