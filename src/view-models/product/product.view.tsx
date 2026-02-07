import type { FC } from 'react'
import { FlatList, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from './components/header'
import type { useProductViewModel } from './use-product.viewmodel'

export const ProductView: FC<ReturnType<typeof useProductViewModel>> = ({
  error,
  isLoading,
  productDetails,
}) => {
  if (error) {
    return <Text>Houve um erro ao carregar os detalhes do product.</Text>
  }

  if (!productDetails) {
    return <Text>Carregando...</Text>
  }

  return (
    <SafeAreaView>
      <FlatList
        data={[]}
        renderItem={() => <></>}
        ListHeaderComponent={<Header productDetails={productDetails} />}
        className="px-6"
      />
    </SafeAreaView>
  )
}
