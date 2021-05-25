import React from 'react'

class komponent extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      nazwa: "Ewa" 
    }
  }

  przywitajSie() { 
    console.log("Hej");
  }

  render() {
    return (
      <div>
        <button onClick={() => this.przywitajSie()}>Kliknij</button> {}
        Hejka {this.state.nazwa} {}
      </div>
    );
  }
}

export default komponent;
