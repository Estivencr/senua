import { create } from 'zustand'
import type { Product, FilterState } from '../types'
import { PRODUCTS } from '../data/products'

interface ProductStore {
  products: Product[]
  filters: FilterState
  setFilter: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void
  toggleArrayFilter: (key: 'colors' | 'designs' | 'brands', value: string) => void
  resetFilters: () => void
  getFiltered: () => Product[]
}

const DEFAULT_FILTERS: FilterState = {
  colors: [],
  designs: [],
  brands: [],
  search: '',
  category: ''
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: PRODUCTS,
  filters: DEFAULT_FILTERS,

  setFilter: (key, value) =>
    set(state => ({ filters: { ...state.filters, [key]: value } })),

  toggleArrayFilter: (key, value) =>
    set(state => {
      const current = state.filters[key]
      const next = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value]
      return { filters: { ...state.filters, [key]: next } }
    }),

  resetFilters: () => set({ filters: DEFAULT_FILTERS }),

  getFiltered: () => {
    const { products, filters } = get()
    return products.filter(p => {
      if (filters.category && p.category !== filters.category) return false
      if (filters.search) {
        const q = filters.search.toLowerCase()
        if (!p.name.toLowerCase().includes(q) && !p.description.toLowerCase().includes(q)) return false
      }
      if (filters.colors.length > 0) {
        const pColors = p.colors.map(c => c.name)
        if (!filters.colors.some(c => pColors.includes(c))) return false
      }
      if (filters.designs.length > 0) {
        const pDesigns = p.designs.map(d => d.name)
        if (!filters.designs.some(d => pDesigns.includes(d))) return false
      }
      if (filters.brands.length > 0) {
        if (!filters.brands.includes(p.brand.name)) return false
      }
      return true
    })
  }
}))
