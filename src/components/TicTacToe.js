import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import '../styles/MainGame.css';


class TicTacToe extends Component {
  constructor(props) {
      super(props);

  }
  render() {
    return <div className="mainGame__background">

    <div className="mainGame__Title">Tic Tac Toe</div>

    <Link to="/" className="mainGame__goBackButton">Go Back</Link>

    </div>;
  }
}

export default TicTacToe;
