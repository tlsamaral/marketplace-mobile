import { yupResolver } from '@hookform/resolvers/yup'
import { CameraType } from 'expo-image-picker'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useImage } from '../../shared/hooks/use-image'
import { useRegisterMutation } from '../../shared/queries/auth/use-register.mutation'
import { useUploadAvatarMutation } from '../../shared/queries/auth/use-upload-avatar.mutation'
import { useUserStore } from '../../shared/store/user-store'
import { type RegisterFormData, registerScheme } from './register.scheme'

export const useRegisterViewModel = () => {
  const [avatarUri, setAvatarUri] = useState<string | null>(null)

  const { updateUser } = useUserStore()
  const { handleSelectImage } = useImage({
    callback: setAvatarUri,
    cameraType: CameraType.front,
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

  const uploadAvatarMutation = useUploadAvatarMutation()

  const userRegisterMutation = useRegisterMutation({
    onSuccess: async () => {
      if (avatarUri) {
        const { url } = await uploadAvatarMutation.mutateAsync(avatarUri)

        updateUser({ avatarUrl: url })
      }
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    const { confirmPassword: _, ...registerData } = data
    await userRegisterMutation.mutateAsync(registerData)
  })

  return {
    control,
    onSubmit,
    errors,
    handleSelectAvatar,
    avatarUri,
  }
}
