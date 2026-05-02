export interface ProductColor {
  id: string
  name: string
  hex: string
}

export interface ProductDesign {
  id: string
  name: string
}

export interface ProductBrand {
  id: string
  name: string
}

export interface ProductSize {
  id: string
  size: string
  stock: number
}

export interface Product {
  id: string
  name: string
  description: string
  longDescription: string
  price: number
  originalPrice?: number
  image: string
  gallery: string[]
  colors: ProductColor[]
  designs: ProductDesign[]
  brand: ProductBrand
  sizes: ProductSize[]
  rating: number
  reviews: number
  inStock: boolean
  onSale: boolean
  discount?: number
  sku: string
  category: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
  count: number
}

export interface FilterOption {
  id: string
  name: string
  value: string
}

export interface FilterGroup {
  id: string
  label: string
  options: FilterOption[]
}
