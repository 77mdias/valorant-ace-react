export default function Estatistic() {
  return (
    <div className="info-card">
      <div className="info-header">
        <h3><i className="fas fa-chart-line"></i> Estatísticas Gerais</h3>
      </div>
      <div className="info-content">
        <div className="info-row">
          <span className="info-label">Tempo na Plataforma:</span>
          <span className="info-value">3 meses</span>
        </div>
        <div className="info-row">
          <span className="info-label">Sequência Atual:</span>
          <span className="info-value">12 dias</span>
        </div>
        <div className="info-row">
          <span className="info-label">Taxa de Conclusão:</span>
          <span className="info-value">94%</span>
        </div>
        <div className="info-row">
          <span className="info-label">Última Atividade:</span>
          <span className="info-value">Hoje, 14:30</span>
        </div>
      </div>
    </div>
  )
}