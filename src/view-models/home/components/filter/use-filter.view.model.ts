import { useBottomSheet } from '@gorhom/bottom-sheet'
import { useGetProductCategoriesQuery } from '../../../../shared/queries/product/use-get-product-categories'
import { useFilterStore } from '../../../../shared/store/use-filter-store'

export const useFilterViewModel = () => {
  const {
    data: categories,
    isLoading,
    error,
    refetch,
  } = useGetProductCategoriesQuery()

  const { updateFilter, filterState, applyFilters, resetFilters } =
    useFilterStore()
  const { close } = useBottomSheet()

  const handleValueMaxChange = (value: number) => {
    updateFilter({
      key: 'valueMax',
      value,
    })
  }

  const handleValueMinChange = (value: number) => {
    updateFilter({
      key: 'valueMin',
      value,
    })
  }

  const handleCategoryToggle = (categoryId: number) => {
    const categoryAlreadyInArray =
      filterState.selectedCategories.includes(categoryId)

    if (categoryAlreadyInArray) {
      updateFilter({
        key: 'selectedCategories',
        value: filterState.selectedCategories.filter(
          (category) => category !== categoryId,
        ),
      })
    } else {
      updateFilter({
        key: 'selectedCategories',
        value: [...filterState.selectedCategories, categoryId],
      })
    }
  }

  const handleApplyFilters = () => {
    applyFilters()
    close()
  }

  const handleResetFilters = () => {
    resetFilters()
    close()
  }

  const selectedCategories = filterState.selectedCategories

  return {
    categories,
    isLoading,
    error,
    refetch,
    handleValueMaxChange,
    handleValueMinChange,
    handleCategoryToggle,
    handleApplyFilters,
    selectedCategories,
    handleResetFilters,
  }
}
