import { memo } from 'react'
import type { Product } from '../../types'
import ProductCard from '../products/ProductCard'
import styles from './home.module.css'

interface ProductGridProps {
  products: Product[]
  title: string
  subtitle?: string
  onNavigate: (page: string) => void
}

const ProductGrid = memo(({ products, title, subtitle, onNavigate }: ProductGridProps) => (
  <section className={styles.featuredSection}>
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
    </div>
    <div className={styles.featuredGrid}>
      {products.slice(0, 4).map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
    <div className={styles.featuredCta}>
      <button className={styles.viewAllBtn} onClick={() => onNavigate('products')}>
        Ver toda la colección
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 16, height: 16 }}>
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </section>
))

ProductGrid.displayName = 'ProductGrid'
export default ProductGrid
