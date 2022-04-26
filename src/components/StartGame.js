
import React, { Component } from 'react';
import '../styles/StartGame.css';
import { useState } from "react";
import { ethers } from "ethers";


class StartGame extends Component {
  constructor(props) {
      super(props);

  }
  render() {
    return <div className="startGame__background">
      Start Game!

    </div>;
  }
}

export default StartGame;
