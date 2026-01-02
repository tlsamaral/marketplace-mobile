import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useImage } from '../../shared/hooks/use-image'
import { useRegisterMutation } from '../../shared/queries/auth/use-register.mutation'
import { useUserStore } from '../../shared/store/user-store'
import { type RegisterFormData, registerScheme } from './register.scheme'

export const useRegisterViewModel = () => {
  const [avatarUri, setAvatarUri] = useState<string | null>(null)

  const userRegisterMutation = useRegisterMutation()
  const { setSession } = useUserStore()
  const { handleSelectImage } = useImage({
    callback: setAvatarUri,
  })

  const handleSelectAvatar = async () => {
    await handleSelectImage()
  }

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
    handleSelectAvatar,
  }
}
