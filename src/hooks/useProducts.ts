import { useProductStore } from '../store'

export const useProducts = () => {
  const { products, filters, resetFilters, getFiltered } = useProductStore()
  const filtered = getFiltered()
  return { products, filters, filtered, resetFilters }
}
