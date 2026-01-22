import type { ProductInterface } from '../../../../shared/interfaces/product'

interface UseProductCardViewModelProps {
  product: ProductInterface
}

export const useProductCardViewModel = ({
  product,
}: UseProductCardViewModelProps) => {
  const formatProductName = (name: string) => {
    if (name.length >= 17) {
      return `${name.slice(0, 17)}...`
    }

    return name
  }

  const formatRating = product.averageRating.toFixed(1)

  const displayName = formatProductName(product.name)

  return { product, displayName, formatRating }
}
