import { useProductStore } from '../store'

export const useFilters = () => {
  const { filters, setFilter, toggleArrayFilter, resetFilters } = useProductStore()
  return { filters, setFilter, toggleArrayFilter, resetFilters }
}
