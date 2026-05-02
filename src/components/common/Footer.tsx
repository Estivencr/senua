import { useState } from 'react'
import { isValidEmail } from '../../utils/validators'
import styles from './common.module.css'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (isValidEmail(email)) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerBrand}>
          <span className={styles.footerLogo}>SENUA</span>
          <p className={styles.footerTagline}>Elegancia, sensualidad<br />y exclusividad</p>
          <div className={styles.footerSocials}>
            {['IG', 'FB', 'TK'].map(s => (
              <span key={s} className={styles.socialLink}>{s}</span>
            ))}
          </div>
        </div>

        <div className={styles.footerCol}>
          <h4 className={styles.footerHeading}>Tienda</h4>
          <ul>
            {['Conjuntos', 'Bodys', 'Accesorios', 'Premium', 'Ofertas'].map(item => (
              <li key={item}><span className={styles.footerLink}>{item}</span></li>
            ))}
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4 className={styles.footerHeading}>Ayuda</h4>
          <ul>
            {['Envíos', 'Devoluciones', 'Guía de tallas', 'Contacto', 'FAQ'].map(item => (
              <li key={item}><span className={styles.footerLink}>{item}</span></li>
            ))}
          </ul>
        </div>

        <div className={styles.footerNewsletter}>
          <h4 className={styles.footerHeading}>Newsletter</h4>
          <p className={styles.footerText}>Sé la primera en conocer las novedades y ofertas exclusivas.</p>
          {subscribed ? (
            <p className={styles.subscribedMsg}>¡Gracias por suscribirte!</p>
          ) : (
            <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className={styles.newsletterInput}
                aria-label="Email para newsletter"
              />
              <button type="submit" className={styles.newsletterBtn}>→</button>
            </form>
          )}
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2026 SENUA. Todos los derechos reservados.</p>
        <div className={styles.footerBottomLinks}>
          {['Privacidad', 'Términos', 'Cookies'].map(l => (
            <span key={l} className={styles.footerLink}>{l}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
