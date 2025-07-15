import { heroImages } from "../../../assets/images";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImages.valorantBanner})` }}
    >
      <div className="hero-content">
        <h1>Conheça os Agentes</h1>
        <p>
          Descubra as habilidades únicas e estratégias para cada agente do
          Valorant
        </p>
        <button className="btn-play" onClick={() => navigate("/agents")}>
          Explorar Agentes <i className="fas fa-user-secret"></i>
        </button>
      </div>
    </section>
  )
}