import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Landing from "./components/Landing";
import StartGame from "./components/StartGame";
import Wordle from "./components/Wordle";
import TicTacToe from "./components/TicTacToe";
import GameOver from "./components/GameOver";
import NotFound from "./components/NotFound";
import "./App.css";

export default function App() {
return (
<BrowserRouter>
<Routes>
<Route path = "/" element = { <Landing/> }/>
<Route path="/login" element = { < Login /> }/>
<Route path = "/start" element = { < StartGame /> }/>
<Route path = "/wordle" element = { < Wordle /> }/>
<Route path = "/tic-tac-toe" element = { < TicTacToe /> }/>
<Route path = "/game-over" element = { < GameOver /> }/>
<Route path = "*" element = { < NotFound /> }/>
</Routes>
</BrowserRouter>);
}

ReactDOM.render( <App/> , document.getElementById("root"));
