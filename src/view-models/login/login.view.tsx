import { router } from 'expo-router'
import type { FC } from 'react'
import { Text, View } from 'react-native'
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

        <AppButton
          className="mt-4"
          rightIcon="arrow-forward"
          onPress={onSubmit}
        >
          Login
        </AppButton>

        <View className="flex-1 justify-end mt-10 pb-16">
          <Text className="text-base mb-4 text-gray-400">
            Não tem uma conta?
          </Text>
          <AppButton
            variant="outlined"
            rightIcon="arrow-forward"
            onPress={() => router.push('/register')}
          >
            Registro
          </AppButton>
        </View>
      </View>
    </KeyboardContainer>
  )
}
