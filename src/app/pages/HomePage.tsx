import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { MotivationalQuotes } from "../components/MotivationalQuotes";

export function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <MotivationalQuotes />
    </div>
  );
}
