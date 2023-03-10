import React from "react";
import "./index.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from "./page/Home/Home";
import NavBar from "./components/NavBar/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Router>
          <Route exact path="/" element={<Home />} />
        </Router>
      </div>
    </BrowserRouter>
  );
}
