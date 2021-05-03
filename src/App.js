import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav">
          <BrowserRouter>
            <Link to={"/"} className="nav-link"><img className="icon" src="/img/home.png" /></Link>
            <Link to={"/"} className="nav-link"><img className="icon" src="/img/chat.png" /></Link>
            <Link to={"/"} className="nav-link"><img className="icon" src="/img/bolt.png" /></Link>
            <Link to={"/"} className="nav-link"><img className="icon" src="/img/person.png" /></Link>
            <Link to={"/"} className="nav-link"><img className="icon" src="/img/picture.png" /></Link>
            <Link to={"/"} className="nav-link"><img className="icon" src="/img/ratings.png" /></Link>
            <Link to={"/"} className="nav-link"><img className="icon" src="/img/dice.png" /></Link>
          </BrowserRouter>
        </nav>
        <div className="spin-holder">
          <div className="welcome">
            <p>WELCOME TO THE CIRCLE</p>
          </div>
          <div className="spinner white"></div>
          <div className="spinner white-inner"></div>
          <div className="spinner red"></div>
          <div className="spinner red-inner"></div>
          <div className="spinner purple"></div>
          <div className="spinner purple-inner"></div>
          <div className="spinner blue"></div>
          <div className="spinner blue-inner"></div>
        </div>
        {/* <WeekContainer /> */}
      </div>
    );
  }
}

export default App;