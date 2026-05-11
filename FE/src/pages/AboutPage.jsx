import SectionHeader from '../components/SectionHeader.jsx'

const stackItems = [
  'Vite cho tốc độ khởi động và HMR nhanh.',
  'React Router để chia layout và điều hướng rõ ràng.',
  'Axios làm tầng giao tiếp với backend hoặc mock API.',
  'Bootstrap để tăng tốc layout responsive và component base.',
]

function AboutPage() {
  return (
    <div className="page-shell">
      <section className="container py-5 py-lg-6">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-6">
            <div className="content-card h-100 p-4 p-lg-5">
              <SectionHeader
                eyebrow="Giới thiệu"
                title="Cấu trúc đủ gọn để hiểu nhanh, đủ rõ để phát triển tiếp"
                description="Trang này mô tả rõ stack và vai trò của từng phần trong project starter."
              />

              <div className="project-list">
                {stackItems.map((item) => (
                  <div className="project-list-item" key={item}>
                    <span className="project-dot" aria-hidden="true" />
                    <p className="mb-0">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="content-card h-100 p-4 p-lg-5">
              <h2 className="section-title mb-3">Folder structure</h2>
              <p className="section-copy mb-4">
                Các thư mục đã được tạo theo đúng nhóm chức năng để bạn dễ duy trì và scale.
              </p>

              <div className="row g-3">
                {['components', 'pages', 'services', 'layouts', 'assets', 'routes'].map((folder) => (
                  <div className="col-sm-6" key={folder}>
                    <div className="metric-card p-3 h-100">
                      <div className="fw-bold text-uppercase small text-secondary mb-2">{folder}</div>
                      <div className="fw-semibold">Đã sẵn sàng sử dụng</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage