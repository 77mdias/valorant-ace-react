export default function Controlador() {
  return (
   <div className="role-card controller">
      <div className="role-header">
        <div className="role-icon">
          <i className="fas fa-shield-alt selo-white"></i>
        </div>
        <h3>Controlador</h3>
        <span className="role-badge">Controle</span>
      </div>
      <div className="role-description">
        <p>
          Agentes que controlam o mapa através de smokes e bloqueios
          visuais, dividindo áreas.
        </p>

        <div className="role-characteristics">
          <h4>Características:</h4>
          <ul>
            <li>Controle de mapa</li>
            <li>Smokes e bloqueios</li>
            <li>Divisão de áreas</li>
            <li>Suporte estratégico</li>
          </ul>
        </div>

        <div className="role-agents">
          <h4>Agentes:</h4>
          <div className="agents-list">
            <span className="agent-tag">Omen</span>
            <span className="agent-tag">Brimstone</span>
            <span className="agent-tag">Viper</span>
            <span className="agent-tag">Astra</span>
            <span className="agent-tag">Harbor</span>
          </div>
        </div>
      </div>
      <button className="role-learn-btn">
        <i className="fas fa-play"></i> Aprender Função
      </button>
    </div> 
  )
}