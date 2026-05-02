import type { Product } from '../types'
import { PRODUCTS } from '../data/products'

export const fetchProducts = (): Promise<Product[]> =>
  Promise.resolve(PRODUCTS)

export const fetchProduct = (id: string): Promise<Product | undefined> =>
  Promise.resolve(PRODUCTS.find(p => p.id === id))
