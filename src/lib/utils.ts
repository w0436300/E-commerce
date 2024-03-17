import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//Format currency price
export function formatPrice(
  price: number | string,
  options :{
    currency ? : 'USD' | 'EUR' | 'CAD',
    notation?: Intl.NumberFormatOptions['notation']
  } = {}
) {
  const { currency = 'CAD', notation = 'compact' } = options
  const numericPrice =
    typeof price === 'string' ? parseFloat(price) : price

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice)
    // .replace('A', '')

}

export const round2 = (num: number) =>
  Math.round((num + Number.EPSILON) * 100) / 100
