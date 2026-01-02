import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useAppModal } from '../../shared/hooks/use-app-modal'
import { useCamera } from '../../shared/hooks/use-camera'
import { useGallery } from '../../shared/hooks/use-gallery'
import { useRegisterMutation } from '../../shared/queries/auth/use-register.mutation'
import { useUserStore } from '../../shared/store/user-store'
import { type RegisterFormData, registerScheme } from './register.scheme'

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation()
  const { setSession } = useUserStore()
  const { openCamera } = useCamera({})
  const { openGallery } = useGallery({})
  const modals = useAppModal()

  const handleSelectAvatar = () => {
    modals.showSelection({
      title: 'Selecione um avatar',
      message: 'Escolha uma opção',
      options: [
        {
          text: 'Galeria',
          icon: 'images',
          variant: 'primary',
          onPress: openGallery,
        },
        {
          text: 'Câmera',
          icon: 'camera',
          variant: 'primary',
          onPress: openCamera,
        },
      ],
    })
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
