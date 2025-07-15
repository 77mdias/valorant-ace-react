import "../../scss/pages/_profilePage.scss"
import Dados from "./cards/Dados";
import Informations from "./cards/Informations";
import Estatistic from "./cards/Estatistic";
import ProfileUser from "./sections/ProfileUser";
import Progresso from "./sections/Progresso";
import Hero from "./sections/Hero";

export default function Profile() {
  return (
    <>
      {/* <!-- Hero Section --> */}
          <Hero />

          {/* <!-- Perfil do Usuário --> */}
          <section className="profile-overview">
            <ProfileUser />
          </section>

          {/* <!-- Informações Pessoais --> */}
          <section className="personal-info">
            <h2>Informações Pessoais</h2>
            <div className="info-grid">
              <Dados />
              <Informations />
              <Estatistic />
            </div>
          </section>

          {/* <!-- Progresso Recente --> */}
          <Progresso />

          {/* <!-- Conquistas Recentes --> */}
          <section className="recent-achievements">
            <h2>Conquistas Recentes</h2>
            <div className="achievements-grid">
              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className="fas fa-trophy selo-white"></i>
                </div>
                <div className="achievement-info">
                  <h3>Mestre em Jett</h3>
                  <p>Completou todas as aulas sobre Jett</p>
                  <span className="achievement-date">Há 2 dias</span>
                </div>
              </div>

              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className="fas fa-fire selo-white"></i>
                </div>
                <div className="achievement-info">
                  <h3>Sequência de 10 Dias</h3>
                  <p>Estudou por 10 dias consecutivos</p>
                  <span className="achievement-date">Há 3 dias</span>
                </div>
              </div>

              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className="fas fa-star selo-white"></i>
                </div>
                <div className="achievement-info">
                  <h3>Primeiro Certificado</h3>
                  <p>Conquistou seu primeiro certificado</p>
                  <span className="achievement-date">Há 1 semana</span>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}