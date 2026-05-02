import { useState, useEffect } from 'react'
import type { Product } from '../../types'
import { useCart } from '../../hooks/useCart'
import { formatPrice } from '../../utils/formatters'
import styles from './products.module.css'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0]?.size ?? '')
      setSelectedColor(product.colors[0]?.name ?? '')
      setAdded(false)
    }
  }, [product])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  if (!product) return null

  const handleAdd = () => {
    addItem(product, selectedSize, selectedColor)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className={styles.modalBackdrop} onClick={onClose} role="dialog" aria-modal aria-label={product.name}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose} aria-label="Cerrar">✕</button>

        <div className={styles.modalGrid}>
          <div className={styles.modalImageWrap}>
            <img src={product.image} alt={product.name} className={styles.modalImage} />
            {product.onSale && (
              <span className={styles.badge}>OFERTA −{product.discount}%</span>
            )}
          </div>

          <div className={styles.modalContent}>
            <p className={styles.cardBrand}>{product.brand.name}</p>
            <h2 className={styles.modalTitle}>{product.name}</h2>
            <p className={styles.modalDesc}>{product.longDescription}</p>

            <div className={styles.modalPrices}>
              <span className={styles.modalPrice}>{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className={styles.cardOriginalPrice}>{formatPrice(product.originalPrice)}</span>
              )}
            </div>

            <div className={styles.modalSection}>
              <p className={styles.modalSectionLabel}>Color: <strong>{selectedColor}</strong></p>
              <div className={styles.cardColors}>
                {product.colors.map(c => (
                  <button
                    key={c.id}
                    className={`${styles.colorDot} ${selectedColor === c.name ? styles.colorDotSelected : ''}`}
                    style={{ background: c.hex }}
                    onClick={() => setSelectedColor(c.name)}
                    aria-label={c.name}
                    aria-pressed={selectedColor === c.name}
                  />
                ))}
              </div>
            </div>

            <div className={styles.modalSection}>
              <p className={styles.modalSectionLabel}>Talla</p>
              <div className={styles.sizeGrid}>
                {product.sizes.map(s => (
                  <button
                    key={s.id}
                    className={`${styles.sizeBtn} ${selectedSize === s.size ? styles.sizeBtnActive : ''} ${s.stock === 0 ? styles.sizeBtnOut : ''}`}
                    onClick={() => s.stock > 0 && setSelectedSize(s.size)}
                    disabled={s.stock === 0}
                    aria-pressed={selectedSize === s.size}
                  >
                    {s.size}
                  </button>
                ))}
              </div>
            </div>

            <button className={styles.addToCartBtn} onClick={handleAdd}>
              {added ? '✓ Agregado al carrito' : 'Agregar al carrito'}
            </button>

            <div className={styles.modalMeta}>
              <span>★ {product.rating} ({product.reviews} reseñas)</span>
              <span>SKU: {product.sku}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
