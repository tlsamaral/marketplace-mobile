import { create } from 'zustand'

export interface FilterState {
  valueMin: number | null
  valueMax: number | null
  selectedCategories: number[]
  searchText: string
}

interface FilterStore {
  appliedFilterState: FilterState
  filterState: FilterState
  updateFilter(props: {
    key: keyof FilterState
    value: string | number[] | number
  }): void
  resetFilters(): void
  applyFilters(): void
}

const defaultFilterValues = {
  valueMin: null,
  valueMax: null,
  selectedCategories: [],
  searchText: '',
}

export const useFilterStore = create<FilterStore>((set) => ({
  appliedFilterState: defaultFilterValues,
  filterState: defaultFilterValues,
  updateFilter(props) {
    set((state) => ({
      filterState: {
        ...state.appliedFilterState,
        [props.key]: props.value,
      },
    }))
  },

  resetFilters: () => {
    set({ appliedFilterState: defaultFilterValues })
    set({ filterState: defaultFilterValues })
  },

  applyFilters: () =>
    set((state) => ({ appliedFilterState: state.filterState })),
}))
