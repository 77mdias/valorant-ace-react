import Duelista from "./Duelista";
import Iniciador from "./Iniciador";
import Controlador from "./Controlador";
import Sentinela from "./Sentinela";

export default function Grid() {
  return (
    <section className="roles-grid">
      <h2>Funções no Valorant</h2>

      <div className="roles-container">
        {/* <!-- Função Duelista --> */}
        <Duelista />

        {/* <!-- Função Iniciador --> */}
        <Iniciador />

        {/* <!-- Função Controlador --> */}
        <Controlador />

        {/* <!-- Função Sentinela --> */}
        <Sentinela />
      </div>
    </section>
  )
}