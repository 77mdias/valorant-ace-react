import { useState } from "react";

export default function SettingsSection() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("");
  const [rank, setRank] = useState("");
  const [newClassesAvailable, setNewClassesAvailable] = useState(false);
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  }
  const handleRankChange = (e) => {
    setRank(e.target.value);
  }
  const handleNewClassesAvailableChange = (e) => {
    setNewClassesAvailable(e.target.checked);
  }
  return (
    <section className="settings-section">
      <div className="settings-container">
        {/* <!-- Perfil do Usuário --> */}
        <div className="settings-card">
          <div className="settings-header">
            <h3><i className="fas fa-user-circle"></i> Perfil</h3>
            <p>Gerencie suas informações pessoais</p>
          </div>
          <div className="settings-content">
            <div className="form-group">
              <label htmlFor="username">Nome de Usuário</label>
              <input type="text" id="username" value={username} onChange={handleUsernameChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="region">Região</label>
              <select id="region" value={region} onChange={handleRegionChange}>
                <option value="br">Brasil</option>
                <option value="na">América do Norte</option>
                <option value="eu">Europa</option>
                <option value="asia">Ásia</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="rank">Rank Atual</label>
              <select id="rank" value={rank} onChange={handleRankChange}>
                <option value="iron">Ferro</option>
                <option value="bronze">Bronze</option>
                <option value="silver">Prata</option>
                <option value="gold">Ouro</option>
                <option value="platinum">Platina</option>
                <option value="diamond">Diamante</option>
                <option value="ascendant">Ascendente</option>
                <option value="immortal">Imortal</option>
                <option value="radiant">Radiante</option>
              </select>
            </div>
            <button className="save-btn">
              <i className="fas fa-save"></i> Salvar Alterações
            </button>
          </div>
        </div>

        {/* <!-- Configurações de Tema --> */}
        <div className="settings-card">
          <div className="settings-header">
            <h3><i className="fas fa-palette"></i> Aparência</h3>
            <p>Customize a aparência da plataforma</p>
          </div>
          <div className="settings-content">
            <div className="form-group">
              <label>Tema</label>
              <div className="theme-options">
                <button className="theme-btn active" data-theme="dark">
                  <i className="fas fa-moon"></i>
                  Escuro
                </button>
                <button className="theme-btn" data-theme="light">
                  <i className="fas fa-sun"></i>
                  Claro
                </button>
                <button className="theme-btn" data-theme="auto">
                  <i className="fas fa-adjust"></i>
                  Automático
                </button>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="font-size">Tamanho da Fonte</label>
              <select id="font-size">
                <option value="small">Pequeno</option>
                <option value="medium">Médio</option>
                <option value="large">Grande</option>
              </select>
            </div>
            <div className="form-group">
              <label>Cor de Destaque</label>
              <div className="color-options">
                <button
                  className="color-btn"
                  data-color="purple"
                  style={{ backgroundColor: "#6f42c1" }}
                ></button>
                <button
                  className="color-btn active"
                  data-color="blue"
                  style={{ backgroundColor: "#007bff" }}
                ></button>
                <button
                  className="color-btn"
                  data-color="green"
                  style={{ backgroundColor: "#28a745" }}
                ></button>
                <button
                  className="color-btn"
                  data-color="red"
                  style={{ backgroundColor: "#dc3545" }}
                ></button>
                <button
                  className="color-btn"
                  data-color="orange"
                  style={{ backgroundColor: "#fd7e14" }}
                ></button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Configurações de Notificações --> */}
        <div className="settings-card">
          <div className="settings-header">
            <h3><i className="fas fa-bell"></i> Notificações</h3>
            <p>Gerencie suas preferências de notificação</p>
          </div>
          <div className="settings-content">
            <div className="toggle-group">
              <div className="toggle-item">
                <span>Novas aulas disponíveis</span>
                <label className="toggle-switch">
                  <input type="checkbox" checked={newClassesAvailable} onChange={handleNewClassesAvailableChange} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="toggle-item">
                <span>Progresso de aprendizado</span>
                <label className="toggle-switch">
                  <input type="checkbox" checked={newClassesAvailable} onChange={handleNewClassesAvailableChange} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="toggle-item">
                <span>Progresso de aprendizado</span>
                <label className="toggle-switch">
                  <input type="checkbox" checked={newClassesAvailable} onChange={handleNewClassesAvailableChange} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="toggle-item">
                <span>Lembretes de prática</span>
                <label className="toggle-switch">
                  <input type="checkbox" checked={newClassesAvailable} onChange={handleNewClassesAvailableChange} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="toggle-item">
                <span>Atualizações do jogo</span>
                <label className="toggle-switch">
                  <input type="checkbox" checked={newClassesAvailable} onChange={handleNewClassesAvailableChange} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="toggle-item">
                <span>Newsletter semanal</span>
                <label className="toggle-switch">
                  <input type="checkbox" checked={newClassesAvailable} onChange={handleNewClassesAvailableChange} />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Configurações de Privacidade --> */}
        <div className="settings-card">
          <div className="settings-header">
            <h3><i className="fas fa-shield-alt"></i> Privacidade</h3>
            <p>Controle sua privacidade e segurança</p>
          </div>
          <div className="settings-content">
            <div className="toggle-group">
              <div className="toggle-item">
                <span>Perfil público</span>
                <label className="toggle-switch">
                  <input type="checkbox" checked={newClassesAvailable} onChange={handleNewClassesAvailableChange} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="toggle-item">
                <span>Mostrar progresso</span>
                <label className="toggle-switch">
                  <input type="checkbox" checked={newClassesAvailable} onChange={handleNewClassesAvailableChange} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="toggle-item">
                <span>Permitir mensagens</span>
                <label className="toggle-switch">
                  <input type="checkbox" checked={newClassesAvailable} onChange={handleNewClassesAvailableChange} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="toggle-item">
                <span>Dados analíticos</span>
                <label className="toggle-switch">
                  <input type="checkbox" checked={newClassesAvailable} onChange={handleNewClassesAvailableChange} />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
            <div className="form-group mt-4">
              <button className="danger-btn">
                <i className="fas fa-trash"></i> Excluir Conta
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Configurações de Aprendizado --> */}
        <div className="settings-card">
          <div className="settings-header">
            <h3><i className="fas fa-graduation-cap"></i> Aprendizado</h3>
            <p>Personalize sua experiência de aprendizado</p>
          </div>
          <div className="settings-content">
            <div className="form-group">
              <label htmlFor="difficulty"
                >Nível de Dificuldade Preferido</label
              >
              <select id="difficulty">
                <option value="beginner">Iniciante</option>
                <option value="intermediate">
                  Intermediário
                </option>
                <option value="advanced">Avançado</option>
                <option value="expert">Expert</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="pace">Ritmo de Aprendizado</label>
              <select id="pace">
                <option value="slow">Devagar</option>
                <option value="normal">Normal</option>
                <option value="fast">Rápido</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="focus">Foco Principal</label>
              <select id="focus">
                <option value="aim">Mira</option>
                <option value="strategy">Estratégia</option>
                <option value="agents">Agentes</option>
                <option value="maps">Mapas</option>
                <option value="teamwork">Trabalho em Equipe</option>
              </select>
            </div>
            <div className="toggle-group">
              <div className="toggle-item">
                <span>Autoplay próxima aula</span>
                <label className="toggle-switch">
                  <input type="checkbox" checked={newClassesAvailable} onChange={handleNewClassesAvailableChange} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="toggle-item">
                <span>Lembretes de prática</span>
                <label className="toggle-switch">
                  <input type="checkbox" checked={newClassesAvailable} onChange={handleNewClassesAvailableChange} />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Configurações de Conta --> */} 
        <div className="settings-card">
          <div className="settings-header">
            <h3><i className="fas fa-key"></i> Conta</h3>
            <p>Gerencie configurações de conta e segurança</p>
          </div>
          <div className="settings-content">
            <div className="form-group">
              <button className="secondary-btn">
                <i className="fas fa-lock"></i> Alterar Senha
              </button>
            </div>
            <div className="form-group">
              <button className="secondary-btn">
                <i className="fas fa-shield-alt"></i> Autenticação em Duas
                Etapas
              </button>
            </div>
            <div className="form-group">
              <button className="secondary-btn">
                <i className="fas fa-download"></i> Baixar Dados
              </button>
            </div>
            <div className="form-group">
              <button className="secondary-btn">
                <i className="fas fa-sign-out-alt"></i> Sair de Todos os
                Dispositivos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}