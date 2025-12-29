import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { type RegisterFormData, registerScheme } from './register.scheme'
import { useRegisterMutation } from '../../shared/queries/auth/use-register.mutation'

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
  })

  const onSubmit = handleSubmit(async (data) => {
    const { confirmPassword: _, ...registerData } = data

    await userRegisterMutation.mutateAsync(registerData)
  })

  return {
    control,
    onSubmit,
    errors,
  }
}
