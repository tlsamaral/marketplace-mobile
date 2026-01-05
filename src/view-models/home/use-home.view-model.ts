import { useProductInfiniteQuery } from '../../shared/queries/product/use-product-infinite-query'

export const useHomeViewModel = () => {
  const {
    products,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = useProductInfiniteQuery()

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
    hasNextPage,
    products,
  }
}
