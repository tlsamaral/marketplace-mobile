import type { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { AppInput } from '../../shared/components/app-input'
import type { useRegisterViewModel } from './use-register.view.model'

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  control,
  errors,
  onSubmit,
}) => {
  return (
    <View className="flex-1 items-center justify-center gap-4">
      <AppInput label="Name" />
      <AppInput label="Email" />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  )
}
