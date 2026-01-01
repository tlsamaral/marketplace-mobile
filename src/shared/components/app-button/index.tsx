import type { Ionicons } from '@expo/vector-icons'
import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'
import { type ButtonVariants, buttonVariants } from './button.variants'

interface AppButtonProps extends TouchableOpacityProps, ButtonVariants {
  leftIcon?: keyof typeof Ionicons.glyphMap
  children: string
}

export function AppButton({ leftIcon, children, ...props }: AppButtonProps) {
  const styles = buttonVariants()

  return (
    <TouchableOpacity className={styles.base()} {...props}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}
