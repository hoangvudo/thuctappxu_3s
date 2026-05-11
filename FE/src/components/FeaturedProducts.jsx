import { Link } from 'react-router-dom'
import ProductCard from './ProductCard.jsx'
import { products } from '../data/catalog.js'

function FeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured)

  return (
    <section className="py-2xl bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex justify-between items-end mb-xl">
          <div>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-[0.2em] mb-sm block">
              Curated Selection
            </span>
            <h2 className="font-display-lg text-headline-md tracking-[0.1em]">NEW ARRIVALS</h2>
          </div>
          <a
            className="font-label-sm text-label-sm text-primary uppercase tracking-widest border-b border-primary pb-1"
            href="/new-collection"
          >
            View All
          </a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-gutter gap-y-xl">
          {featuredProducts.map((product) => (
            <Link key={product.slug} to={`/product/${product.slug}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
