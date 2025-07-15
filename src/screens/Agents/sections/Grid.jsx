import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { cardImages } from "../../../assets/images";

export default function Grid({ agents }) {  
  const navigate = useNavigate();

  return (
    <section className="agents-grid">
      <div className="agents-container">
        {agents.map((agent) => (
          <div key={agent.id} className="agent-card" data-role={agent.role.toLowerCase()}>
            <div
              className="agent-image"
              style={{ backgroundImage: `url(${cardImages[agent.imageKey]})` }}
            >
              <div className={`agent-role ${agent.role.toLowerCase()}`}>{agent.role}</div>
              <div className="agent-overlay">
                <button className="learn-btn" onClick={() => navigate(`/agents/${agent.id}`)}>
                  <i className="fas fa-play"></i> Aprender
                </button>
              </div>
            </div>
            <div className="agent-info">
              <h3>{agent.name}</h3>
              <p>{agent.biography.substring(0, 100)}...</p>
              <div className="agent-abilities">
                {agent.abilities.map((ability, index) => (
                  <span key={index} className={`ability ${ability.isUltimate ? 'ultimate' : ''}`}>
                    {ability.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Grid.propTypes = {
  agents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      imageKey: PropTypes.string.isRequired,
      biography: PropTypes.string.isRequired,
      abilities: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          isUltimate: PropTypes.bool
        })
      ).isRequired
    })
  ).isRequired
};