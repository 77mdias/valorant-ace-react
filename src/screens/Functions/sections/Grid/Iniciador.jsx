export default function Iniciador() {
  return (
    <div className="role-card initiator">
      <div className="role-header">
        <div className="role-icon">
          <i className="fas fa-bullseye selo-white"></i>
        </div>
        <h3>Iniciador</h3>
        <span className="role-badge">Suporte</span>
      </div>
      <div className="role-description">
        <p>
          Agentes que coletam informações e criam oportunidades para o
          time através de reconhecimento.
        </p>

        <div className="role-characteristics">
          <h4>Características:</h4>
          <ul>
            <li>Coleta de informações</li>
            <li>Reconhecimento de área</li>
            <li>Flush de inimigos</li>
            <li>Suporte ao entry fragger</li>
          </ul>
        </div>

        <div className="role-agents">
          <h4>Agentes:</h4>
          <div className="agents-list">
            <span className="agent-tag">Sova</span>
            <span className="agent-tag">Breach</span>
            <span className="agent-tag">Skye</span>
            <span className="agent-tag">KAY/O</span>
            <span className="agent-tag">Fade</span>
            <span className="agent-tag">Gekko</span>
          </div>
        </div>
      </div>
      <button className="role-learn-btn">
        <i className="fas fa-play"></i> Aprender Função
      </button>
    </div>
  )
}