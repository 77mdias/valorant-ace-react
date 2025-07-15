export default function Sentinela() {
  return (
    <div className="role-card sentinel">
      <div className="role-header">
        <div className="role-icon">
          <i className="fas fa-eye selo-white"></i>
        </div>
        <h3>Sentinela</h3>
        <span className="role-badge">Defesa</span>
      </div>
      <div className="role-description">
        <p>
          Agentes defensivos que protegem o time e controlam flancos
          através de utilitários.
        </p>

        <div className="role-characteristics">
          <h4>Características:</h4>
          <ul>
            <li>Defesa de área</li>
            <li>Controle de flancos</li>
            <li>Utilitários defensivos</li>
            <li>Suporte ao time</li>
          </ul>
        </div>

        <div className="role-agents">
          <h4>Agentes:</h4>
          <div className="agents-list">
            <span className="agent-tag">Sage</span>
            <span className="agent-tag">Cypher</span>
            <span className="agent-tag">Killjoy</span>
            <span className="agent-tag">Chamber</span>
            <span className="agent-tag">Deadlock</span>
          </div>
        </div>
      </div>
      <button className="role-learn-btn">
        <i className="fas fa-play"></i> Aprender Função
      </button>
    </div>
  )
}