import { useInfiniteQuery } from '@tanstack/react-query'
import { buildImageUrl } from '../../helpers/build-image-url'
import { getProducts } from '../../services/product.service'
import type { FilterState } from '../../store/use-filter-store'

interface ProductsIntiniteQueryParams {
  filters?: FilterState
}

export const useProductInfiniteQuery = ({
  filters,
}: ProductsIntiniteQueryParams = {}) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = useInfiniteQuery({
    queryKey: ['products', filters],
    staleTime: 1000 * 60 * 1,
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const response = await getProducts({
          pagination: { page: pageParam, perPage: 10 },
          filters: {
            categoryIds: filters?.selectedCategories || [],
            minValue: filters?.valueMin || undefined,
            maxValue: filters?.valueMax || undefined,
            searchText: filters?.searchText || undefined,
          },
        })

        return response
      } catch (error) {
        throw error
      }
    },
    getNextPageParam: (last) => {
      return last.page < last.totalPages ? last.page + 1 : undefined
    },
    initialPageParam: 1,
  })

  const products = data?.pages
    .flatMap((page) => page.data)
    .map((product) => ({
      ...product,
      photo: buildImageUrl(product.photo),
    }))

  return {
    products,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  }
}
