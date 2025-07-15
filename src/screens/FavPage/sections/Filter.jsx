export default function Filter() {
  return (
    <section className="favorites-controls">
      <div className="controls-header">
        <h2>Suas Aulas Favoritas (24)</h2>
        <div className="controls-actions">
          <div className="sort-options">
            <select className="sort-select">
              <option value="recent">Mais Recentes</option>
              <option value="alphabetical">Alfabética</option>
              <option value="difficulty">Dificuldade</option>
              <option value="duration">Duração</option>
            </select>
          </div>
          <div className="view-options">
            <button className="view-btn active" dataView="grid">
              <i className="fas fa-th-large"></i>
            </button>
            <button className="view-btn" dataView="list">
              <i className="fas fa-list"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="filter-tabs">
        <button className="filter-tab active" dataFilter="all">
          <i className="fas fa-star"></i> Todas (24)
        </button>
        <button className="filter-tab" dataFilter="agents">
          <i className="fas fa-user-secret"></i> Agentes (8)
        </button>
        <button className="filter-tab" dataFilter="maps">
          <i className="fas fa-map"></i> Mapas (6)
        </button>
        <button className="filter-tab" dataFilter="strategies">
          <i className="fas fa-chess"></i> Estratégias (10)
        </button>
      </div>
    </section>
  )
}