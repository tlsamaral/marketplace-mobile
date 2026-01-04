import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HomeHeader } from './components/header'

export const HomeView = () => {
  return (
    <SafeAreaView edges={['top']} className="flex-1">
      <FlatList
        data={[]}
        renderItem={() => null}
        ListHeaderComponent={() => <HomeHeader />}
        contentContainerClassName="px-[16px] pb-[120px]"
      />
    </SafeAreaView>
  )
}
