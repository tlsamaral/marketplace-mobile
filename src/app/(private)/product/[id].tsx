import { useLocalSearchParams } from 'expo-router'
import { ProductView } from '../../../view-models/product/product.view'
import { useProductViewModel } from '../../../view-models/product/use-product.viewmodel'

export default function Product() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const viewModel = useProductViewModel(Number(id))

  return <ProductView {...viewModel} />
}
