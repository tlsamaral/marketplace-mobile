import { Ionicons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import { AppInput } from '../../../../shared/components/app-input'
import { useBottomSheetStore } from '../../../../shared/store/bottom-sheet-store'
import { colors } from '../../../../styles/colors'
import { Filter } from '../filter'

export function SearchInput() {
  const { open } = useBottomSheetStore()

  return (
    <View className="mb-3 mt-6">
      <Text className="text-2xl font-bold mt-6 mb-2">Explore produtos</Text>
      <View className="flex-row items-center gap-4">
        <View className="flex-1">
          <AppInput leftIcon="search" className="text-lg" />
        </View>

        <TouchableOpacity
          className="ml-5 mt-5 items-center justify-center rounded-xl border-[1px] size-[48px] border-purple-base"
          onPress={() => {
            open({
              content: <Filter />,
            })
          }}
        >
          <Ionicons
            name="filter-outline"
            size={24}
            color={colors['purple-base']}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
