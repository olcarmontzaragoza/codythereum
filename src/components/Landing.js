import React, { Component } from 'react';
import '../styles/Landing.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Landing extends Component {
  constructor(props) {
      super(props);

  }
  render() {
    return <div className="landing__background">

      <div className="landing__topLeft">
        <img className="landing__profilePhoto" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/272401328_7119681694709443_145450356369664909_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=4KNYypwRJxkAX-0DBvq&_nc_ht=scontent-sjc3-1.xx&oh=00_AT_YXHmgeh4jhF5mU8qRFIgRFd4UAhQHmaE5ZxEhgZCUng&oe=626293FF"/>

          <div className="landing__topLeftText">
          <div className="landing__name">Oliver David</div>
          <div className="landing__ethers">5 eth</div>
          </div>

          <button className="landing__donationHistoryButton">Donation History</button>
      </div>

      <Link to="/login" className="mainGame__goBackButton">Sign Out</Link>


      <div className="landing__games">

      <Link to="/tic-tac-toe" className="landing__gameBox">

      <div className="landing__gameBoxHeader">
        <div className="landing__gameBoxHeaderText">Tic Tac Toe</div>
      </div>


      <div className="container">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1200px-Tic_tac_toe.svg.png" className="landing__gameBoxImage"/>
        <div className="overlay">
          <div className="landing__playGameText">Play Game! 🕹️</div>
        </div>
      </div>

      </Link>

      <div className="landing__gameBoxSpacing"></div>

      <Link to="/wordle" className="landing__gameBox">

      <div className="landing__gameBoxHeader">
      <div className="landing__gameBoxHeaderText">Wordle</div>
      </div>

      <div className="container">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Wordle_196_example.svg/1200px-Wordle_196_example.svg.png" className="landing__gameBoxImage"/>
        <div className="overlay">
          <div className="landing__playGameText">Play Game! 🕹️</div>
        </div>
      </div>

      </Link>

      </div>

    </div>;
  }
}

export default Landing;
