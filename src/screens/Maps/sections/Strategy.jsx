export default function Strategy() {
  return (
    <section className="map-strategies">
      <h2>Estratégias Gerais</h2>
      <div className="strategies-grid">
        <div className="strategy-card">
          <div className="strategy-icon">
            <i className="fas fa-crosshairs"></i>
          </div>
          <h3>Controle de Mapa</h3>
          <p>
            Aprenda a controlar áreas chave e estabelecer presença no mapa
          </p>
          <ul>
            <li>Controle de meio</li>
            <li>Informação territorial</li>
            <li>Rotações eficientes</li>
          </ul>
        </div>

        <div className="strategy-card">
          <div className="strategy-icon">
            <i className="fas fa-comments"></i>
          </div>
          <h3>Callouts</h3>
          <p>Domine a comunicação com callouts precisos para cada mapa</p>
          <ul>
            <li>Callouts padronizados</li>
            <li>Comunicação clara</li>
            <li>Informações rápidas</li>
          </ul>
        </div>

        <div className="strategy-card">
          <div className="strategy-icon">
            <i className="fas fa-route"></i>
          </div>
          <h3>Rotações</h3>
          <p>Entenda os timings e rotas de rotação para cada situação</p>
          <ul>
            <li>Timings de rotação</li>
            <li>Rotas alternativas</li>
            <li>Leitura de jogo</li>
          </ul>
        </div>
      </div>
    </section>
  )
}