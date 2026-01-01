import { Ionicons } from '@expo/vector-icons'
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'
import { colors } from '../../../styles/colors'
import { type ButtonVariants, buttonVariants } from './button.variants'

interface AppButtonProps extends TouchableOpacityProps, ButtonVariants {
  leftIcon?: keyof typeof Ionicons.glyphMap
  rightIcon?: keyof typeof Ionicons.glyphMap
  children: string
}

export function AppButton({
  leftIcon,
  rightIcon,
  children,
  variant = 'filled',
  isLoading,
  isDisabled,
  ...props
}: AppButtonProps) {
  const contentColor =
    variant === 'filled' ? colors.white : colors['purple-base']

  const styles = buttonVariants({
    hasIcon: !!leftIcon || !!rightIcon,
    isDisabled,
    isLoading,
    variant,
  })

  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="small" color={contentColor} />
    }

    return (
      <>
        {leftIcon && (
          <Ionicons name={leftIcon} size={20} color={contentColor} />
        )}
        <Text className={styles.text()}>{children}</Text>
        {rightIcon && (
          <Ionicons name={rightIcon} size={20} color={contentColor} />
        )}
      </>
    )
  }

  return (
    <TouchableOpacity className={styles.base()} {...props}>
      {renderContent()}
    </TouchableOpacity>
  )
}
