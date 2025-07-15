import PropTypes from 'prop-types';

export default function Filter({ currentFilter, onFilterChange }) {
  
  // TODO: Adicionar filtro por Categoria
  return (
    <section className="filters-section">
      <h2>Filtrar Mapas</h2>
      <div className="filter-buttons">
        <button
          className={`filter-btn ${currentFilter === "all" ? "active" : ""}`}
          data-filter="all"
          onClick={() => onFilterChange("all")}
        >
          <i className="fas fa-globe"></i> Todos
        </button>
        <button
          className={`filter-btn ${currentFilter === "Competitive" ? "active" : ""}`}
          data-filter="Competitive"
          onClick={() => onFilterChange("Competitive")}
        >
          <i className="fas fa-trophy"></i> Competitivos
        </button>
        <button
          className={`filter-btn ${currentFilter === "Popular" ? "active" : ""}`}
          data-filter="Popular"
          onClick={() => onFilterChange("Popular")}
        >
          <i className="fas fa-star"></i> Populares
        </button>
        <button
          className={`filter-btn ${currentFilter === "Casual" ? "active" : ""}`}
          data-filter="Casual"
          onClick={() =>
          onFilterChange("Casual")}
        >
          <i className="fas fa-gamepad"></i> Casual
        </button>
      </div>
    </section>
  )
}

Filter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
}


