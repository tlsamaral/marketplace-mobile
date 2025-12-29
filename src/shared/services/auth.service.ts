import { marketPlaceApiClient } from '../api/market-place'
import type {
  RegisterHttpParams,
  RegisterHttpResponse,
} from '../interfaces/http/register'

export const register = async (userData: RegisterHttpParams) => {
  const { data } = await marketPlaceApiClient.post<RegisterHttpResponse>(
    '/auth/register',
    userData,
  )

  return data
}
