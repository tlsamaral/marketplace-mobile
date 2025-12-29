import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import type { UserInterface } from '../interfaces/user'

interface SetSessionParams {
  user: UserInterface
  token: string
  refreshToken: string
}

interface UpdateTokensParams {
  token: string
  refreshToken: string
}

export interface UserStore {
  user: UserInterface | null
  token: string | null
  refreshToken: string | null

  setSession: (sessionData: SetSessionParams) => void
  logout: () => void
  updateTokens: (tokens: UpdateTokensParams) => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      refreshToken: null,

      setSession: (sessionData) =>
        set({
          user: sessionData.user,
          token: sessionData.token,
          refreshToken: sessionData.refreshToken,
        }),
      logout: () => set({ user: null, token: null, refreshToken: null }),
      updateTokens: (tokens) =>
        set({ token: tokens.token, refreshToken: tokens.refreshToken }),
    }),
    {
      name: 'marketplace-auth',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
