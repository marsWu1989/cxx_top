import React from 'react';
import { Link } from 'react-router-dom';
import './Head.css';

function Head() {
  return (
    <div className="Head">
      <header className="App-header">
        <Link to='/'><i className="logo" /></Link>
        <span>IT’S TOPPING 喜欢而已</span>
        <i className="menu" />
      </header>
    </div>
  );
}

export default Head;
