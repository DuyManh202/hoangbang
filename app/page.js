import { families, events, venues, wedding } from "../data/wedding";
import Closing from "../components/Closing";
import Families from "../components/Families";
import FloatingHearts from "../components/FloatingHearts";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import MusicPlayer from "../components/MusicPlayer";
import SiteHeader from "../components/SiteHeader";
import Story from "../components/Story";
import VenueMaps from "../components/VenueMaps";
import WeddingDetails from "../components/WeddingDetails";
import WeddingCountdown from "../components/WeddingCountdown";

export default function Home() {
  return (
    <main>
      <MusicPlayer />
      <FloatingHearts />
      <SiteHeader />
      <Hero />
      <Story />
      <WeddingCountdown />
      <WeddingDetails events={events} wedding={wedding} />
      <VenueMaps venues={venues} />
      <Gallery />
      <Families families={families} />
      <Closing />
    </main>
  );
}
