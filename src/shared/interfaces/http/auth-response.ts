import type { UserInterface } from '../user'

export interface AuthResponse {
  user: UserInterface
  token: string
  refreshToken: string
}
