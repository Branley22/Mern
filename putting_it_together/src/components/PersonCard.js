import React, { useState } from 'react';

const PersonCard = (props) => {
  const {name, age, hairColor} = props;

  const [currentAge, setCurrentAge] = useState(age);

  const getOlder = () => {
    setCurrentAge(currentAge + 1);
  }

  return(
    <div className="container">
      <h1>{ name }</h1>
      <p>Age: { currentAge }</p>
      <p>hair Color: { hairColor }</p>
      <button onClick = {getOlder}>Birthday Button for { name }</button>
    </div>
  )
}

export default PersonCard;