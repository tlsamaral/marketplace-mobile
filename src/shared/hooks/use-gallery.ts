import type { ImagePickerOptions } from 'expo-image-picker'
import * as ImagePicker from 'expo-image-picker'
import { useCallback, useState } from 'react'
import { Alert, Linking } from 'react-native'
import { Toast } from 'toastify-react-native'

export const useGallery = (pickerOptions: ImagePickerOptions) => {
  const [isLoading, setIsLoading] = useState(false)

  const requestGalleryPermission = useCallback(async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

      const currentStatus = status === 'granted'

      if (!currentStatus) {
        Alert.alert(
          'Permissão negada!',
          'Precisamos da permissão para acessar a galeria.',
          [
            { text: 'Cancelar', style: 'cancel' },
            {
              text: 'Abrir configurações',
              onPress: () => {
                Linking.openSettings()
              },
            },
          ],
        )
      }

      return currentStatus
    } catch (_error) {
      Toast.error('Não foi possível abrir a galeria.', 'top')
      return false
    }
  }, [])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const openGallery = useCallback(async (): Promise<string | null> => {
    setIsLoading(true)

    try {
      const hasPermission = await requestGalleryPermission()

      if (!hasPermission) {
        return null
      }

      const result = await ImagePicker.launchImageLibraryAsync(pickerOptions)

      if (!result.canceled && result.assets.length > 0) {
        Toast.success('Imagem carregada com sucesso.', 'top')
        return result.assets[0].uri
      }

      return null
    } catch (error) {
      Toast.error('Não foi possível abrir a galeria.', 'top')
      return null
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    isLoading,
    openGallery,
    requestGalleryPermission,
  }
}
