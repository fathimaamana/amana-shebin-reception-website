import Navbar from "../components/Navbar/Navbar";
import Hero from "../sections/Hero/Hero";
import Story from "../sections/Story/Story";
import Parents from "../sections/Parents/Parents";
import Couple from "../sections/Couple/Couple";
import Events from "../sections/Events/Events";
import Venue from "../sections/Venue/Venue";
import RSVP from "../sections/RSVP/RSVP";
import Gallery from "../sections/Gallery/Gallery";
import Footer from "../sections/Footer/Footer";

import { useEffect } from "react";

function Home({ playMusic }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <Navbar playMusic={playMusic} />
      <Hero />
      <Story />
      <Parents />
      <Couple />
      <Events />
      <Venue />
      <RSVP />
       <Gallery />
      <Footer /> 
    </>
  );
}

export default Home;

