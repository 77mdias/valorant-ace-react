import { heroImages } from "../../../assets/images";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImages.neonSageJettArt})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-content">
        <h1>Dominate os Mapas</h1>
        <p>
          Aprenda as estratégias, callouts e posicionamentos de cada mapa
        </p>
        <button className="btn-play" onClick={() => navigate("/maps")}>
          Explorar Mapas <i className="fas fa-map"></i>
        </button>
      </div>
    </section>
  )
}