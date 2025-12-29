import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { type AppInputVariantsProps, appInputVariants } from './input.variants'
import { useAppInputViewModel } from './use-app-input-view-model'

export interface AppInputProps
  extends React.ComponentProps<typeof TextInput>,
    AppInputVariantsProps {
  label?: string
  leftIcon?: keyof typeof Ionicons.glyphMap
  rightIcon?: keyof typeof Ionicons.glyphMap
  containerClassName?: string
  mask?: (value: string) => string | void
  error?: string
}

export function AppInput({
  label,
  leftIcon,
  rightIcon,
  containerClassName,
  value,
  isError,
  secureTextEntry,
  onBlur,
  onFocus,
  onChangeText,
  mask,
  error,
  ...textInputProps
}: AppInputProps) {
  const {} = useAppInputViewModel({
    error,
    onBlur,
    onFocus,
    isError: !!error,
    mask,
    onChangeText,
    secureTextEntry,
    value,
  })

  const styles = appInputVariants({})

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>

      <Pressable className={styles.wrapper()}>
        <Ionicons name="person" size={22} />

        <TextInput className={styles.input()} {...textInputProps} />

        <TouchableOpacity>
          <Ionicons name="eye-off-outline" size={22} />
        </TouchableOpacity>
      </Pressable>
    </View>
  )
}
