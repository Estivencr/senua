import { useState, useCallback } from 'react'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import { useProductStore } from './store'

type Page = 'home' | 'products' | 'cart' | 'account' | '404'

const App = () => {
  const [page, setPage] = useState<Page>('home')
  const setFilter = useProductStore(s => s.setFilter)

  const handleNavigate = useCallback((p: string, category?: string) => {
    if (p === 'products' && category) {
      setFilter('category', category)
    } else if (p === 'products') {
      setFilter('category', '')
    }
    const valid: Page[] = ['home', 'products', 'cart', 'account']
    setPage(valid.includes(p as Page) ? (p as Page) : '404')
  }, [setFilter])

  const renderPage = () => {
    switch (page) {
      case 'home': return <Home onNavigate={handleNavigate} />
      case 'products': return <Products />
      case 'cart': return <Cart onNavigate={handleNavigate} />
      default: return <NotFound onNavigate={handleNavigate} />
    }
  }

  return (
    <MainLayout onNavigate={handleNavigate} currentPage={page}>
      {renderPage()}
    </MainLayout>
  )
}

export default App
