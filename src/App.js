import "./App.css";
import { useState, useEffect } from "react";
import coockie from "./assets/img/coockie.png";
import MiniCookie from "./components/MiniCookie";
import { motion } from "framer-motion";

function App() {
  const [counter, setCounter] = useState(1000);
  const [cpp, setCpp] = useState(1);
  const [cps, setCps] = useState(1);

  useEffect(() => {
    const myTimer = setInterval(() => {
      setCounter((counter) => counter + cps);
      console.log("Interval Launch");
    }, 1000);
    return () => clearInterval(myTimer);
  }, [cps]);

  const modifier = (color) => {
    if (counter >= 10 && color === "white") {
      setCounter(counter - 10);
      setCpp(cpp + 1);
    }
    if (counter >= 100 && color === "black") {
      setCounter(counter - 100);
      setCpp(cpp + 10);
    }
    if (counter >= 1000 && color === "cyan") {
      setCounter(counter - 1000);
      setCpp(cpp + 100);
    }
    if (counter >= 100 && color === "green") {
      setCounter(counter - 100);
      setCps(cps + 1);
    }
    if (counter >= 1000 && color === "yellow") {
      setCounter(counter - 1000);
      setCps((prev) => prev + 10);
    }
    if (counter >= 10000 && color === "red") {
      setCounter(counter - 10000);
      setCps(cps + 100);
    }
  };

  return (
    <div className="all">
      <h1>Cookie-Clicker</h1>
      <ul className="stats">
        <li>{counter}</li>
        <li>{cpp} 🍪🖱️</li>
        <li>{cps} 🍪⏲️</li>
      </ul>
      <button
        className="mainButton"
        onClick={() => setCounter((count) => count + cpp)}
      >
        <motion.img
          className="mainCookie"
          draggable="false"
          src={coockie}
          alt="main coockie"
          whileTap={{ scale: 0.9 }}
        />
      </button>
      <div className="allSecondButton">
        <MiniCookie booster={() => modifier("white")} color="white" valor={1} />
        <MiniCookie
          booster={() => modifier("black")}
          color="black"
          valor={10}
        />
        <MiniCookie booster={() => modifier("cyan")} color="cyan" valor={100} />
        <MiniCookie
          booster={() => modifier("green")}
          color="green"
          valor={1}
          multiple={true}
        />
        <MiniCookie
          booster={() => modifier("yellow")}
          color="yellow"
          valor={10}
          multiple={true}
        />
        <MiniCookie
          booster={() => modifier("red")}
          color="red"
          valor={100}
          multiple={true}
        />
      </div>
    </div>
  );
}

export default App;
