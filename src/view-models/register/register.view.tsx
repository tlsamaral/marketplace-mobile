import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import type { FC } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { AppButton } from '../../shared/components/app-button'
import { AppInputController } from '../../shared/components/app-input-controller'
import { AuthFormHeader } from '../../shared/components/auth-form-header'
import { KeyboardContainer } from '../../shared/components/keyboard-container'
import type { useRegisterViewModel } from './use-register.view.model'

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  control,
  errors,
  onSubmit,
  handleSelectAvatar,
  avatarUri,
}) => {
  return (
    <KeyboardContainer>
      <ScrollView className="flex-1 p-[32px]">
        <AuthFormHeader
          title="Crie sua conta"
          subtitle="Informe os seus dados pessoais e de acesso"
        />

        <TouchableOpacity
          className="size-[120px] rounded-[12px] items-center justify-center bg-shape self-center mb-8"
          onPress={handleSelectAvatar}
        >
          {avatarUri ? (
            <Image
              className="size-full rounded-[12px]"
              resizeMode="cover"
              source={{ uri: avatarUri }}
            />
          ) : (
            <Ionicons name="cloud-upload-outline" size={24} color="black" />
          )}
        </TouchableOpacity>

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

        <AppButton className="mt-4" onPress={onSubmit}>
          Registrar
        </AppButton>

        <View className="flex-1 justify-end mt-10 pb-16">
          <Text className="text-base mb-4 text-gray-400">
            Já possui uma conta?
          </Text>

          <AppButton variant="outlined" onPress={() => router.push('/login')}>
            Login
          </AppButton>
        </View>
      </ScrollView>
    </KeyboardContainer>
  )
}
