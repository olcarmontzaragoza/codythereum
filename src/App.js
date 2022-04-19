import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Landing from "./components/Landing";
import StartGame from "./components/StartGame";
import MainGame from "./components/MainGame";
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
<Route path = "/main" element = { < MainGame /> }/>
<Route path = "/game-over" element = { < GameOver /> }/>
<Route path = "*" element = { < NotFound /> }/>
</Routes>
</BrowserRouter>);
}

ReactDOM.render( <App/> , document.getElementById("root"));
