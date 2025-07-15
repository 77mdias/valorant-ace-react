

export default function Progresso() {
  return (
    <section className="recent-progress">
      <h2>Seu Progresso</h2>
      <div className="progress-grid">
        <div className="progress-card">
          <div className="progress-header">
            <h3>Aulas Concluídas</h3>
            <span className="progress-number">87</span>
          </div>
          <div className="progress-content">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '87%' }}></div>
            </div>
            <p>87 de 100 aulas concluídas</p>
          </div>
        </div>

        <div className="progress-card">
          <div className="progress-header">
            <h3>Certificados</h3>
            <span className="progress-number">24</span>
          </div>
          <div className="progress-content">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '80%' }}></div>
            </div>
            <p>24 certificados obtidos</p>
          </div>
        </div>

        <div className="progress-card">
          <div className="progress-header">
            <h3>Horas de Estudo</h3>
            <span className="progress-number">156</span>
          </div>
          <div className="progress-content">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '95%' }}></div>
            </div>
            <p>156 horas de estudo registradas</p>
          </div>
        </div>
      </div>
    </section>
  )
}