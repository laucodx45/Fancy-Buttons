import './App.css';
import AngryButton from "./components/angryButton";
import CounterButton from "./components/counterButton";
import LightSwitchButton from "./components/lightSwitchButton";
import TextRepeaterButton from "./components/textRepeaterButton"
import { useState } from 'react';
import { useReducer } from 'react';

function App() {

  const [angryApp, dispatch] = useReducer((angryApp, amount) => {
    return angryApp < 1 ? angryApp + amount : 0;
  }, 0)

  const [light, setLight] = useState("off");
  const dark = light === "off" ? 'dark' : '';
  const switchLight = () => {
    light === "off" ? setLight("on") : setLight("off");
    dispatch(0.1);
  }


  return (
    <div className={`App ${dark}`}>
      <h1>{angryApp < 1 ? "Fancy Buttons!" : "YOU ARE CLIKCING WAY TOO MANY BUTTONS!"}</h1>
      <section>
        <AngryButton increaseAnger={dispatch} angryApp={angryApp}/>
        <CounterButton increaseAnger={dispatch}/>
        <LightSwitchButton light={light} switchLight={switchLight}/>
        <TextRepeaterButton increaseAnger={dispatch}/>
      </section>
    </div>
  );
}

export default App;
