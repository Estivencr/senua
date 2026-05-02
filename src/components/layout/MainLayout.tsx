import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import CartDrawer from '../cart/CartDrawer'
import styles from './layout.module.css'

interface MainLayoutProps {
  children: React.ReactNode
  onNavigate: (page: string, category?: string) => void
  currentPage: string
}

const MainLayout = ({ children, onNavigate, currentPage }: MainLayoutProps) => (
  <div className={styles.layout}>
    <Navbar onNavigate={onNavigate} currentPage={currentPage} />
    <main className={styles.main} id="main-content">
      {children}
    </main>
    <Footer />
    <CartDrawer />
  </div>
)

export default MainLayout
