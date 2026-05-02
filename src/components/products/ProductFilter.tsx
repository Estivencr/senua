import { memo } from 'react'
import { FILTER_GROUPS } from '../../data/filters'
import { useFilters } from '../../hooks/useFilters'
import styles from './products.module.css'

const ProductFilter = memo(() => {
  const { filters, toggleArrayFilter, resetFilters } = useFilters()

  const hasActiveFilters =
    filters.colors.length > 0 ||
    filters.designs.length > 0 ||
    filters.brands.length > 0

  return (
    <aside className={styles.filterPanel} aria-label="Filtros">
      <div className={styles.filterHeader}>
        <h2 className={styles.filterTitle}>Filtros</h2>
        {hasActiveFilters && (
          <button className={styles.resetBtn} onClick={resetFilters} aria-label="Limpiar filtros">
            Limpiar
          </button>
        )}
      </div>

      {FILTER_GROUPS.map(group => {
        const activeArr = filters[group.id as keyof typeof filters] as string[]

        return (
          <div key={group.id} className={styles.filterGroup}>
            <h3 className={styles.filterGroupLabel}>{group.label}</h3>
            <div className={styles.filterOptions}>
              {group.options.map(opt => {
                const isActive = activeArr.includes(opt.value)
                return (
                  <button
                    key={opt.id}
                    className={`${styles.filterChip} ${isActive ? styles.filterChipActive : ''}`}
                    onClick={() => toggleArrayFilter(
                      group.id as 'colors' | 'designs' | 'brands',
                      opt.value
                    )}
                    aria-pressed={isActive}
                  >
                    {opt.name}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}
    </aside>
  )
})

ProductFilter.displayName = 'ProductFilter'
export default ProductFilter
