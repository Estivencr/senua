import { memo } from 'react'
import { CATEGORIES } from '../../data/categories'
import styles from './home.module.css'

interface CategoryGridProps {
  onNavigate: (page: string, category?: string) => void
}

const CategoryGrid = memo(({ onNavigate }: CategoryGridProps) => (
  <section className={styles.categories}>
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>Colecciones</h2>
      <p className={styles.sectionSubtitle}>Descubre cada faceta de tu elegancia</p>
    </div>
    <div className={styles.categoryGrid}>
      {CATEGORIES.map(cat => (
        <button
          key={cat.id}
          className={styles.categoryCard}
          onClick={() => onNavigate('products', cat.slug)}
          aria-label={`Ver ${cat.name}`}
        >
          <div className={styles.categoryImg}>
            <img src={cat.image} alt={cat.name} loading="lazy" />
            <div className={styles.categoryOverlay} />
          </div>
          <div className={styles.categoryInfo}>
            <h3 className={styles.categoryName}>{cat.name}</h3>
            <p className={styles.categoryDesc}>{cat.description}</p>
            <span className={styles.categoryCount}>{cat.count} piezas</span>
          </div>
        </button>
      ))}
    </div>
  </section>
))

CategoryGrid.displayName = 'CategoryGrid'
export default CategoryGrid
