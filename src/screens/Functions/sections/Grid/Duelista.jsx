export default function Duelista() {
  return (
    <div className="role-card duelist">
      <div className="role-header">
        <div className="role-icon">
          <i className="fa-solid fa-khanda selo-white"></i>
        </div>
        <h3>Duelista</h3>
        <span className="role-badge">Ataque</span>
      </div>
      <div className="role-description">
        <p>
          Agentes focados em eliminar inimigos e abrir caminho para o
          time. São os entry fraggers da equipe.
        </p>

        <div className="role-characteristics">
          <h4>Características:</h4>
          <ul>
            <li>Alta mobilidade</li>
            <li>Habilidades de entrada</li>
            <li>Foco em eliminations</li>
            <li>Criar espaço para o time</li>
          </ul>
        </div>

        <div className="role-agents">
          <h4>Agentes:</h4>
          <div className="agents-list">
            <span className="agent-tag">Jett</span>
            <span className="agent-tag">Reyna</span>
            <span className="agent-tag">Phoenix</span>
            <span className="agent-tag">Raze</span>
            <span className="agent-tag">Yoru</span>
            <span className="agent-tag">Neon</span>
          </div>
        </div>
      </div>
      <button className="role-learn-btn">
        <i className="fas fa-play"></i> Aprender Função
      </button>
    </div>
  )
}