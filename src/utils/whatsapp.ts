import type { CartItem } from '../types'
import { formatPrice } from './formatters'

const WA_NUMBER = '573125240069'

export const buildWhatsAppUrl = (items: CartItem[], total: number): string => {
  const lines: string[] = [
    '¡Hola! 👋 Me gustaría hacer el siguiente pedido en *SENUA*:',
    '',
    '🛍 *Productos:*',
    ...items.map((item, i) =>
      `${i + 1}. *${item.product.name}*\n   Talla: ${item.selectedSize} | Color: ${item.selectedColor} | Cantidad: ${item.quantity}\n   Precio: ${formatPrice(item.product.price * item.quantity)}`
    ),
    '',
    `💰 *Total: ${formatPrice(total)}*`,
    '',
    '¿Podrían confirmar disponibilidad y coordinar el envío? ¡Gracias! 🌹'
  ]

  const message = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${WA_NUMBER}?text=${message}`
}
