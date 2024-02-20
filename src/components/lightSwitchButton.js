// import { useState } from "react";

const LightSwitchButton = (props) => {

  const {light} = props;

  return (
    <button onClick={props.switchLight} className="LightSwitchButton">
      {light === "on" && <span><i>💡</i> I'm on!</span>}
      {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>  
  )

}

export default LightSwitchButton;