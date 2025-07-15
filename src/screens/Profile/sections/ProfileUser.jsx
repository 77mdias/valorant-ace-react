export default function ProfileUser() {
  return (
    <div className="profile-header">
      <div className="profile-avatar">
        <div className="avatar-circle">
          <i className="fas fa-user selo-white"></i>
        </div>
        <button className="change-avatar-btn">
          <i className="fas fa-camera selo-white"></i>
        </button>
      </div>
      <div className="profile-info">
        <h2>ValorantPro#2024</h2>
        <p className="profile-title">Estudante Diamante</p>
        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-value">87</span>
            <span className="stat-label">Aulas Concluídas</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">24</span>
            <span className="stat-label">Certificados</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">156</span>
            <span className="stat-label">Horas de Estudo</span>
          </div>
        </div>
      </div>
      <div className="profile-actions">
        <button className="btn-primary">
          <i className="fas fa-edit"></i> Editar Perfil
        </button>
        <button className="btn-secondary">
          <i className="fas fa-share"></i> Compartilhar
        </button>
      </div>
    </div>
  )
}