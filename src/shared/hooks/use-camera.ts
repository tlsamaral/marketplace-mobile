import * as ImagePicker from 'expo-image-picker'
import { useCallback, useState } from 'react'
import { Toast } from 'toastify-react-native'

interface UseCameraOptions {
  aspect?: [number, number]
  quality?: number
  allowEditing?: boolean
  exif?: boolean
}

export const useCamera = ({
  aspect,
  quality,
  allowEditing,
  exif,
}: UseCameraOptions) => {
  const [isLoading, setIsLoading] = useState(false)

  const requestCameraPermission = useCallback(async (): Promise<boolean> => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync()

      const currentStatus = status === 'granted'

      if (!currentStatus) {
        Toast.error('Precisamos da permissão para acessar a câmera.', 'top')
      }

      return currentStatus
    } catch (error) {
      Toast.error('Não foi possível abrir a câmera.', 'top')
      return false
    }
  }, [])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const openCamera = useCallback(async (): Promise<string | null> => {
    setIsLoading(true)

    try {
      const hasPermission = await requestCameraPermission()

      if (!hasPermission) {
        return null
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: allowEditing,
        aspect: aspect,
        quality: quality,
        exif: exif,
      })

      if (!result.canceled && result.assets && result.assets.length > 0) {
        Toast.success('Imagem salva com sucesso.', 'top')
        return result.assets[0].uri
      }

      return null
    } catch {
      Toast.error('Não foi possível abrir a câmera.', 'top')
      return null
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    requestCameraPermission,
    isLoading,
    openCamera,
  }
}
