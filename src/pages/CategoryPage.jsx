import { Link, useParams } from 'react-router-dom'
import { getCategoryBySlug, getProductsByCategory, getCollectionBySlug, getProductsForCollection } from '../data/catalog.js'

function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-xl">
      {products.map((product) => (
        <Link key={product.slug} to={`/product/${product.slug}`} className="group cursor-pointer">
          <div className="relative aspect-[3/4] overflow-hidden mb-md rounded-xl bg-surface-container-low">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={product.image}
              alt={product.name}
            />
            <span className="absolute top-3 left-3 bg-surface text-primary text-[10px] uppercase tracking-[0.2em] px-3 py-2 rounded-full shadow-sm">
              {product.tag}
            </span>
          </div>
          <h4 className="font-body-md text-body-md text-primary mb-xs">{product.name}</h4>
          <div className="flex justify-between items-center">
            <span className="font-price text-price text-on-surface">{product.price}</span>
            <div className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">{product.rating}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

function CategoryPage() {
  const { slug } = useParams()
  const category = getCategoryBySlug(slug)
  const collection = getCollectionBySlug(slug)
  const products = category ? getProductsByCategory(slug) : getProductsForCollection(slug)

  if (!category && !collection) {
    return (
      <div className="container py-5 py-lg-6">
        <div className="content-card p-4 p-lg-5 text-center">
          <div className="eyebrow mb-3">404</div>
          <h1 className="section-title mb-3">Danh mục không tồn tại</h1>
          <p className="section-copy mb-4">Menu này chưa được định nghĩa trong catalog hiện tại.</p>
          <Link to="/" className="btn btn-primary">Quay về trang chủ</Link>
        </div>
      </div>
    )
  }

  const title = category?.title || collection?.title
  const description = category?.subtitle || collection?.description
  const heroImage = category?.image || products[0]?.image

  return (
    <div className="page-shell">
      <section className="container py-5 py-lg-6">
        <div className="content-card overflow-hidden">
          <div className="row g-0 align-items-stretch">
            <div className="col-lg-6">
              <img className="w-100 h-100 object-fit-cover" style={{ minHeight: '24rem' }} src={heroImage} alt={title} />
            </div>
            <div className="col-lg-6 p-4 p-lg-5 d-flex align-items-center">
              <div>
                <div className="eyebrow mb-3">Collection</div>
                <h1 className="section-title mb-3">{title}</h1>
                <p className="section-copy lead mb-4">{description}</p>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge rounded-pill text-bg-dark">{products.length} items</span>
                  <span className="badge rounded-pill text-bg-secondary">Responsive grid</span>
                  <span className="badge rounded-pill text-bg-light text-dark">Detail pages enabled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-5">
        <div className="d-flex justify-content-between align-items-end mb-xl">
          <div>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-[0.2em] mb-sm block">
              Curated selection
            </span>
            <h2 className="font-display-lg text-headline-md tracking-[0.1em]">{title} PRODUCTS</h2>
          </div>
          <Link className="font-label-sm text-label-sm text-primary uppercase tracking-widest border-b border-primary pb-1" to="/">
            Back to home
          </Link>
        </div>

        <ProductGrid products={products} />
      </section>
    </div>
  )
}

export default CategoryPage