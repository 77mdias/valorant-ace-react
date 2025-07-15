import PropTypes from 'prop-types';

export default function Filter({ currentFilter, onFilterChange }) {
  return (

    // TODO: Adicionar filtro por habilidade
    <section className="filters-section">
      <h2>Filtrar por Função</h2>
      <div className="filter-buttons">
        <button
          className={`filter-btn ${currentFilter === "all" ? "active" : ""}`}
          data-filter="all"
          onClick={() => onFilterChange("all")}
        >
          <i className="fas fa-users"></i> Todos
        </button>
        <button
          className={`filter-btn ${currentFilter === "duelist" ? "active" : ""}`}
          data-filter="duelist"
          onClick={() => onFilterChange("duelist")}
        >
          <i className="fas fa-sword"></i> Duelista
        </button>
        <button
          className={`filter-btn ${currentFilter === "initiator" ? "active" : ""}`}
          data-filter="initiator"
          onClick={() => onFilterChange("initiator")}
        >
          <i className="fas fa-bullseye"></i> Iniciador
        </button>
        <button
          className={`filter-btn ${currentFilter === "controller" ? "active" : ""}`}
          data-filter="controller"
          onClick={() => onFilterChange("controller")}
        >
          <i className="fas fa-shield-alt"></i> Controlador
        </button>
        <button
          className={`filter-btn ${currentFilter === "sentinel" ? "active" : ""}`}
          data-filter="sentinel"
          onClick={() => onFilterChange("sentinel")}
        >
          <i className="fas fa-eye"></i> Sentinela
        </button>
      </div>
    </section>
  );
}

Filter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired
};