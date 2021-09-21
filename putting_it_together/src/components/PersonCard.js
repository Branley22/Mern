import React, { Component } from 'react';

class PersonCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ageUp: this.props.age,
    };
  }
  render() {
    const {name, hairColor} = this.props;

    return (
    <div className="container">
      <h1>{ name }</h1>
      <p>Age: { this.state.ageUp }</p>
      <p>hair Color: { hairColor }</p>
      <button onClick={()=> this.setState({ ageUp: this.state.ageUp + 1})}>Happy Birthday</button>
    </div>
  );
  }
}

export default PersonCard;