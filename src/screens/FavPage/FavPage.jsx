import Hero from './sections/Hero'
import Filter from './sections/Filter'
import Grid from './sections/Grid'
import Playlist from './sections/Playlist'

export default function FavPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Filter Section */}
      <Filter />

      {/* Grid Section */}
      <Grid />

      {/* Playlist Section */}
      <Playlist />
    </>
  )
}