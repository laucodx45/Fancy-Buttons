import { useState } from "react";

const CounterButton = (props) => {
  
  const [clickAmount, setClickAmount] = useState(0);
  
  const increment = () => {
    setClickAmount(clickAmount + 1);
    props.increaseAnger(0.1);
  }

  return (
    <button onClick= {increment} className="CounterButton">
      You clicked me {clickAmount} amount of times
    </button>
  )

}

export default CounterButton;