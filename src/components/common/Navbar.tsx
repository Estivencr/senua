import { useState, useCallback } from 'react'
import { useCart } from '../../hooks/useCart'
import { useFilters } from '../../hooks/useFilters'
import styles from './common.module.css'

interface NavbarProps {
  onNavigate: (page: string) => void
  currentPage: string
}

const Navbar = ({ onNavigate, currentPage }: NavbarProps) => {
  const { count, openCart } = useCart()
  const { setFilter } = useFilters()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchVal, setSearchVal] = useState('')

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setSearchVal(val)
    setFilter('search', val)
    if (val.trim()) onNavigate('products')
  }, [setFilter, onNavigate])

  const handleNav = (page: string) => {
    setMenuOpen(false)
    onNavigate(page)
  }

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarInner}>
        <button
          className={styles.navLogo}
          onClick={() => handleNav('home')}
          aria-label="SENUA - Ir al inicio"
        >
          SENUA
        </button>

        <div className={styles.navSearch}>
          <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="search"
            placeholder="Buscar lencería..."
            value={searchVal}
            onChange={handleSearch}
            className={styles.searchInput}
            aria-label="Buscar productos"
          />
        </div>

        <nav className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`} aria-label="Navegación principal">
          {[
            { label: 'Tienda', page: 'products' },
            { label: 'Mi Cuenta', page: 'account' }
          ].map(({ label, page }) => (
            <button
              key={page}
              onClick={() => handleNav(page)}
              className={`${styles.navLink} ${currentPage === page ? styles.navLinkActive : ''}`}
            >
              {label}
            </button>
          ))}
          <button
            className={styles.cartBtn}
            onClick={openCart}
            aria-label={`Carrito (${count} productos)`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.cartIcon}>
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {count > 0 && <span className={styles.cartBadge}>{count}</span>}
          </button>
        </nav>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpen : ''}`} />
          <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpen : ''}`} />
          <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpen : ''}`} />
        </button>
      </div>
    </header>
  )
}

export default Navbar
