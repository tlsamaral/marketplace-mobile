import { useQuery } from '@tanstack/react-query'
import { getProductDetail } from '../../services/product.service'

export const useGetProductDetailQuery = (productId: number) => {
  const query = useQuery({
    queryFn: () => getProductDetail(productId),
    queryKey: ['product', productId],
  })

  return query
}
