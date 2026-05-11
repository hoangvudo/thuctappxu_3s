import { Link, useParams } from 'react-router-dom'
import { getProductBySlug, getRelatedProducts } from '../data/catalog.js'

function ProductDetailPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const relatedProducts = getRelatedProducts(slug)

  if (!product) {
    return (
      <div className="container py-5 py-lg-6">
        <div className="content-card p-4 p-lg-5 text-center">
          <div className="eyebrow mb-3">404</div>
          <h1 className="section-title mb-3">Sản phẩm không tồn tại</h1>
          <p className="section-copy mb-4">Trang chi tiết này chưa có dữ liệu trong catalog.</p>
          <Link to="/" className="btn btn-primary">Quay về trang chủ</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page-shell">
      <section className="container py-5 py-lg-6">
        <div className="row g-4 align-items-start">
          <div className="col-lg-7">
            <div className="content-card p-3 p-lg-4">
              <img className="w-100 rounded-4" src={product.image} alt={product.name} />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="content-card p-4 p-lg-5 h-100">
              <div className="eyebrow mb-3">{product.tag}</div>
              <h1 className="section-title mb-3">{product.name}</h1>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="h3 mb-0">{product.price}</span>
                <div className="d-flex align-items-center gap-xs">
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="fw-semibold">{product.rating}</span>
                </div>
              </div>

              <p className="section-copy mb-4">{product.description}</p>

              <div className="mb-4">
                <div className="fw-semibold mb-2">Sizes</div>
                <div className="d-flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span key={size} className="badge rounded-pill text-bg-light text-dark px-3 py-2">{size}</span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <div className="fw-semibold mb-2">Colors</div>
                <div className="d-flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <span key={color} className="badge rounded-pill text-bg-dark px-3 py-2">{color}</span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <div className="fw-semibold mb-2">Details</div>
                <ul className="project-list mb-0 ps-0">
                  {product.details.map((detail) => (
                    <li key={detail} className="project-list-item list-unstyled">
                      <span className="project-dot" aria-hidden="true" />
                      <p className="mb-0">{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-primary">Add to cart</button>
                <Link className="btn btn-outline-primary" to={`/${product.category}`}>
                  View category
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="container pb-5">
          <div className="d-flex justify-content-between align-items-end mb-xl">
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-[0.2em] mb-sm block">
                Related pieces
              </span>
              <h2 className="font-display-lg text-headline-md tracking-[0.1em]">YOU MAY ALSO LIKE</h2>
            </div>
          </div>

          <div className="row g-4">
            {relatedProducts.map((item) => (
              <div className="col-md-4" key={item.slug}>
                <Link to={`/product/${item.slug}`} className="content-card d-block p-3 h-100">
                  <img className="w-100 rounded-4 mb-3" src={item.image} alt={item.name} />
                  <div className="fw-semibold mb-1">{item.name}</div>
                  <div className="section-copy">{item.price}</div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default ProductDetailPage