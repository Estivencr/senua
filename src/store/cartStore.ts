import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartItem, Product } from '../types'

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: Product, size: string, color: string) => void
  removeItem: (productId: string, size: string, color: string) => void
  updateQty: (productId: string, size: string, color: string, qty: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  total: () => number
  count: () => number
}

const isSame = (a: CartItem, productId: string, size: string, color: string) =>
  a.product.id === productId && a.selectedSize === size && a.selectedColor === color

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, size, color) =>
        set(state => {
          const exists = state.items.find(i => isSame(i, product.id, size, color))
          if (exists) {
            return {
              items: state.items.map(i =>
                isSame(i, product.id, size, color)
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              )
            }
          }
          return { items: [...state.items, { product, quantity: 1, selectedSize: size, selectedColor: color }] }
        }),

      removeItem: (productId, size, color) =>
        set(state => ({
          items: state.items.filter(i => !isSame(i, productId, size, color))
        })),

      updateQty: (productId, size, color, qty) =>
        set(state => ({
          items: qty <= 0
            ? state.items.filter(i => !isSame(i, productId, size, color))
            : state.items.map(i =>
                isSame(i, productId, size, color) ? { ...i, quantity: qty } : i
              )
        })),

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      total: () => get().items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
      count: () => get().items.reduce((sum, i) => sum + i.quantity, 0)
    }),
    { name: 'senua-cart' }
  )
)
