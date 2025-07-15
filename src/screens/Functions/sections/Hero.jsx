import { heroImages } from "../../../assets/images";

export default function Hero() {
  return (
    <section
      className="hero hero-funcoes"
      style={{
        backgroundImage: `url(${heroImages.arteVava})`,
        backgroundSize: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    <div className="hero-content">
      <h1>Domine as Funções</h1>
      <p>Entenda o papel estratégico de cada função no Valorant</p>
      <button className="btn-play">
        Explorar Funções <i className="fas fa-shield-alt"></i>
      </button>
    </div>
  </section>
  )
}