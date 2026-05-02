export const formatPrice = (price: number): string =>
  new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(price)

export const formatDiscount = (original: number, current: number): number =>
  Math.round(((original - current) / original) * 100)

export const truncate = (str: string, max: number): string =>
  str.length > max ? str.slice(0, max) + '…' : str
