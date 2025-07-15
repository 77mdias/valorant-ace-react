import Hero from "./sections/Hero";
import Dashboard from "./sections/Dashboard";
import Trail from "./sections/Trail";
import Statics from "./sections/Statics";
import Achievements from "./sections/Achievements";

export default function Progress() {
  return (
    <>
      {/* <!-- Hero --> */}
      <Hero />

      {/* <!-- Dashboard --> */}
      <Dashboard />

      {/* <!-- Trail --> */}
      <Trail />

      {/* <!-- Statics --> */}
      <Statics />

      {/* <!-- Achievements --> */}
      <Achievements />
    </>
  )
}