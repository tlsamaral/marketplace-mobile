import type { FC } from 'react'
import { Text, View } from 'react-native'
import type { useRegisterViewModel } from './use-register.view.model'

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  userData,
  setUserData,
}) => {
  return (
    <View>
      <Text>Register</Text>
    </View>
  )
}
