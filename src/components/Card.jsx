import cards from "../database.json"
import { cardImages } from "../assets/images"

export default function Card({ cardId }) {
  const card = cards.find((card) => card.id === cardId)
  
  if (!card) {
    return (<h1>Card not found</h1>)
  }

  return (
    <div className="lesson-card">
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${cardImages[card.imageKey]})`
        }}
      >
        <div className="difficulty easy">{card.difficulty}</div>
        <button className="play-btn">
          <i className="fas fa-play selo-white"></i>
        </button>
      </div>
      <div className="card-content">
        <h3>{card.name} - {card.skills}</h3>
        <p>{card.dica}</p>
      </div>
    </div>
  )
}