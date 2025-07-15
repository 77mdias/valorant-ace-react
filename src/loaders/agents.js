import agents from "../database.json";

// Carrega a lista de agentes
export function loadAgentsList() {
  return { agents };
}


// Carrega os detalhes do agente
export function loadAgentDetails({ params }) {
  // Encontra o agente com o ID correspondente
  const agent = agents.find((a) => a.id === +params.agentId);

  // Se o agente não for encontrado, retorna um erro 404
  if (!agent) {
    throw new Response("Not found", { status: 404 });
  }

  // Retorna os detalhes do agente
  return { agent };
}