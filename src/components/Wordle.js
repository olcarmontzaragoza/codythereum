import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import '../styles/MainGame.css';


class Wordle extends Component {
  constructor(props) {
      super(props);

  }
  render() {
    return <div className="mainGame__background">

    <div className="mainGame__Title">Wordle</div>

    <Link to="/" className="mainGame__goBackButton">Go Back</Link>

    </div>;
  }
}
  
export default Wordle;
