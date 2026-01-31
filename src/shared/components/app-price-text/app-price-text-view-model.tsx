import type { FC } from 'react'
import { Text, View } from 'react-native'
import type { useAppPriceTextViewModel } from './use-app-price-text-view-model'

export const AppPriceTextView: FC<
  ReturnType<typeof useAppPriceTextViewModel> & {
    classNameCurrency?: string
    classNameValue?: string
  }
> = ({ currencySimbol, valueText, classNameCurrency, classNameValue }) => {
  return (
    <View className="flex-row items-baseline">
      <Text className={classNameCurrency ?? 'text-sm text-gray-800'}>
        {currencySimbol}
      </Text>
      <Text className={classNameValue ?? 'text-2xl font-bold text-gray-800'}>
        {valueText}
      </Text>
    </View>
  )
}
