import {
  type Control,
  Controller,
  type FieldErrors,
  type FieldValues,
  type Path,
} from 'react-hook-form'
import { AppInput, type AppInputProps } from '../app-input'

interface AppInputControllerProps<T extends FieldValues>
  extends Omit<AppInputProps, 'value' | 'onChangeText' | 'error'> {
  control: Control<T>
  name: Path<T>
  errors?: FieldErrors<T>
}

export function AppInputController<T extends FieldValues>({
  name,
  control,
  errors,
  ...rest
}: AppInputControllerProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
        formState: { isSubmitting },
      }) => (
        <AppInput
          onChangeText={onChange}
          value={value}
          onBlur={onBlur}
          error={error?.message?.toString()}
          isDisabled={isSubmitting || rest.isDisabled}
          {...rest}
        />
      )}
    />
  )
}
