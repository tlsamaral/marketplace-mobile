import { router } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

export default function App() {
  return (
    <View>
      <Text>Ola mundo 2</Text>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}
