export default function Informations() {
  return (
    <div className="info-card">
      <div className="info-header">
        <h3><i className="fas fa-gamepad"></i> Informações de Jogo</h3>
      </div>
      <div className="info-content">
        <div className="info-row">
          <span className="info-label">Rank Atual:</span>
          <span className="info-value">
            <span className="rank-badge diamond">Diamante 2</span>
          </span>
        </div>
        <div className="info-row">
          <span className="info-label">Agente Principal:</span>
          <span className="info-value">Jett</span>
        </div>
        <div className="info-row">
          <span className="info-label">Função Favorita:</span>
          <span className="info-value">Duelista</span>
        </div>
        <div className="info-row">
          <span className="info-label">Servidor:</span>
          <span className="info-value">Brasil</span>
        </div>
      </div>
    </div>
  )
}