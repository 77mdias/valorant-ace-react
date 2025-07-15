import { heroImages } from '../../../assets/images'

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImages.valorantBanner})` }}
    >
      <div className="hero-content">
        <h1>Aulas Favoritas</h1>
        <p>Seus conteúdos salvos para estudar a qualquer momento</p>
        <button className="btn-play">
          Ver Todas <i className="fas fa-heart"></i>
        </button>
      </div>
    </section>
  )
}