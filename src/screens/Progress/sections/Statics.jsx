export default function Statics() {
  return (
    <section className="progress-stats">
      <h2>Estatísticas de Progresso</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Progresso por Categoria</h3>
          <div className="category-progress">
            <div className="category-item">
              <span className="category-name">Agentes</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "85%" }}></div>
              </div>
              <span className="progress-percentage">85%</span>
            </div>
            <div className="category-item">
              <span className="category-name">Mapas</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "70%" }}></div>
              </div>
              <span className="progress-percentage">70%</span>
            </div>
            <div className="category-item">
              <span className="category-name">Estratégias</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "60%" }}></div>
              </div>
              <span className="progress-percentage">60%</span>
            </div>
            <div className="category-item">
              <span className="category-name">Táticas</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "45%" }}></div>
              </div>
              <span className="progress-percentage">45%</span>
            </div>
          </div>
        </div>

        <div className="stat-card">
          <h3>Atividade Semanal</h3>
          <div className="weekly-activity">
            <div className="activity-chart">
              <div className="chart-bar" style={{ height: "80%" }}>
                <span className="day">Dom</span>
                <span className="hours">4h</span>
              </div>
              <div className="chart-bar" style={{ height: "60%" }}>
                <span className="day">Seg</span>
                <span className="hours">3h</span>
              </div>
              <div className="chart-bar" style={{ height: "90%" }}>
                <span className="day">Ter</span>
                <span className="hours">4.5h</span>
              </div>
              <div className="chart-bar" style={{ height: "40%" }}>
                <span className="day">Qua</span>
                <span className="hours">2h</span>
              </div>
              <div className="chart-bar" style={{ height: "70%" }}>
                <span className="day">Qui</span>
                <span className="hours">3.5h</span>
              </div>
              <div className="chart-bar" style={{ height: "100%" }}>
                <span className="day">Sex</span>
                <span className="hours">5h</span>
              </div>
              <div className="chart-bar" style={{ height: "50%" }}>
                <span className="day">Sáb</span>
                <span className="hours">2.5h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}