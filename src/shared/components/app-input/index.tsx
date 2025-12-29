import { Ionicons } from '@expo/vector-icons'
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
  isDisabled,
  secureTextEntry,
  onBlur,
  onFocus,
  onChangeText,
  mask,
  error,
  ...textInputProps
}: AppInputProps) {
  const {
    getIconColor,
    handleBlur,
    handleFocus,
    handleWrapperPress,
    handlePasswordToggle,
    handleTextChange,
    inputRef,
    showPassword,
    isFocused,
  } = useAppInputViewModel({
    error,
    onBlur,
    onFocus,
    isError: !!error,
    mask,
    onChangeText,
    secureTextEntry,
    value,
    isDisabled,
  })

  const styles = appInputVariants({
    isFocused,
  })

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>

      <Pressable className={styles.wrapper()}>
        {leftIcon && (
          <Ionicons
            name={leftIcon}
            className="mr-3"
            color={getIconColor()}
            size={22}
          />
        )}

        <TextInput
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={styles.input()}
          onChangeText={handleTextChange}
          value={value}
          secureTextEntry={showPassword}
          {...textInputProps}
        />

        {secureTextEntry && (
          <TouchableOpacity activeOpacity={0.7} onPress={handlePasswordToggle}>
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={22}
            />
          </TouchableOpacity>
        )}
      </Pressable>

      {error && (
        <Text className={styles.error()}>
          <Ionicons name="alert-circle-outline" className="mr-2" size={16} />
          {error}
        </Text>
      )}
    </View>
  )
}
