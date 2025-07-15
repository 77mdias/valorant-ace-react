import { cardImages } from '../../../assets/images'
import { mapImages } from '../../../assets/images'

export default function Grid() {
  return (
    <section className="favorites-grid">
      <div className="favorites-container">
        {/* Aula Favorita 1 */}
        <div className="favorite-card" dataCategory="agents">
          <div className="card-header">
            <div
              className="card-image"
              style={{
                backgroundImage: `url(${cardImages['jett-card']})`,
              }}
            >
              <button className="favorite-btn favorited">
                <i className="fas fa-heart"></i>
              </button>
              <div className="card-overlay">
                <button className="play-btn">
                  <i className="fas fa-play"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="card-badges">
              <span className="difficulty-badge easy">Iniciante</span>
              <span className="category-badge">Agentes</span>
            </div>
            <h3>Jett - Movimentos Ágeis</h3>
            <p>Domine as habilidades de mobilidade da Jett</p>
            <div className="card-meta">
              <span className="duration">
                <i className="fas fa-clock"></i> 25 min
              </span>
              <span className="progress">
                <i className="fas fa-check-circle"></i> Completo
              </span>
            </div>
            <div className="card-actions">
              <button className="btn-primary">
                <i className="fas fa-play"></i> Assistir
              </button>
              <button className="btn-secondary">
                <i className="fas fa-download"></i> Baixar
              </button>
            </div>
          </div>
        </div>

        {/* Aula Favorita 2 */}
        <div className="favorite-card" dataCategory="strategies">
          <div className="card-header">
            <div
              className="card-image"
              style={{
                backgroundImage: `url(${cardImages['sova-card']})`,
              }}
            >
              <button className="favorite-btn favorited">
                <i className="fas fa-heart"></i>
              </button>
              <div className="card-overlay">
                <button className="play-btn">
                  <i className="fas fa-play"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="card-badges">
              <span className="difficulty-badge medium">Intermediário</span>
              <span className="category-badge">Estratégias</span>
            </div>
            <h3>Sova - Reconhecimento</h3>
            <p>Use flechas de reconhecimento eficientemente</p>
            <div className="card-meta">
              <span className="duration">
                <i className="fas fa-clock"></i> 18 min
              </span>
              <span className="progress">
                <i className="fas fa-spinner"></i> 75%
              </span>
            </div>
            <div className="card-actions">
              <button className="btn-primary">
                <i className="fas fa-play"></i> Continuar
              </button>
              <button className="btn-secondary">
                <i className="fas fa-download"></i> Baixar
              </button>
            </div>
          </div>
        </div>

        {/* Aula Favorita 3 */}
        <div className="favorite-card" dataCategory="maps">
          <div className="card-header">
            <div
              className="card-image"
              style={{
                backgroundImage: `url(${mapImages.bind})`,
              }}
            >
              <button className="favorite-btn favorited">
                <i className="fas fa-heart"></i>
              </button>
              <div className="card-overlay">
                <button className="play-btn">
                  <i className="fas fa-play"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="card-badges">
              <span className="difficulty-badge hard">Avançado</span>
              <span className="category-badge">Mapas</span>
            </div>
            <h3>Bind - Estratégias Avançadas</h3>
            <p>Domine as rotações e posicionamentos no Bind</p>
            <div className="card-meta">
              <span className="duration">
                <i className="fas fa-clock"></i> 32 min
              </span>
              <span className="progress">
                <i className="fas fa-play-circle"></i> Não iniciado
              </span>
            </div>
            <div className="card-actions">
              <button className="btn-primary">
                <i className="fas fa-play"></i> Iniciar
              </button>
              <button className="btn-secondary">
                <i className="fas fa-download"></i> Baixar
              </button>
            </div>
          </div>
        </div>

        {/* Aula Favorita 4 */}
        <div className="favorite-card" dataCategory="agents">
          <div className="card-header">
            <div
              className="card-image"
              style={{
                backgroundImage: `url(${cardImages['reyna-card']})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <button className="favorite-btn favorited">
                <i className="fas fa-heart"></i>
              </button>
              <div className="card-overlay">
                <button className="play-btn">
                  <i className="fas fa-play"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="card-badges">
              <span className="difficulty-badge hard">Avançado</span>
              <span className="category-badge">Agentes</span>
            </div>
            <h3>Reyna - Maximizar Frags</h3>
            <p>Técnicas avançadas para maximizar eliminações</p>
            <div className="card-meta">
              <span className="duration">
                <i className="fas fa-clock"></i> 28 min
              </span>
              <span className="progress">
                <i className="fas fa-check-circle"></i> Completo
              </span>
            </div>
            <div className="card-actions">
              <button className="btn-primary">
                <i className="fas fa-play"></i> Revisar
              </button>
              <button className="btn-secondary">
                <i className="fas fa-download"></i> Baixar
              </button>
            </div>
          </div>
        </div>

        {/* Aula Favorita 5 */}
        <div className="favorite-card" dataCategory="strategies">
          <div className="card-header">
            <div
              className="card-image"
              style={{
                backgroundImage: `url(${cardImages['omen-card']})`,
              }}
            >
              <button className="favorite-btn favorited">
                <i className="fas fa-heart"></i>
              </button>
              <div className="card-overlay">
                <button className="play-btn">
                  <i className="fas fa-play"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="card-badges">
              <span className="difficulty-badge hard">Avançado</span>
              <span className="category-badge">Estratégias</span>
            </div>
            <h3>Omen - Smokes Estratégicas</h3>
            <p>Posicionamento estratégico de smokes</p>
            <div className="card-meta">
              <span className="duration">
                <i className="fas fa-clock"></i> 22 min
              </span>
              <span className="progress">
                <i className="fas fa-spinner"></i> 40%
              </span>
            </div>
            <div className="card-actions">
              <button className="btn-primary">
                <i className="fas fa-play"></i> Continuar
              </button>
              <button className="btn-secondary">
                <i className="fas fa-download"></i> Baixar
              </button>
            </div>
          </div>
        </div>

        {/* Aula Favorita 6 */}
        <div className="favorite-card" dataCategory="agents">
          <div className="card-header">
            <div
              className="card-image"
              style={{
                backgroundImage: `url(${cardImages['sage-card']})`,
              }}
            >
              <button className="favorite-btn favorited">
                <i className="fas fa-heart"></i>
              </button>
              <div className="card-overlay">
                <button className="play-btn">
                  <i className="fas fa-play"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="card-badges">
              <span className="difficulty-badge medium">Intermediário</span>
              <span className="category-badge">Agentes</span>
            </div>
            <h3>Sage - Suporte Avançado</h3>
            <p>Estratégias avançadas de healing e revive</p>
            <div className="card-meta">
              <span className="duration">
                <i className="fas fa-clock"></i> 20 min
              </span>
              <span className="progress">
                <i className="fas fa-spinner"></i> 60%
              </span>
            </div>
            <div className="card-actions">
              <button className="btn-primary">
                <i className="fas fa-play"></i> Continuar
              </button>
              <button className="btn-secondary">
                <i className="fas fa-download"></i> Baixar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}