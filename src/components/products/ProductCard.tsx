import { memo, useState } from 'react'
import type { Product } from '../../types'
import { useCart } from '../../hooks/useCart'
import { formatPrice } from '../../utils/formatters'
import styles from './products.module.css'

interface ProductCardProps {
  product: Product
  onOpenModal?: (product: Product) => void
}

const ProductCard = memo(({ product, onOpenModal }: ProductCardProps) => {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const defaultSize = product.sizes[0]?.size ?? 'M'
  const defaultColor = product.colors[0]?.name ?? 'Negro'

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation()
    addItem(product, defaultSize, defaultColor)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <article
      className={styles.card}
      onClick={() => onOpenModal?.(product)}
      role={onOpenModal ? 'button' : undefined}
      tabIndex={onOpenModal ? 0 : undefined}
      onKeyDown={onOpenModal ? e => e.key === 'Enter' && onOpenModal(product) : undefined}
      aria-label={product.name}
    >
      <div className={styles.cardImageWrap}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.cardImage}
          loading="lazy"
        />
        {product.onSale && (
          <span className={styles.badge}>OFERTA −{product.discount}%</span>
        )}
        <div className={styles.cardHoverOverlay}>
          <button className={styles.quickAdd} onClick={handleAdd} aria-label="Agregar al carrito">
            {added ? '✓ Agregado' : 'Agregar al carrito'}
          </button>
        </div>
      </div>

      <div className={styles.cardBody}>
        <p className={styles.cardBrand}>{product.brand.name}</p>
        <h3 className={styles.cardName}>{product.name}</h3>
        <p className={styles.cardDesc}>{product.description}</p>

        <div className={styles.cardColors}>
          {product.colors.map(c => (
            <span
              key={c.id}
              className={styles.colorDot}
              style={{ background: c.hex }}
              title={c.name}
              aria-label={c.name}
            />
          ))}
        </div>

        <div className={styles.cardFooter}>
          <div className={styles.cardPrices}>
            <span className={styles.cardPrice}>{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className={styles.cardOriginalPrice}>{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <div className={styles.cardRating}>
            <span className={styles.star}>★</span>
            <span>{product.rating}</span>
            <span className={styles.reviewCount}>({product.reviews})</span>
          </div>
        </div>
      </div>
    </article>
  )
})

ProductCard.displayName = 'ProductCard'
export default ProductCard
