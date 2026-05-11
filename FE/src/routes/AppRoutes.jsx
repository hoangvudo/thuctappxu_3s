import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import CategoryPage from '../pages/CategoryPage.jsx'
import HomePage from '../pages/HomePage.jsx'
import ProductDetailPage from '../pages/ProductDetailPage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="men" element={<CategoryPage />} />
        <Route path="women" element={<CategoryPage />} />
        <Route path="accessories" element={<CategoryPage />} />
        <Route path="new-collection" element={<CategoryPage />} />
        <Route path="sale" element={<CategoryPage />} />
        <Route path="product/:slug" element={<ProductDetailPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
