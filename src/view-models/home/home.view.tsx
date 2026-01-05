import type { FC } from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Footer } from './components/footer'
import { HomeHeader } from './components/header'
import { ProductCard } from './components/product-card'
import { SearchInput } from './components/search-input'
import type { useHomeViewModel } from './use-home.view-model'

export const HomeView: FC<ReturnType<typeof useHomeViewModel>> = ({
  products,
  handleEndReached,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
}) => {
  return (
    <SafeAreaView edges={['top']} className="flex-1">
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => `product-list-item-${item.id}`}
        numColumns={2}
        onEndReached={handleEndReached}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        ListHeaderComponent={() => (
          <>
            <HomeHeader />
            <SearchInput />
          </>
        )}
        ListFooterComponent={() => (
          <Footer
            isLoading={hasNextPage && (isLoading || isFetchingNextPage)}
          />
        )}
        contentContainerClassName="px-[16px] pb-[120px]"
      />
    </SafeAreaView>
  )
}
