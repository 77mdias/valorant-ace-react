import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Filter from "./sections/Filter";
import Grid from "./sections/Grid";
import Hero from "./sections/Hero";

export default function Agents() {
  // chamando o filtro e o grid
  const [filter, setFilter] = useState("all");
  const { agents } = useLoaderData();

  //Se o filtro for all, retorna todos os agentes, caso contrário, retorna os agentes que correspondem ao filtro
  const filteredAgents = filter === "all" 
    ? agents 
    : agents.filter((agent) => agent.role.toLowerCase() === filter);

  return (
    <div className="agents-page">
      <Hero />

      {/* currentFilter é o filtro atual, onFilterChange é a função que atualiza o filtro */}
      <Filter currentFilter={filter} onFilterChange={setFilter} />

      {/* agents é o array de agentes, filteredAgents é o array de agentes filtrados */}
      <Grid agents={filteredAgents} />
    </div>
  );
}