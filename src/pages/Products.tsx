import { useState } from 'react'
import type { Product } from '../types'
import { useProducts } from '../hooks/useProducts'
import { useFilters } from '../hooks/useFilters'
import ProductCard from '../components/products/ProductCard'
import ProductFilter from '../components/products/ProductFilter'
import ProductModal from '../components/products/ProductModal'
import styles from './pages.module.css'

const Products = () => {
  const { filtered } = useProducts()
  const { filters, setFilter, resetFilters } = useFilters()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [filtersOpen, setFiltersOpen] = useState(false)

  return (
    <div className={styles.productsPage}>
      <div className={styles.productsHeader}>
        <div className={styles.productsHeaderInner}>
          <h1 className={styles.pageTitle}>Colección</h1>
          <p className={styles.pageSubtitle}>{filtered.length} piezas disponibles</p>
        </div>
        <div className={styles.productsHeaderActions}>
          <div className={styles.searchWrap}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.searchIconInline}>
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="search"
              placeholder="Buscar..."
              value={filters.search}
              onChange={e => setFilter('search', e.target.value)}
              className={styles.pageSearch}
              aria-label="Buscar productos"
            />
          </div>
          <button
            className={`${styles.filterToggle} ${filtersOpen ? styles.filterToggleActive : ''}`}
            onClick={() => setFiltersOpen(v => !v)}
            aria-expanded={filtersOpen}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 16, height: 16 }}>
              <line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="16" y2="12" /><line x1="4" y1="18" x2="12" y2="18" />
            </svg>
            Filtros
          </button>
          {(filters.colors.length > 0 || filters.designs.length > 0 || filters.brands.length > 0) && (
            <button className={styles.resetFiltersBtn} onClick={resetFilters}>
              Limpiar filtros
            </button>
          )}
        </div>
      </div>

      <div className={styles.productsLayout}>
        <div className={`${styles.filterSidebar} ${filtersOpen ? styles.filterSidebarOpen : ''}`}>
          <ProductFilter />
        </div>

        <div className={styles.productsContent}>
          {filtered.length === 0 ? (
            <div className={styles.noResults}>
              <p className={styles.noResultsText}>No se encontraron productos</p>
              <button className={styles.resetFiltersBtn} onClick={resetFilters}>
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div className={styles.productsGrid}>
              {filtered.map(p => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onOpenModal={setSelectedProduct}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  )
}

export default Products
