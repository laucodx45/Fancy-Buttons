import { useState } from "react";

const TextRepeaterButton = (props) => { 

  const [repetitions, setRepetitions] = useState(1);
  
  const textRepeaterAction = () => {
    setRepetitions(repetitions + 1);
    props.increaseAnger();
  }
  

  
  const textContent = [];
  
  for (let i = 0; i < repetitions; i++) {
    textContent.push(<span key={i}>I like this text</span>)
  }
  

  return (
    <button onClick={textRepeaterAction} className="TextRepeaterButton">
      {textContent}
    </button>
  )

}

export default TextRepeaterButton