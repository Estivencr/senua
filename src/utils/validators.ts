export const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export const isPositiveInt = (n: number): boolean =>
  Number.isInteger(n) && n > 0
