import "./App.css";
import Hero from "./components/Hero";
import CountDown from "./components/CountDown";
import Feeling from "./components/Feeling";
import Points from "./components/Points";
import Separators from "./components/Separators";
import AgnieszkaSection from "./components/AgnieszkaSection";
import SupportSection from "./components/SupportSection";

import separator1 from "./assets/img/separators/separator1.png";
import separator2 from "./assets/img/separators/separator2.png";
import separator3 from "./assets/img/separators/separator3.png";
import separator4 from "./assets/img/separators/separator4.png";

function App() {
  return (
    <>
      <Hero />
      <CountDown />
      <div className="xl:pl-[156px]">
        <Feeling />
      </div>
      <Separators separator={separator1} />
      <div className="container flex justify-center xl:pl-[156px]">
        <Points />
      </div>
      <Separators separator={separator2} />
      <AgnieszkaSection />
      <Separators separator={separator3} />
      <div className="flex justify-center">
        <SupportSection />
      </div>
      <Separators separator={separator4} />
    </>
  );
}

export default App;
