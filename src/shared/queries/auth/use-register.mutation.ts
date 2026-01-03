import { useMutation } from '@tanstack/react-query'
import type { AuthResponse } from '../../interfaces/http/auth-response'
import type { RegisterHttpParams } from '../../interfaces/http/register'
import * as authService from '../../services/auth.service'
import { useUserStore } from '../../store/user-store'

interface UserRegisterMutationParams {
  onSuccess?: (authResponse: AuthResponse) => void
}

export const useRegisterMutation = ({
  onSuccess,
}: UserRegisterMutationParams = {}) => {
  const { setSession } = useUserStore()
  const mutation = useMutation({
    mutationFn: (userData: RegisterHttpParams) =>
      authService.register(userData),
    onSuccess: async (response) => {
      setSession({
        user: response.user,
        token: response.token,
        refreshToken: response.refreshToken,
      })

      onSuccess?.(response)
    },
    onError: (error) => {
      console.log(error)
    },
  })

  return mutation
}
