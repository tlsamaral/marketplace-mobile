import { Ionicons } from '@expo/vector-icons'
import type { FC } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { buildImageUrl } from '../../../../shared/helpers/build-image-url'
import type { GetProductDetailInterface } from '../../../../shared/interfaces/http/product-details'
import { colors } from '../../../../styles/colors'

interface HeaderParams {
  productDetails: GetProductDetailInterface
}

export const Header: FC<HeaderParams> = ({ productDetails }) => {
  return (
    <>
      <View className="pb-5 items-center">
        <TouchableOpacity className="w-full justify-start flex-row items-center gap-1">
          <Ionicons name="arrow-back" size={24} color={colors['purple-base']} />
          <Text className="text-base text-purple-base">Voltar</Text>
        </TouchableOpacity>
      </View>

      <View className="w-full rounded-lg shadow-xl shadow-gray-500/30 bg-white">
        <Image
          source={{ uri: buildImageUrl(productDetails.photo) }}
          className="w-full rounded-lg h-[192px]"
        />

        <View className="absolute top-0 right-0 flex-row items-center bg-blue-light px-2 py-1 rounded-bl-lg rounded-tr-lg">
          <Ionicons name="star" size={16} colors={colors['blue-base']} />
          <Text className="text-sm font-semibold ml-1 text-gray-800">
            {productDetails.averageRating.toFixed(1)}
          </Text>

          <Text className="text-[10px] font-semibold ml-1 text-gray-800">
            / 5
          </Text>
        </View>
      </View>
    </>
  )
}
