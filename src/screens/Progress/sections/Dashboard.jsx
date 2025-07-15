export default function Dashboard() {
  return (
    <section className="progress-dashboard">
      <h2>Visão Geral do Progresso</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-header">
            <div className="card-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Aulas Concluídas</h3>
          </div>
          <div className="card-content">
            <div className="progress-circle">
              <div className="circle-progress" data-progress="75">
                <span className="progress-number">75%</span>
              </div>
            </div>
            <p>87 de 116 aulas</p>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <div className="card-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3>Tempo de Estudo</h3>
          </div>
          <div className="card-content">
            <div className="progress-circle">
              <div className="circle-progress" data-progress="60">
                <span className="progress-number">156h</span>
              </div>
            </div>
            <p>Meta: 260h</p>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <div className="card-icon">
              <i className="fas fa-certificate"></i>
            </div>
            <h3>Certificados</h3>
          </div>
          <div className="card-content">
            <div className="progress-circle">
              <div className="circle-progress" data-progress="80">
                <span className="progress-number">24</span>
              </div>
            </div>
            <p>Meta: 30 certificados</p>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <div className="card-icon">
              <i className="fas fa-fire"></i>
            </div>
            <h3>Sequência Atual</h3>
          </div>
          <div className="card-content">
            <div className="progress-circle">
              <div className="circle-progress" data-progress="90">
                <span className="progress-number">12</span>
              </div>
            </div>
            <p>dias consecutivos</p>
          </div>
        </div>
      </div>
    </section>
  )
}