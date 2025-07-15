export default function Dados() {
  return (
    <div className="info-card">
      <div className="info-header">
        <h3><i className="fas fa-user"></i> Dados Básicos</h3>
      </div>
      <div className="info-content">
        <div className="info-row">
          <span className="info-label">Nome Completo:</span>
          <span className="info-value">João Silva</span>
        </div>
        <div className="info-row">
          <span className="info-label">Email:</span>
          <span className="info-value">joao.silva@email.com</span>
        </div>
        <div className="info-row">
          <span className="info-label">Data de Nascimento:</span>
          <span className="info-value">15/03/1995</span>
        </div>
        <div className="info-row">
          <span className="info-label">Localização:</span>
          <span className="info-value">São Paulo, Brasil</span>
        </div>
      </div>
    </div>
  )
}