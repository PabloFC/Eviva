import "./App.css";
import Hero from "./components/Hero";
import CountDown from "./components/CountDown";
import Feeling from "./components/Feeling";
import Separator1 from "./components/Separator1";
function App() {
  return (
    <>
      <Hero />
      <CountDown />
      <div className="container">
        <Feeling />
      </div>
      <Separator1 />
    </>
  );
}

export default App;
