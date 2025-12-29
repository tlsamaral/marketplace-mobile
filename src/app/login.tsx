import { View } from 'react-native'
import { LoginView } from '../view-models/login/login.view'

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center">
      <LoginView />
    </View>
  )
}
