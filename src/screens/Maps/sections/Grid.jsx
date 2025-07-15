import { mapImages } from "../../../assets/images";
import PropTypes from 'prop-types';

export default function Grid({ maps }) {
  return (
    <section className="maps-grid">
      <div className="maps-container">
        {maps.map((map) => (
          <div key={map.id} className="map-card" data-category={map.roles.join(" ")}>
            <div
              className="map-image"
              style={{
                backgroundImage: `url(${mapImages[map.imageKey]})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}>
              <div className="map-overlay">
                <h3>{map.name}</h3>
                <p>{map.caracteristicsTitle}</p>
                <div className="map-stats" style={{ display: "flex", gap: "1rem" }}>
                  <span className="stat" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className={`fas ${map.roles[0] === "Competitive" ? "fa-trophy" : "fa-gamepad"}`}></i>
                    {map.roles[0]}
                  </span>
                  <span className="stat" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className={`fas 
                      ${map.roles[1] === "Popular" ? "fa-star" : null} 
                      ${map.roles[1] === "Gelado" ? "fa-snowflake" : null} 
                      ${map.roles[1] === "Complexo" ? "fa-cogs" : null} 
                      ${map.roles[1] === "Vertical" ? "fa-arrows-alt-v" : null}`}
                    >
                    </i>
                    {map.roles[1]}
                  </span>
                </div>
              </div>
            </div>
            <div className="map-info">
              <div className="map-details">
                <h4>Características:</h4>
                <ul>
                  {map.caracteristics.map((caracteristic) => (
                    <li key={caracteristic}>{caracteristic}</li>
                  ))}
                </ul>
              </div>
              <div className="map-actions">
                <button className="map-btn primary">
                  <i className="fas fa-play"></i> Estudar
                </button>
                <button className="map-btn secondary">
                  <i className="fas fa-map-marked-alt"></i> Callouts
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

Grid.propTypes = {
  maps: PropTypes.array.isRequired,
}

