import { ActivityIndicator, View } from 'react-native'
import { colors } from '../../../../styles/colors'

interface FooterProps {
  isLoading: boolean
}

export function Footer({ isLoading }: FooterProps) {
  if (!isLoading) return null

  return (
    <View>
      <ActivityIndicator size="small" color={colors['purple-base']} />
    </View>
  )
}
