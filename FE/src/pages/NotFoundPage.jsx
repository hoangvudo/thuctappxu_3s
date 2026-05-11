import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="page-shell d-flex align-items-center">
      <div className="container py-5 py-lg-6">
        <div className="content-card text-center p-5 mx-auto" style={{ maxWidth: '42rem' }}>
          <div className="eyebrow mb-3">404</div>
          <h1 className="display-5 fw-bold mb-3">Trang không tồn tại</h1>
          <p className="section-copy lead mb-4">
            Đường dẫn bạn vừa mở không được định nghĩa trong router của project này.
          </p>
          <Link to="/" className="btn btn-primary">
            Quay về trang chủ
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage