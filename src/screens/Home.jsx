import Card from "../components/Card"
import { heroImages } from "../assets/images"

export default function Home() {
  return (
    <>
      {/* <!-- Hero Section estilo Crunchyroll --> */}
          <section
            className="hero"
            style={{ backgroundImage: `url(${heroImages.yoru})` }}
          >
            <div className="hero-content">
              <h1>Domine a Função Duelista</h1>
              <p>
                Aprenda técnicas avançadas com Jett e Reyna para dominar o jogo
              </p>
              <button className="btn-play">
                Assistir Agora <i className="fas fa-play"></i>
              </button>
            </div>
          </section>

          {/* <!-- Grid de Cards estilo Netflix --> */}
          <section className="lessons-grid">
            <h2>Aulas Recomendadas</h2>

            {/* <!-- ✅ CARROSSEL CONTAINER --> */}
            <div className="carousel-container">
              {/* <!-- Botão Anterior --> */}
              <button className="carousel-nav prev" id="prevBtn">
                <i className="fas fa-chevron-left"></i>
              </button>

              {/* <!-- Container dos Cards --> */}
              <div className="cards-carousel" id="cardsCarousel">
                <div className="cards-wrapper">
                  <Card cardId={1} />
                  <Card cardId={2} />
                  <Card cardId={3} />
                  <Card cardId={4} />
                  <Card cardId={5} />
                  <Card cardId={6} />                  
                </div>
              </div>

              {/* <!-- Botão Próximo --> */}
              <button className="carousel-nav next" id="nextBtn">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            {/* <!-- ✅ INDICADORES (gerados dinamicamente) --> */}
            <div className="carousel-indicators" id="carouselIndicators">
              {/* <!-- Indicadores serão gerados pelo JavaScript --> */}
            </div>
          </section>
    </>
  )
}