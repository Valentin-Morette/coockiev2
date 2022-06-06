import './App.css';
import { useState, useEffect } from "react";
import coockie from "./assets/img/coockie.png";
import MiniCookie from './components/MiniCookie';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect( () => {

    setInterval( () => {
        setCounter(count => count + 1);
    }, 1000)

  },[])

  const modifier = (color) => {
    if (counter >= 10 && color === "white") {
      setCounter(counter - 10);
    }
    if (counter >= 100 && color === "black") {
        setCounter(counter - 100);
    }
    if (counter >= 1000 && color === "cyan") {
        setCounter(counter - 1000);
    }
    if (counter >= 100 && color === "green") {
        setCounter(counter - 100);
    }
    if (counter >= 1000 && color === "yellow") {
        setCounter(counter - 1000);
    }
    if (counter >= 10000 && color === "red") {
        setCounter(counter - 10000);
    }
  }

  return (
    <div className='all'>
      <h1>Cookie-Clicker</h1>
      <ul className='stats'>
        <li>{counter}</li>
        <li>Cookie per sec</li>
        <li>Cookie per click</li>
      </ul>
      <button className='mainButton' onClick={() => setCounter(count => count + 1)}>
        <img className='mainCookie' draggable="false" src= {coockie} alt="main coockie" />
      </button>
      <div className='allSecondButton'>
        <MiniCookie booster={() => modifier("white")} color = "white" valor = {1}/>
        <MiniCookie booster={() => modifier("black")} color = "black" valor = {10}/>
        <MiniCookie booster={() => modifier("cyan")} color = "cyan" valor = {100}/>
        <MiniCookie booster={() => modifier("green")} color = "green" valor = {1} multiple={true}/>
        <MiniCookie booster={() => modifier("yellow")} color = "yellow" valor = {10} multiple={true}/>
        <MiniCookie booster={() => modifier("red")} color = "red" valor = {100} multiple={true}/>
      </div>
    </div>
  );
}

export default App;
