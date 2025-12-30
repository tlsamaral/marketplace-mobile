import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../../shared/queries/auth/use-login.mutation'
import { useUserStore } from '../../shared/store/user-store'
import { type LoginFormData, loginScheme } from './login.scheme'

export const useLoginViewModel = () => {
  const { user } = useUserStore()
  console.log(user)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginScheme),
  })

  const loginMutation = useLoginMutation()

  const onSubmit = handleSubmit(async (userFormData) => {
    await loginMutation.mutateAsync(userFormData)
  })

  return {
    control,
    onSubmit,
  }
}
