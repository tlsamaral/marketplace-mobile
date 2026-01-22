import type { FC } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../styles/colors'
import { Footer } from './components/footer'

import { ProductCard } from './components/product-card'
import { RenderHeader } from './components/render-header'
import type { useHomeViewModel } from './use-home.view-model'

export const HomeView: FC<ReturnType<typeof useHomeViewModel>> = ({
  products,
  handleEndReached,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
  isRefetching,
  handleRefresh,
  searchInputText,
  setSearchInputText,
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
        ListHeaderComponent={
          <RenderHeader
            searchInputText={searchInputText}
            setSearchInputText={setSearchInputText}
          />
        }
        ListFooterComponent={() => (
          <Footer
            isLoading={hasNextPage && (isLoading || isFetchingNextPage)}
          />
        )}
        contentContainerClassName="px-[16px] pb-[120px]"
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            colors={[colors['purple-base']]}
            tintColor={colors['purple-base']}
            onRefresh={handleRefresh}
          />
        }
      />
    </SafeAreaView>
  )
}
