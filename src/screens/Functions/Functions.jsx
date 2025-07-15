import Hero from "./sections/Hero";
import Grid from "./sections/Grid/Grid";
import Strategy from "./sections/Strategy";

export default function Functions() {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <Hero />

      {/* <!-- Grid de Funções --> */}
      <Grid />

      {/* <!-- Estratégias por Função --> */}
      <Strategy />
    </>
  )
}