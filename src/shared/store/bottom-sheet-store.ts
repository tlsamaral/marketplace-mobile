import { create } from 'zustand'

interface BottomSheetConfig {
  snapPoints?: string[]
  enablePanDownToClose?: boolean
}
interface BottomSheetStore {
  isOpen: boolean
  content: React.ReactNode | null
  config: BottomSheetConfig

  open: (content: {
    content: React.ReactNode
    config?: BottomSheetConfig
  }) => void
  close: () => void
}

const defaultConfig: BottomSheetConfig = {
  snapPoints: ['80%', '90%'],
  enablePanDownToClose: true,
}

export const useBottomSheetStore = create<BottomSheetStore>(() => ({
  isOpen: false,
  content: null,
  config: defaultConfig,
  open: ({ content, config }) => {
    return {
      content,
      config: {
        ...defaultConfig,
        ...config,
      },
      isOpen: true,
    }
  },
  close: () => ({ isOpen: false, content: null, config: defaultConfig }),
}))
