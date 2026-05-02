import { useState, useEffect, useCallback } from 'react'
import { HERO_SLIDES } from '../../utils/constants'
import styles from './home.module.css'

interface HeroCarouselProps {
  onNavigate: (page: string) => void
}

const HeroCarousel = ({ onNavigate }: HeroCarouselProps) => {
  const [active, setActive] = useState(0)

  const next = useCallback(() => setActive(i => (i + 1) % HERO_SLIDES.length), [])

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  const slide = HERO_SLIDES[active]

  return (
    <section className={styles.hero} aria-label="Carousel principal">
      <div
        className={styles.heroSlide}
        style={{ background: slide.bg }}
        key={slide.id}
      >
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>{slide.subtitle}</p>
          <h1 className={styles.heroTitle} style={{ color: slide.highlight }}>
            {slide.title.split('\n').map((line, i) => (
              <span key={i} className={styles.heroTitleLine}>{line}</span>
            ))}
          </h1>
          <button
            className={styles.heroCta}
            onClick={() => onNavigate('products')}
            style={{ borderColor: slide.highlight, color: slide.highlight }}
          >
            {slide.cta}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.heroCtaIcon}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className={styles.heroDecor}>
          <div className={styles.heroDecorCircle} style={{ borderColor: `${slide.highlight}30` }} />
          <div className={styles.heroDecorCircle2} style={{ borderColor: `${slide.highlight}15` }} />
        </div>
      </div>

      <div className={styles.heroIndicators} role="tablist">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.id}
            className={`${styles.heroIndicator} ${i === active ? styles.heroIndicatorActive : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            role="tab"
            aria-selected={i === active}
          />
        ))}
      </div>

      <button
        className={`${styles.heroArrow} ${styles.heroArrowPrev}`}
        onClick={() => setActive(i => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
        aria-label="Slide anterior"
      >
        ‹
      </button>
      <button
        className={`${styles.heroArrow} ${styles.heroArrowNext}`}
        onClick={next}
        aria-label="Siguiente slide"
      >
        ›
      </button>
    </section>
  )
}

export default HeroCarousel
