import { Ionicons } from '@expo/vector-icons'
import Checkbox from 'expo-checkbox'
import type { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { AppButton } from '../../../../shared/components/app-button'
import { AppInput } from '../../../../shared/components/app-input'
import { colors } from '../../../../styles/colors'
import type { useFilterViewModel } from './use-filter.view.model'

export const FilterView: FC<ReturnType<typeof useFilterViewModel>> = ({
  categories,
  isLoading,
  handleCategoryToggle,
  handleValueMaxChange,
  handleValueMinChange,
  selectedCategories,
  handleApplyFilters,
  handleResetFilters,
}) => {
  return (
    <View>
      <View className="flex-row items-center justify-between p-4 px-6">
        <Text className="text-lg font-bold text-gray-900">
          Filtrar anúncios
        </Text>

        <TouchableOpacity>
          <Ionicons name="close" size={20} color={colors['purple-base']} />
        </TouchableOpacity>
      </View>

      <View className="p-4 px-6">
        <Text className="font-semibold text-base text-gray-400">VALOR </Text>
        <View className="flex-row gap-4 mb-4 w-[100%]">
          <View className="flex-1">
            <AppInput
              placeholder="De"
              keyboardType="numeric"
              className="w-[90%]"
              onChangeText={(value) => handleValueMinChange(+value)}
            />
          </View>
          <View className="flex-1">
            <AppInput
              placeholder="Até"
              keyboardType="numeric"
              className="w-[90%]"
              onChangeText={(value) => handleValueMaxChange(+value)}
            />
          </View>
        </View>

        <Text className="font-semibold text-base text-gray-400">CATEGORIA</Text>

        {isLoading ? (
          <Text>Carregando categorias...</Text>
        ) : (
          <View className="mb-6 gap-3">
            {categories?.map((category) => (
              <TouchableOpacity
                key={category.id}
                className="flex-row items-center py-2"
                onPress={() => handleCategoryToggle(category.id)}
              >
                <Checkbox
                  value={selectedCategories.includes(category.id)}
                  onValueChange={() => handleCategoryToggle(category.id)}
                  color={colors['purple-base']}
                  className="mr-3 rounded-full"
                />
                <Text className="text-base text-gray-400">{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View className="flex-row gap-3 mt-4 mb-6">
          <View className="flex-1">
            <AppButton variant="outlined" onPress={handleResetFilters}>
              Limpar filtro
            </AppButton>
          </View>

          <View className="flex-1">
            <AppButton onPress={handleApplyFilters}>Filtrar</AppButton>
          </View>
        </View>
      </View>
    </View>
  )
}
