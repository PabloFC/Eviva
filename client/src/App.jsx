import "./App.css";
import Hero from "./components/Hero";
import CountDown from "./components/CountDown";
import Feeling from "./components/Feeling";
import Points from "./components/Points";
import Separators from "./components/Separators";
import AgnieszkaSection from "./components/AgnieszkaSection";

import separator1 from "./assets/img/separators/separator1.png";
import separator2 from "./assets/img/separators/separator2.png";

function App() {
  return (
    <>
      <Hero />
      <CountDown />
      <div className="container flex justify-center xl:pl-[156px]">
        <Feeling />
      </div>
      <Separators separator={separator1} />
      <div className="container flex justify-center xl:pl-[156px]">
        <Points />
      </div>
      <Separators separator={separator2} />
      <AgnieszkaSection />
    </>
  );
}

export default App;
