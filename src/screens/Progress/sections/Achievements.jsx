export default function Achievements() {
  return (
    <section className="achievements">
      <h2>Conquistas Recentes</h2>
      <div className="achievements-grid">
        <div className="achievement-card earned">
          <div className="achievement-content">
            <div className="achievement-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <h3>Primeira Vitória</h3>
            <p>Completou sua primeira aula</p>
          </div>
          <div className="achievement-status">
            <span className="achievement-date">Conquistado</span>
          </div>
        </div>

        <div className="achievement-card earned">
          <div className="achievement-content">
            <div className="achievement-icon">
              <i className="fas fa-fire"></i>
            </div>
            <h3>Sequência de Ferro</h3>
            <p>Estudou por 7 dias seguidos</p>
          </div>
          <div className="achievement-status">
            <span className="achievement-date">Conquistado</span>
          </div>
        </div>

        <div className="achievement-card earned">
          <div className="achievement-content">
            <div className="achievement-icon">
              <i className="fas fa-star"></i>
            </div>
            <h3>Especialista em Jett</h3>
            <p>Dominou todas as técnicas da Jett</p>
          </div>
          <div className="achievement-status">
            <span className="achievement-date">Conquistado</span>
          </div>
        </div>

        <div className="achievement-card progress">
          <div className="achievement-content">
            <div className="achievement-icon">
              <i className="fas fa-crown"></i>
            </div>
            <h3>Mestre dos Mapas</h3>
            <p>Estude os mapas competitivos</p>
          </div>
          <div className="achievement-status">
            <span className="achievement-date">70% Completo</span>
          </div>
        </div>

        <div className="achievement-card locked">
          <div className="achievement-content">
            <div className="achievement-icon">
              <i className="fas fa-gem"></i>
            </div>
            <h3>Lenda Radiante</h3>
            <p>Complete todas as trilhas de aprendizado</p>
          </div>
          <div className="achievement-status">
            <span className="achievement-date">Bloqueado</span>
          </div>
        </div>

        <div className="achievement-card locked">
          <div className="achievement-content">
            <div className="achievement-icon">
              <i className="fas fa-medal"></i>
            </div>
            <h3>Mentor da Academia</h3>
            <p>Ajude outros 50 estudantes</p>
          </div>
          <div className="achievement-status">
            <span className="achievement-date">Bloqueado</span>
          </div>
        </div>
      </div>
    </section>
  )
}