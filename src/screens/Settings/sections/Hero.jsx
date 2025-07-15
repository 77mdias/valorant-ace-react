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
        <h1>Configurações</h1>
        <p>Personalize sua experiência na Valorant Ace School</p>
        <button className="btn-play">
          Personalizar <i className="fas fa-cog"></i>
        </button>
      </div>
    </section>
  )
}