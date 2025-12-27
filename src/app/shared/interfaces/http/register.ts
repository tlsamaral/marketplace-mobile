import type { UserInterface } from '../user'

export interface RegisterHttpParams {
  name: string
  email: string
  password: string
  avatarUrl?: string
  phone: string
}

export interface RegisterHttpResponse {
  user: UserInterface
  token: string
  refreshToken: string
}
