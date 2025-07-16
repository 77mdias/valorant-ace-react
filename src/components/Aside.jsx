import { Link } from "react-router-dom";

export default function Aside() {
  // Ao clicar em algum link, o sidebar deve fechar e o overlay deve desaparecer
  const handleLinkClick = () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const body = document.body;

    if (sidebar) {
      sidebar.classList.remove('active');
    }
    if (overlay) {
      overlay.classList.remove('active');
    }
    body.classList.remove('sidebar-open');
  }


  return (
    <>
      {/* <!-- Overlay para mobile --> */}
        <div className="sidebar-overlay" id="sidebarOverlay"></div>

        {/* <!-- Sidebar com botão de fechar --> */}
        <aside className="sidebar col-12 col-lg-3 col-xl-3 col-xxl-2" id="sidebar">
          {/* <!-- Botão fechar só aparece em mobile --> */}
          <button className="close-btn d-lg-none" id="sidebarClose">
            <i className="fas fa-times"></i>
          </button>

          {/* <!-- MENU --> */}
          <ul className="nav-links">
            <div className="search-bar d-lg-none mb-2">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Buscar..." />
            </div>
            <li>
              <Link to="/" onClick={handleLinkClick}> <i className="fas fa-home"></i> Início </Link>
            </li>
            <li>
              <Link to="/agents" onClick={handleLinkClick}>
                <i className="fas fa-user-secret"></i> Agentes
              </Link>
            </li>
            <li>
              <Link to="/functions" onClick={handleLinkClick}>
                <i className="fas fa-shield-alt"></i> Funções
              </Link>
            </li>
            <li>
              <Link to="/maps" onClick={handleLinkClick}> <i className="fas fa-map"></i> Mapas </Link>
            </li>
            <li>
              <Link to="/settings" onClick={handleLinkClick}>
                <i className="fas fa-cog"></i> Configurações
              </Link>
            </li>
          </ul>
        </aside>
    </>
  )
}