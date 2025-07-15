import { useLoaderData } from "react-router-dom";
import { cardImages, tutorialImages } from "../../assets/images";

export default function AgentDetails() {
  // Carrega os detalhes do agente
  const { agent } = useLoaderData();

  // Retorna a página de detalhes do agente
  return (
    <div className="agent-details">
      {/* Hero Section - Banner do agente */}
      <section className="agent-hero">
        <div className="agent-banner" style={{ backgroundImage: `url(${cardImages[agent.imageKey]})`, backgroundSize: "cover !important" }}>
          <div className="agent-info-overlay">
            <h1>{agent.name}</h1>
            <div className={`agent-role ${agent.role.toLowerCase()}`}>{agent.role}</div>
          </div>
        </div>
      </section>

      {/* Informações do Agente - Biografia, Habilidades, Estratégias e Tutoriais */}
      <section className="agent-info-section">
        <div className="agent-description">
          <h2>Biografia</h2>
          <p>{agent.biography}</p>
        </div>

        {/* Habilidades - Lista de habilidades do agente */}
        <div className="agent-abilities-section">
          <h2>Habilidades</h2>
          <div className="abilities-grid">
            {agent.abilities.map((ability, index) => (
              <div key={index} className="ability-card">
                <div className="ability-icon">
                  <i className={ability.icon}></i>
                </div>
                <div className="ability-info">
                  <h3>{ability.name}</h3>
                  <div className="ability-details">
                    <span className="cost">{ability.cost} pontos</span>
                    <span className="charges">{ability.charges} cargas</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estratégias - Lista de estratégias do agente */}
        <div className="agent-strategies">
          <h2>Estratégias</h2>
          <div className="strategies-grid">
            {agent.strategies.map((strategy, index) => (
              <div key={index} className="strategy-card">
                <h3>{strategy.title}</h3>
                <p>{strategy.description}</p>
                <div className="strategy-tips">
                  {strategy.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="tip">
                      <i className="fas fa-lightbulb"></i>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vídeos de Tutorial - Lista de tutoriais do agente */}
        <div className="agent-tutorials">
          <h2>Tutoriais</h2>
          <div className="tutorials-grid">
            {agent.tutorials.map((tutorial, index) => (
              <div key={index} className="tutorial-card">
                <div className="tutorial-thumbnail">
                  <img
                    src={tutorialImages[tutorial.thumbnail]}
                    alt={tutorial.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover"}}
                  />
                  <div className="play-overlay">
                    <i className="fas fa-play"></i>
                  </div>
                </div>
                <h3>{tutorial.title}</h3>
                <p>{tutorial.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 