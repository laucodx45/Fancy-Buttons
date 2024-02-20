import './App.css';
import AngryButton from "./components/angryButton";
import CounterButton from "./components/counterButton";
import LightSwitchButton from "./components/lightSwitchButton";
import TextRepeaterButton from "./components/textRepeaterButton"
import { useState } from 'react';

function App() {
  // when not passing param into increaseAnger, no infinite loop
  
  const [angryApp, setAngryApp] = useState(0)
  const increaseAnger = () => {
    if (angryApp < 1) {
      setAngryApp(angryApp + 0.1);
    } else {
      setAngryApp(0);
    }
  }

  const [light, setLight] = useState("off");
  const dark = light === "off" ? 'dark' : '';
  const switchLight = () => {
    light === "off" ? setLight("on") : setLight("off");
    increaseAnger();
  }


  return (
    <div className={`App ${dark}`}>
      <h1>{angryApp < 1 ? "Fancy Buttons!" : "YOU ARE CLIKCING WAY TOO MANY BUTTONS!"}</h1>
      <section>
        <AngryButton increaseAnger={increaseAnger} angryApp={angryApp}/>
        <CounterButton increaseAnger={increaseAnger}/>
        <LightSwitchButton light={light} switchLight={switchLight}/>
        <TextRepeaterButton increaseAnger={increaseAnger}/>
      </section>
    </div>
  );
}

export default App;
