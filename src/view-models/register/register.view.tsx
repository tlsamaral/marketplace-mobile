import type { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { AppInputController } from '../../shared/components/app-input-controller'
import type { useRegisterViewModel } from './use-register.view.model'

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  control,
  errors,
  onSubmit,
}) => {
  return (
    <View className="flex-1 items-center justify-center gap-4 p-4">
      <AppInputController
        name="name"
        control={control}
        errors={errors}
        placeholder="E-MAIL"
        leftIcon="mail-outline"
      />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  )
}
