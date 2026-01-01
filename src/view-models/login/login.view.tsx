import { router } from 'expo-router'
import type { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { AppButton } from '../../shared/components/app-button'
import { AppInputController } from '../../shared/components/app-input-controller'
import { AuthFormHeader } from '../../shared/components/auth-form-header'
import { KeyboardContainer } from '../../shared/components/keyboard-container'
import type { useLoginViewModel } from './use-login-view.model'

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
  control,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <View className="flex-1 items-center justify-center p-[32px]">
        <AuthFormHeader
          title="Acesse sua conta"
          subtitle="Informe seu e-mail e senha para entrar"
        />

        <AppInputController
          control={control}
          name="email"
          leftIcon="mail-outline"
          placeholder="mail@example.com.br"
          label="E-MAIL"
        />

        <AppInputController
          control={control}
          name="password"
          leftIcon="lock-closed-outline"
          label="SENHA"
          placeholder="Sua senha"
          secureTextEntry
        />

        <TouchableOpacity onPress={onSubmit} className="mb-4">
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text>Registro</Text>
        </TouchableOpacity>

        <AppButton rightIcon="arrow-forward" variant="outlined">
          Login
        </AppButton>
      </View>
    </KeyboardContainer>
  )
}
