import { memo } from 'react'
import styles from './common.module.css'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  fullWidth?: boolean
}

const Button = memo(({ variant = 'primary', size = 'md', fullWidth = false, className = '', children, ...rest }: ButtonProps) => {
  const cls = [
    styles.btn,
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
    fullWidth ? styles['btn--full'] : '',
    className
  ].filter(Boolean).join(' ')

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
})

Button.displayName = 'Button'
export default Button
