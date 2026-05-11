import { Outlet } from 'react-router-dom'
import TopNav from '../components/TopNav.jsx'
import Footer from '../components/Footer.jsx'

function MainLayout() {
  return (
    <div className="app-shell d-flex flex-column">
      <TopNav />
      <main className="flex-grow-1 mt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout