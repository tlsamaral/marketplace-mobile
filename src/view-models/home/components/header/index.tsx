import { Ionicons } from '@expo/vector-icons'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useUserStore } from '../../../../shared/store/user-store'
import { colors } from '../../../../styles/colors'

export function HomeHeader() {
  const { user } = useUserStore()

  return (
    <View>
      <TouchableOpacity className="flex-row items-center gap-4">
        <View className="relative">
          {user?.avatarUrl ? (
            <Image
              source={{ uri: user?.avatarUrl }}
              className="size-[56px] rounded-[12px] border-shape border-[3px]"
            />
          ) : (
            <View className="size-[56px] rounded-[12px] bg-shape border-2 border-gray-200 items-center justify-center">
              <Ionicons
                name="person-outline"
                size={24}
                color={colors.grays[300]}
              />
            </View>
          )}
        </View>

        <View>
          <Text className="font-bold text-base">
            Olá, {user?.name.split(' ')[0] || 'Usuário'}!
          </Text>
          <View className="flex-row items-center gap-2">
            <Text className="color-purple-base font-bold text-sm">
              Ver perfil
            </Text>
            <Ionicons
              name="arrow-forward-outline"
              size={16}
              color={colors['purple-base']}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}
