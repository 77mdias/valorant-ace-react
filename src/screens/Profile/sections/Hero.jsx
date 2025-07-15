import { heroImages } from "../../../assets/images";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImages.valorantBanner})` }}
    >
      <div className="hero-content">
        <h1>Meu Perfil</h1>
        <p>
          Gerencie suas informações pessoais e acompanhe seu progresso
        </p>
        <button className="btn-play">
          Editar Perfil <i className="fas fa-edit"></i>
        </button>
      </div>
    </section>
  )
}