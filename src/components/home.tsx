import Header from "./layout/header";
import Hero from "./sections/hero";

import Services from "./sections/services";
import Portfolio from "./sections/portfolio";
import Contact from "./sections/contact";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Home;
