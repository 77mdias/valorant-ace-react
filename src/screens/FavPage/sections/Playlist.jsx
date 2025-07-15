export default function Playlist() {
  return (
    <section className="playlists-section">
      <h2>Playlists Personalizadas</h2>
      <div className="playlists-grid">
        <div className="playlist-card">
          <div className="playlist-header">
            <div className="playlist-icon">
              <i className="fas fa-user-secret"></i>
            </div>
            <h3>Meus Agentes Favoritos</h3>
          </div>
          <div className="playlist-content">
            <p>8 aulas sobre seus agentes preferidos</p>
            <div className="playlist-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '75%' }}></div>
              </div>
              <span className="progress-text">6 de 8 concluídas</span>
            </div>
          </div>
          <div className="playlist-actions">
            <button className="btn-primary">
              <i className="fas fa-play"></i> Continuar
            </button>
            <button className="btn-secondary">
              <i className="fas fa-edit selo-black"></i> Editar
            </button>
          </div>
        </div>

        <div className="playlist-card">
          <div className="playlist-header">
            <div className="playlist-icon">
              <i className="fas fa-chess"></i>
            </div>
            <h3>Estratégias Avançadas</h3>
          </div>
          <div className="playlist-content">
            <p>12 aulas sobre táticas e estratégias</p>
            <div className="playlist-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '50%' }}></div>
              </div>
              <span className="progress-text">6 de 12 concluídas</span>
            </div>
          </div>
          <div className="playlist-actions">
            <button className="btn-primary">
              <i className="fas fa-play"></i> Continuar
            </button>
            <button className="btn-secondary">
              <i className="fas fa-edit selo-black"></i> Editar
            </button>
          </div>
        </div>

        <div className="playlist-card create-new">
          <div className="create-content">
            <div className="create-icon">
              <i className="fas fa-plus"></i>
            </div>
            <h3>Criar Nova Playlist</h3>
            <p>
              Organize suas aulas favoritas em playlists personalizadas
            </p>
          </div>
          <div className="playlist-actions">
            <button className="btn-primary">
              <i className="fas fa-plus"></i> Criar Playlist
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}