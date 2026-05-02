import HeroCarousel from '../components/home/HeroCarousel'
import CategoryGrid from '../components/home/CategoryGrid'
import ProductGrid from '../components/home/ProductGrid'
import { PRODUCTS } from '../data/products'

interface HomeProps {
  onNavigate: (page: string, category?: string) => void
}

const featuredProducts = PRODUCTS.filter(p => p.onSale || p.rating >= 4.7).slice(0, 4)

const Home = ({ onNavigate }: HomeProps) => {
  const handleNavigate = (page: string, category?: string) => {
    if (category) {
      onNavigate(page, category)
    } else {
      onNavigate(page)
    }
  }

  return (
    <>
      <HeroCarousel onNavigate={onNavigate} />
      <CategoryGrid onNavigate={handleNavigate} />
      <ProductGrid
        products={featuredProducts}
        title="Destacados"
        subtitle="Piezas seleccionadas por nuestros expertos"
        onNavigate={onNavigate}
      />
    </>
  )
}

export default Home
