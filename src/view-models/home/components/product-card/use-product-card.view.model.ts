import type { ProductInterface } from '../../../../shared/interfaces/product'

interface UseProductCardViewModelProps {
  product: ProductInterface
}

export const useProductCardViewModel = ({
  product,
}: UseProductCardViewModelProps) => {
  return { product }
}
