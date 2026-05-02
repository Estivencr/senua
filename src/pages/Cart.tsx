import { useCart } from '../hooks/useCart'
import { formatPrice } from '../utils/formatters'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import styles from './pages.module.css'

interface CartProps {
  onNavigate: (page: string) => void
}

const Cart = ({ onNavigate }: CartProps) => {
  const { items, removeItem, updateQty, total, clearCart } = useCart()

  const handleCheckout = () => {
    window.open(buildWhatsAppUrl(items, total), '_blank', 'noopener,noreferrer')
  }

  if (items.length === 0) {
    return (
      <div className={styles.cartEmpty}>
        <p className={styles.cartEmptyIcon}>🛍</p>
        <h2 className={styles.cartEmptyTitle}>Tu carrito está vacío</h2>
        <p className={styles.cartEmptyText}>Descubre nuestra colección de lencería premium</p>
        <button className={styles.cartEmptyCta} onClick={() => onNavigate('products')}>
          Ver colección
        </button>
      </div>
    )
  }

  return (
    <div className={styles.cartPage}>
      <h1 className={styles.pageTitle}>Mi Carrito</h1>
      <div className={styles.cartLayout}>
        <ul className={styles.cartList}>
          {items.map(item => (
            <li key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className={styles.cartRow}>
              <img src={item.product.image} alt={item.product.name} className={styles.cartRowImage} />
              <div className={styles.cartRowInfo}>
                <p className={styles.cartRowName}>{item.product.name}</p>
                <p className={styles.cartRowMeta}>{item.selectedSize} · {item.selectedColor}</p>
                <p className={styles.cartRowBrand}>{item.product.brand.name}</p>
              </div>
              <div className={styles.cartRowControls}>
                <div className={styles.cartQty}>
                  <button onClick={() => updateQty(item.product.id, item.selectedSize, item.selectedColor, item.quantity - 1)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQty(item.product.id, item.selectedSize, item.selectedColor, item.quantity + 1)}>+</button>
                </div>
                <span className={styles.cartRowPrice}>{formatPrice(item.product.price * item.quantity)}</span>
                <button
                  className={styles.cartRemove}
                  onClick={() => removeItem(item.product.id, item.selectedSize, item.selectedColor)}
                  aria-label="Eliminar"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.cartSummary}>
          <h3 className={styles.summaryTitle}>Resumen</h3>
          <div className={styles.summaryRow}>
            <span>Subtotal</span><span>{formatPrice(total)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Envío</span><span className={styles.summaryFree}>Gratis</span>
          </div>
          <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
            <span>Total</span><span>{formatPrice(total)}</span>
          </div>
          <button className={styles.checkoutBtn} onClick={handleCheckout}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16, flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.853L.057 23.885a.5.5 0 0 0 .608.61l6.163-1.453A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.688-.528-5.21-1.443l-.374-.225-3.878.914.955-3.765-.244-.389A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Pedir por WhatsApp
          </button>
          <button className={styles.clearBtn} onClick={clearCart}>Vaciar carrito</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
