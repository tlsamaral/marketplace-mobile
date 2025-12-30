import { router } from 'expo-router'
import type { FC } from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import { AppInputController } from '../../shared/components/app-input-controller'
import { AuthFormHeader } from '../../shared/components/auth-form-header'
import { KeyboardContainer } from '../../shared/components/keyboard-container'
import type { useRegisterViewModel } from './use-register.view.model'

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  control,
  errors,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <ScrollView className="flex-1 p-[32px]">
        <AuthFormHeader
          title="Crie sua conta"
          subtitle="Informe os seus dados pessoais e de acesso"
        />

        <AppInputController
          name="name"
          control={control}
          errors={errors}
          label="NOME"
          leftIcon="person-outline"
          placeholder="Seu nome completo"
        />

        <AppInputController
          name="phone"
          control={control}
          errors={errors}
          label="TELEFONE"
          leftIcon="call-outline"
          placeholder="(00) 00000-0000"
        />

        <Text className="text-base mt-6 font-bold text-gray-500">Acesso</Text>

        <AppInputController
          name="email"
          control={control}
          errors={errors}
          label="E-MAIL"
          leftIcon="mail-outline"
          placeholder="mail@example.com.br"
        />

        <AppInputController
          name="password"
          control={control}
          errors={errors}
          label="SENHA"
          leftIcon="lock-closed-outline"
          placeholder="Sua senha"
          secureTextEntry
        />

        <AppInputController
          name="confirmPassword"
          control={control}
          errors={errors}
          label="CONFIRMAR SENHA"
          leftIcon="lock-closed-outline"
          placeholder="Confirme sua senha"
          secureTextEntry
        />

        <TouchableOpacity onPress={onSubmit}>
          <Text>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardContainer>
  )
}
