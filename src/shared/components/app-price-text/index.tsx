import { AppPriceTextView } from './app-price-text-view-model'
import { useAppPriceTextViewModel } from './use-app-price-text-view-model'

interface AppPriceTextProps {
  classNameCurrency?: string
  classNameValue?: string
  value: number
}

export const AppPriceText = ({
  classNameCurrency,
  classNameValue,
  value,
}: AppPriceTextProps) => {
  const viewModel = useAppPriceTextViewModel(value)

  return (
    <AppPriceTextView
      {...viewModel}
      classNameCurrency={classNameCurrency}
      classNameValue={classNameValue}
    />
  )
}
