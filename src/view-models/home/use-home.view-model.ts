import { useProductInfiniteQuery } from '../../shared/queries/product/use-product-infinite-query'
import { useFilterStore } from '../../shared/store/use-filter-store'

export const useHomeViewModel = () => {
  const { appliedFilterState } = useFilterStore()

  const {
    products,
    error: _,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = useProductInfiniteQuery({ filters: appliedFilterState })

  const handleLoadMore = async () => {
    if (hasNextPage && !isFetchingNextPage && !isLoading) {
      fetchNextPage()
    }
  }

  const handleRefresh = async () => {
    await refetch()
  }

  const handleEndReached = async () => {
    await handleLoadMore()
  }

  return {
    handleLoadMore,
    handleRefresh,
    handleEndReached,
    isFetchingNextPage,
    isLoading,
    isRefetching,
    hasNextPage,
    products,
  }
}
