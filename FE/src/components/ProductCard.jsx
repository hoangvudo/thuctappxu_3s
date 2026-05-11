import React from 'react'

function ProductCard({ product }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden mb-md">
        <img
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
          src={product.image}
          alt={product.name}
        />
        <button className="absolute bottom-0 left-0 w-full bg-primary text-on-primary py-sm font-label-sm text-label-sm uppercase tracking-widest opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          Quick Add
        </button>
      </div>
      <h4 className="font-body-md text-body-md text-primary mb-xs">{product.name}</h4>
      <div className="flex justify-between items-center">
        <span className="font-price text-price text-on-surface">{product.price}</span>
        <div className="flex items-center gap-xs">
          <span
            className="material-symbols-outlined text-[14px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            {product.rating}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
