export const PRODUCT_CATEGORIES = [
  {
    label: 'First',
    value: 'ui_kits' as const,
    featured: [
      {
        name: 'Editor picks',
        href: `/products?category=ui_kits`,
        imageSrc: '/images/shirt1.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=ui_kits&sort=desc',
        imageSrc: '/images/shirt2.jpg',
      },
      {
        name: 'Bestsellers',
        href: '/products?category=ui_kits',
        imageSrc: '/images/pants1.jpg',
      },
    ],
  },
  {
    label: 'Second',
    value: 'icons' as const,
    featured: [
      {
        name: 'Favorite Product Picks',
        href: `/products?category=icons`,
        imageSrc: '/images/shirt3.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=icons&sort=desc',
        imageSrc: '/images/pants3.jpg',
      },
      {
        name: 'Bestselling',
        href: '/products?category=icons',
        imageSrc: '/images/pants2.jpg',
      },
    ],
  },
]
