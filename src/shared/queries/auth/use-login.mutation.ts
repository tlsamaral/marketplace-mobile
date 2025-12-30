import { useMutation } from '@tanstack/react-query'
import type { LoginHttpParams } from '../../interfaces/http/login'
import * as authService from '../../services/auth.service'
import { useUserStore } from '../../store/user-store'

export const useLoginMutation = () => {
  const { setSession } = useUserStore()

  const mutation = useMutation({
    mutationFn: (userData: LoginHttpParams) => authService.login(userData),
    onSuccess: (response) => {
      alert('Login efetuado com sucesso')
      // setSession({
      //   user: response.user,
      //   token: response.token,
      //   refreshToken: response.refreshToken
      // })
    },
    onError: (error) => {
      console.log(error)
    },
  })

  return mutation
}
