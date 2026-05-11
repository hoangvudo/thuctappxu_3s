export const menuItems = [
  { label: 'Home', to: '/' },
  { label: 'Men', to: '/men' },
  { label: 'Women', to: '/women' },
  { label: 'Accessories', to: '/accessories' },
  { label: 'New Collection', to: '/new-collection' },
  { label: 'Sale', to: '/sale' },
]

export const categories = [
  {
    slug: 'men',
    title: 'Men',
    subtitle: 'Clean tailoring and elevated essentials for everyday wear.',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'women',
    title: 'Women',
    subtitle: 'Soft structure, fluid layers, and refined silhouettes.',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'accessories',
    title: 'Accessories',
    subtitle: 'Finishing touches designed to complete the look.',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80',
  },
]

export const collections = [
  {
    slug: 'new-collection',
    title: 'New Collection',
    description: 'Fresh arrivals shaped by clean lines, tactile fabrics, and modern proportions.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'sale',
    title: 'Sale',
    description: 'Selected pieces from current edits with limited-time pricing.',
    image:
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=80',
  },
]

export const products = [
  {
    slug: 'linen-overshirt',
    name: 'Linen Overshirt',
    tag: 'New In',
    category: 'men',
    collections: ['new-collection'],
    price: '$128',
    rating: '4.9',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    description:
      'A lightweight overshirt cut from breathable linen with a relaxed fit and soft hand feel.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Stone', 'Olive', 'Black'],
    details: ['Breathable linen blend', 'Relaxed shoulder line', 'Button front closure'],
  },
  {
    slug: 'relaxed-tailored-trouser',
    name: 'Relaxed Tailored Trouser',
    tag: 'Editor Pick',
    category: 'men',
    collections: ['new-collection'],
    price: '$148',
    rating: '4.8',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80',
    description:
      'A modern trouser with a softly tapered leg, pressed crease, and elevated drape.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Charcoal', 'Sand', 'Navy'],
    details: ['Mid-rise fit', 'Pressed front crease', 'Invisible side pockets'],
  },
  {
    slug: 'minimal-sneaker',
    name: 'Minimal Sneaker',
    tag: 'Best Seller',
    category: 'men',
    collections: ['sale'],
    price: '$96',
    rating: '4.7',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    description: 'A clean low-top sneaker finished with smooth panels and a cushioned sole.',
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: ['White', 'Off White', 'Black'],
    details: ['Leather upper', 'Cushioned footbed', 'Rubber outsole'],
  },
  {
    slug: 'structured-blazer',
    name: 'Structured Blazer',
    tag: 'Signature',
    category: 'women',
    collections: ['new-collection'],
    price: '$218',
    rating: '5.0',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    description: 'A sharply tailored blazer with a defined waist and a fluid, polished drape.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Ivory', 'Black', 'Taupe'],
    details: ['Fully lined', 'Peak lapel', 'Single-button closure'],
  },
  {
    slug: 'silk-midi-dress',
    name: 'Silk Midi Dress',
    tag: 'Exclusive',
    category: 'women',
    collections: ['new-collection'],
    price: '$198',
    rating: '4.9',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
    description: 'A bias-cut midi dress in a soft silk finish with effortless movement.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Pearl', 'Rose', 'Black'],
    details: ['Bias cut silhouette', 'Adjustable straps', 'Soft satin sheen'],
  },
  {
    slug: 'cashmere-knit-top',
    name: 'Cashmere Knit Top',
    tag: 'Limited',
    category: 'women',
    collections: ['sale'],
    price: '$124',
    rating: '4.8',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
    description: 'A compact knit top made from soft cashmere with a slightly cropped profile.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Cream', 'Camel', 'Black'],
    details: ['Cashmere blend', 'Ribbed hem', 'Lightweight feel'],
  },
  {
    slug: 'leather-shoulder-bag',
    name: 'Leather Shoulder Bag',
    tag: 'Accessory',
    category: 'accessories',
    collections: ['new-collection', 'sale'],
    price: '$164',
    rating: '4.9',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80',
    description: 'A soft-structured leather bag with a removable strap and polished hardware.',
    sizes: ['One Size'],
    colors: ['Black', 'Cognac', 'Bone'],
    details: ['Genuine leather', 'Magnetic closure', 'Adjustable strap'],
  },
  {
    slug: 'silk-scarf',
    name: 'Silk Scarf',
    tag: 'Accessory',
    category: 'accessories',
    collections: ['sale'],
    price: '$58',
    rating: '4.6',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=900&q=80',
    description: 'A printed silk scarf that adds texture and color to a layered outfit.',
    sizes: ['One Size'],
    colors: ['Ivory Print', 'Ink Print'],
    details: ['Pure silk', 'Rolled hem', 'Lightweight drape'],
  },
]

export function getCategoryBySlug(slug) {
  return categories.find((category) => category.slug === slug)
}

export function getCollectionBySlug(slug) {
  return collections.find((collection) => collection.slug === slug)
}

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(slug) {
  return products.filter((product) => product.category === slug)
}

export function getProductsForCollection(slug) {
  return products.filter((product) => product.collections?.includes(slug))
}

export function getRelatedProducts(slug, limit = 3) {
  const product = getProductBySlug(slug)

  if (!product) {
    return []
  }

  return products
    .filter((item) => item.slug !== slug && item.category === product.category)
    .slice(0, limit)
}