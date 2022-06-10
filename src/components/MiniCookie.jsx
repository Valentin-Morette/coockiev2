import { motion } from "framer-motion";

const MiniCookie = ({ booster, color, valor, multiple }) => {
  return (
    <div className="cookieBooster">
      <button className="secondButton" onClick={booster}>
        <motion.img
          className="secondCookie"
          draggable="false"
          src={require(`./../assets/img/${color}_coockie.png`)}
          whileTap={{ scale: 0.8 }}
          alt="cookiebooster"
        />
      </button>
      {multiple ? <p>+{valor} 🍪⏲️</p> : <p>+{valor} 🍪🖱️</p>}
      {multiple ? (
        <p>Cost : {valor * 100} 🍪</p>
      ) : (
        <p>Cost : {valor * 10} 🍪</p>
      )}
    </div>
  );
};

export default MiniCookie;
