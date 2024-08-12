import "./App.css";
import Hero from "./components/Hero";
import CountDown from "./components/CountDown";
import Feeling from "./components/Feeling";
import Separator1 from "./components/Separator1";
import Points from "./components/Points";
function App() {
  return (
    <>
      <Hero />
      <CountDown />
      <div className="container flex justify-center xl:pl-[156px]">
        <Feeling />
      </div>
      <Separator1 />
      <div className="container flex justify-center xl:pl-[156px]">
        <Points />
      </div>
    </>
  );
}

export default App;
