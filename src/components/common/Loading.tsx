import styles from './common.module.css'

const Loading = () => (
  <div className={styles.loading} role="status" aria-label="Cargando">
    <span className={styles.spinner} />
  </div>
)

export default Loading
