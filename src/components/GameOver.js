
import React, { Component } from 'react';
import '../styles/GameOver.css';


class GameOver extends Component {
  constructor(props) {
      super(props);

  }
  render() {
    return <div className="gameOver__background">
      Game Over :(

    </div>;
  }
}

export default GameOver;
