import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import type { ProductInterface } from '../../shared/interfaces/product'
import { HomeHeader } from './components/header'
import { ProductCard } from './components/product-card'
import { SearchInput } from './components/search-input'

export const HomeView = () => {
  const productsList: ProductInterface[] = [
    {
      id: 0,
      value: 'string',
      name: 'string',
      description: 'string',
      photo: 'string',
      height: 'string',
      width: 'string',
      weight: 'string',
      averageRating: 0,
      views: 0,
      ratingCount: 0,
      categoryId: 0,
      category: {
        id: 0,
        name: 'string',
      },
      createdAt: 'string',
      updatedAt: 'string',
      deletedAt: 'string',
    },
  ]

  return (
    <SafeAreaView edges={['top']} className="flex-1">
      <FlatList
        data={productsList}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => `product-list-item-${item.id}`}
        ListHeaderComponent={() => (
          <>
            <HomeHeader />
            <SearchInput />
          </>
        )}
        contentContainerClassName="px-[16px] pb-[120px]"
      />
    </SafeAreaView>
  )
}
