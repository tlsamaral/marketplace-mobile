import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useRegisterMutation } from '../../shared/queries/auth/use-register.mutation'
import { useUserStore } from '../../shared/store/user-store'
import { type RegisterFormData, registerScheme } from './register.scheme'

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation()
  const { setSession } = useUserStore()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
  })

  const onSubmit = handleSubmit(async (data) => {
    const { confirmPassword: _, ...registerData } = data

    const response = await userRegisterMutation.mutateAsync(registerData)

    setSession({
      user: response.user,
      token: response.token,
      refreshToken: response.refreshToken,
    })
  })

  return {
    control,
    onSubmit,
    errors,
  }
}
