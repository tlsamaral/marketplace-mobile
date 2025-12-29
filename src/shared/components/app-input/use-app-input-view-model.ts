import { useRef, useState } from 'react'
import type { BlurEvent, FocusEvent, TextInput } from 'react-native'
import { colors } from '../../../styles/colors'

interface AppInputViewModelProps {
  isError?: boolean
  isDisabled?: boolean
  error?: string
  secureTextEntry?: boolean
  onFocus?: (event: FocusEvent) => void
  onBlur?: (event: BlurEvent) => void
  mask?: (value: string) => string | void
  onChangeText?: (value: string) => void
  value?: string
}
export const useAppInputViewModel = ({
  error,
  isDisabled,
  isError,
  secureTextEntry,
  onFocus,
  onBlur,
  mask,
  onChangeText,
  value,
}: AppInputViewModelProps) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry)
  const [isFocused, setIsFocused] = useState(false)

  const inputRef = useRef<TextInput>(null)

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev)
  }

  const handleWrapperPress = () => {
    inputRef.current?.focus()
  }

  const handleFocus = (event: FocusEvent) => {
    setIsFocused(true)
    onFocus?.(event)
  }

  const handleBlur = (event: BlurEvent) => {
    setIsFocused(false)
    onBlur?.(event)
  }

  const handleTextChange = (text: string) => {
    if (mask) {
      onChangeText?.(mask(text) || '')
    } else {
      onChangeText?.(text)
    }
  }

  const getIconColor = () => {
    if (isFocused) {
      return colors['purple-base']
    }

    if (isError) {
      return colors.danger
    }

    if (value) {
      return colors['purple-base']
    }

    return colors.grays[200]
  }

  return {
    getIconColor,
    handleBlur,
    handleFocus,
    handlePasswordToggle,
    handleWrapperPress,
    inputRef,
    isDisabled,
    isFocused,
    isError,
    showPassword,
    secureTextEntry,
    value,
    mask,
    onChangeText,
    handleTextChange,
  }
}
