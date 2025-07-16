import { Link } from "react-router-dom";
import { logoImages } from "../assets/images";
import databaseLogo from "../databaseLogo.json";
import Profile from "../screens/Profile/Profile";

export default function Header() {
  const logo = databaseLogo.find((logo) => logo.id === 1);
  const logo2 = databaseLogo.find((logo) => logo.id === 2);

  return (
    <>
      {/* <!-- Topbar estilo Twitch --> */}
      <nav className="navbar col-12 col-lg-12 p-0 navbar-expand-lg">
          <div className="container-fluid" id="topBar">
            <div className="topbar justify-content-between gap-2" id="navbarNav">
              {/* <!-- BOTÃO HAMBURGER (só aparece em mobile) --> */}
              <button className="hamburger-btn d-lg-none" id="sidebarToggle">
                <i className="fas fa-bars"></i>
              </button>

              {/* <!-- LOGO --> */}
              <div className="logo">
                <img
                  src={logoImages[logo.imageKey]}
                  alt="Valorant Academy"
                  className="logo-img"
                />
                <img src={logoImages[logo2.imageKey]} alt="ACE" className="logo-img" />
              </div>

              {/* <!-- BARRA DE PESQUISA --> */}
              <div className="search-bar">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Buscar aulas..." />
              </div>

              {/* <!-- BOTÕES --> */}
              <div className="user-actions">
                {/* <!-- BOTÃO NOTIFICAÇÕES --> */}
                <i className="fas fa-bell"></i>

                {/* <!-- DROPDOWN --> */}
                <div className="dropdown">
                  <button
                    className="btn dropdownProfile dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-circle-user"></i>
                  </button>
                  {/* <!-- DROPDOWN MENU --> */}
                  <ul
                    className="dropdown-menu dropdown-menu-dark dropdown-menu-end mt-3"
                  >
                    {/* <!-- BOTÃO PERFIL --> */}
                    <li>
                     <Link to="/profile" className="dropdown-item d-flex align-items-center gap-2 p-3 pe-5">
                        <i className="fas fa-user-circle"></i>
                        Meu Perfil
                      </Link>
                    </li>

                    {/* <!-- BOTÃO PROGRESSO --> */}
                    <li>
                      <Link to="/progress" className="dropdown-item d-flex align-items-center gap-2 p-3 pe-5">
                        <i className="fas fa-chart-line text-success"></i>
                        Meu Progresso
                      </Link>
                    </li>

                    {/* <!-- BOTÃO FAVORITOS --> */}
                    <li>
                      <Link to="/favorites" className="dropdown-item d-flex align-items-center gap-2 p-3 pe-5">
                        <i className="fas fa-heart text-danger"></i>
                        Aulas Favoritas
                      </Link>
                    </li>

                    {/* <!-- BOTÃO CERTIFICADOS --> */}
                    <li>
                      <Link to="/certificados" className="dropdown-item d-flex align-items-center gap-2 p-3 pe-5">
                        <i className="fas fa-certificate text-warning"></i>
                        Certificados
                      </Link>
                    </li>

                    <li><hr className="dropdown-divider" /></li>

                    {/* <!-- BOTÃO RANK/ELO --> */}
                    <li>
                      <Link to="/rank" className="dropdown-item d-flex align-items-center gap-2 p-3 pe-5">
                        <i className="fas fa-trophy text-warning"></i>
                        Meu Rank:
                        <span className="badge bg-purple ms-1">Diamante</span>
                      </Link>
                    </li>

                    {/* <!-- BOTÃO ESTATÍSTICAS --> */}
                    <li>
                      <Link to="/estatisticas" className="dropdown-item d-flex align-items-center gap-2 p-3 pe-5">
                        <i className="fas fa-chart-bar text-info"></i>
                        Estatísticas
                      </Link>
                    </li>

                    <li><hr className="dropdown-divider" /></li>

                    {/* <!-- BOTÃO CONFIGURAÇÕES --> */}
                    <li>
                      <Link to="/settings" className="dropdown-item d-flex align-items-center gap-2 p-3 pe-5">
                        <i className="fas fa-cog text-secondary"></i>
                        Configurações
                      </Link>
                    </li>

                    {/* <!-- BOTÃO TEMA --> */}
                    <li>
                      <button
                        className="dropdown-item d-flex align-items-center gap-2 p-3 pe-5"
                        type="button"
                        data-theme-toggle
                      >
                        <i className="fas fa-moon text-warning"></i>
                        <span className="theme-text">Tema Escuro</span>
                      </button>
                    </li>

                    <li><hr className="dropdown-divider" /></li>

                    {/* <!-- BOTÃO SAIR --> */}
                    <li>
                      <button
                        className="dropdown-item d-flex align-items-center gap-2 p-3 pe-5 text-danger"
                        type="button"
                      >
                        <i className="fas fa-sign-out-alt"></i>
                        Sair
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </nav>
      
    </>
    );
}