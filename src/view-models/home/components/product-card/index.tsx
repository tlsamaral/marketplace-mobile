import type { ProductInterface } from '../../../../shared/interfaces/product'
import { ProductCardView } from './product-card.view'
import { useProductCardViewModel } from './use-product-card.view.model'

interface ProductCardParams {
  product: ProductInterface
}

export function ProductCard(props: ProductCardParams) {
  const viewModelProps = useProductCardViewModel(props)
  return <ProductCardView {...viewModelProps} />
}
