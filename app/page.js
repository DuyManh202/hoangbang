import { families, events, wedding } from "../data/wedding";
import Closing from "../components/Closing";
import Families from "../components/Families";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import SiteHeader from "../components/SiteHeader";
import Story from "../components/Story";
import WeddingDetails from "../components/WeddingDetails";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Story />
      <WeddingDetails events={events} wedding={wedding} />
      <Gallery />
      <Families families={families} />
      <Closing />
    </main>
  );
}
