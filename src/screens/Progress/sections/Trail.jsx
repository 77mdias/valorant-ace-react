
export default function Trail() {
  return (
    <section className="learning-path">
      <h2>Trilha de Aprendizado</h2>
      <div className="path-container">
        <div className="path-item completed">
          <div className="path-icon">
            <i className="fas fa-check selo-white"></i>
          </div>
          <div className="path-content">
            <h3>Fundamentos do Valorant</h3>
            <p>Aprenda os conceitos básicos do jogo</p>
            <div className="path-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "100%" }}></div>
              </div>
              <span className="progress-text">100% Completo</span>
            </div>
          </div>
        </div>

        <div className="path-item completed">
          <div className="path-icon">
            <i className="fas fa-check selo-white"></i>
          </div>
          <div className="path-content">
            <h3>Agentes Duelistas</h3>
            <p>Domine os agentes de entrada</p>
            <div className="path-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "100%" }}></div>
              </div>
              <span className="progress-text">100% Completo</span>
            </div>
          </div>
        </div>

        <div className="path-item in-progress">
          <div className="path-icon">
            <i className="fas fa-play selo-white"></i>
          </div>
          <div className="path-content">
            <h3>Estratégias de Mapas</h3>
            <p>Aprenda as estratégias para cada mapa</p>
            <div className="path-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "65%" }}></div>
              </div>
              <span className="progress-text">65% Completo</span>
            </div>
          </div>
        </div>

        <div className="path-item locked">
          <div className="path-icon">
            <i className="fas fa-lock selo-white"></i>
          </div>
          <div className="path-content">
            <h3>Táticas Avançadas</h3>
            <p>Estratégias para jogadores experientes</p>
            <div className="path-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "0%" }}></div>
              </div>
              <span className="progress-text">Bloqueado</span>
            </div>
          </div>
        </div>

        <div className="path-item locked">
          <div className="path-icon">
            <i className="fas fa-lock selo-white"></i>
          </div>
          <div className="path-content">
            <h3>Coaching Individual</h3>
            <p>Sessões personalizadas de treinamento</p>
            <div className="path-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "0%" }}></div>
              </div>
              <span className="progress-text">Bloqueado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}