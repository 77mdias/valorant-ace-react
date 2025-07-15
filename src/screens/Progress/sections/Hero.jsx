import { heroImages } from "../../../assets/images";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImages.valorantBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-content">
        <h1>Meu Progresso</h1>
        <p>
          Acompanhe seu desenvolvimento e conquistas na jornada do
          Valorant
        </p>
        <button className="btn-play">
          Ver Detalhes <i className="fas fa-chart-line"></i>
        </button>
      </div>
    </section>
  )
}