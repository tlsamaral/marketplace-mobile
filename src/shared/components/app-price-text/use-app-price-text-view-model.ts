export const useAppPriceTextViewModel = (value: number) => {
  const formatPrice = () => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  const formattedPrice = String(formatPrice())
  const parts = formattedPrice.split('\u00A8')
  const currencySimbol = parts[0]
  const valueText = parts.slice(1).join('\u00A8')

  return {
    formatPrice,
    currencySimbol,
    valueText,
    value,
  }
}
