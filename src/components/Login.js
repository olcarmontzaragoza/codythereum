
import React, { Component } from 'react';
import '../styles/Login.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Login extends Component {
  constructor(props) {
      super(props);
    }
  render() {
    return <div className="login__background">

      <div className="login__mainSection">

      <div className="login__title">Codythereum</div>

      <div className="login__centerSquare">


        <div className="login__form">

        <div className="login_inputAndText">

        <div className="login__text">Username</div>

        <input className="login__input"></input>

        </div>

        <div className="login_inputAndText">

        <div className="login__text">Password</div>

        <input className="login__input" type="password"></input>

        </div>

        <div className="login__centerButton">

        <Link to="/" id="login__button">Login</Link>

        </div>

        </div>

        </div>

      </div>

    </div>;
  }
}

export default Login;
