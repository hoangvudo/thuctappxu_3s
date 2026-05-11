import { Link } from 'react-router-dom'
import { categories } from '../data/catalog.js'

function FeaturedCategories() {
  return (
    <section className="py-2xl px-gutter max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter h-[800px]">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/${category.slug}`}
            className={`md:${category.slug === 'men' ? 'col-span-8' : 'col-span-4'} relative group overflow-hidden rounded-xl`}
          >
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={category.image}
              alt={category.title}
            />
            <div className={`absolute ${category.slug === 'men' ? 'bottom-lg left-lg' : 'bottom-md left-md'}`}>
              <h3 className={`font-headline-md ${category.slug === 'men' ? 'text-display-lg' : 'text-headline-md'} text-white mb-sm`}>
                {category.title}
              </h3>
              <p className="text-white/80 mb-sm max-w-sm">{category.subtitle}</p>
              <span className="font-label-sm text-label-sm text-white uppercase tracking-widest border-b border-white pb-1">
                Explore
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default FeaturedCategories
