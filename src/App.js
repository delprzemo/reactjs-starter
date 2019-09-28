import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

function App() {
  let colorClassName = "red-background";

  function getTickElement() {
    var second = new Date().getSeconds();
    colorClassName = (second % 2 === 0) ? "green-background" : "red-background";
    const element = <div className={colorClassName}></div>
    return element;
  }

  return (
    getTickElement()
  );
}

export default App;
