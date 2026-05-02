export type { Product, ProductColor, ProductDesign, ProductBrand, ProductSize, Category, FilterOption, FilterGroup } from './product'
export type { CartItem, CartState } from './cart'

export interface FilterState {
  colors: string[]
  designs: string[]
  brands: string[]
  search: string
  category: string
}

export interface HeroSlide {
  id: string
  title: string
  subtitle: string
  cta: string
  bgColor: string
  accentColor: string
}
