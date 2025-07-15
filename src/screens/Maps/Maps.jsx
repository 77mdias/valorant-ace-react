import Hero from "./sections/Hero";
import Filter from "./sections/Filter";
import Grid from "./sections/Grid";
import Strategy from "./sections/Strategy";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export default function Maps() {
  // Estado para o Filtro
  const [filter, setFilter] = useState("all");

  // Carregando os mapas
  const { maps } = useLoaderData();

  // Filtrando os mapas, se for all retorna todos os mapas, caso contrário retorna os mapas que correspondem ao filtro
  const filteredMaps = filter === "all" 
    ? maps 
    : maps.filter((map) => map.roles.includes(filter));

  return (
    <>
      {/* <!-- Hero Section --> */}
      <Hero />

      {/* <!-- Filter Section --> */}
      <Filter currentFilter={filter} onFilterChange={setFilter} />

      {/* <!-- Grid de Mapas --> */}
      <Grid maps={filteredMaps} />

      {/* <!-- Estratégias Gerais --> */}
      <Strategy />
    </>
  )
}