import { useCartStore } from '../store'

export const useCart = () => {
  const store = useCartStore()
  return {
    items: store.items,
    isOpen: store.isOpen,
    addItem: store.addItem,
    removeItem: store.removeItem,
    updateQty: store.updateQty,
    clearCart: store.clearCart,
    openCart: store.openCart,
    closeCart: store.closeCart,
    total: store.total(),
    count: store.count()
  }
}
