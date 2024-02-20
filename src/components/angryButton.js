const AngryButton = (props) => {

  const {angryApp} = props;
  // why passing param into increaseAnger in here leads to an infinite loop?

  return (
    <button onClick={props.increaseAnger} className="AngryButton" style={{backgroundColor: `rgba(255,0,0,${angryApp})`}}>
      { angryApp < 1 && <span>Don't click me too much! </span> }
      { angryApp > 1 && <span>Rawr!</span> }
    </button>
  )

}

export default AngryButton;