import HeroBanner from '../components/HeroBanner.jsx'
import FeaturedCategories from '../components/FeaturedCategories.jsx'
import FeaturedProducts from '../components/FeaturedProducts.jsx'
import Newsletter from '../components/Newsletter.jsx'

function HomePage() {
  return (
    <>
      <HeroBanner />
      <FeaturedCategories />
      <FeaturedProducts />
      <Newsletter />
    </>
  )
}

export default HomePage
