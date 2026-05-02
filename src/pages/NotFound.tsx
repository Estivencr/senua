import styles from './pages.module.css'

interface NotFoundProps {
  onNavigate: (page: string) => void
}

const NotFound = ({ onNavigate }: NotFoundProps) => (
  <div className={styles.notFound}>
    <span className={styles.notFoundCode}>404</span>
    <h1 className={styles.notFoundTitle}>Página no encontrada</h1>
    <p className={styles.notFoundText}>La página que buscas no existe o fue movida.</p>
    <button className={styles.notFoundCta} onClick={() => onNavigate('home')}>
      Volver al inicio
    </button>
  </div>
)

export default NotFound
