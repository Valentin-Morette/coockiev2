// import black from "./../assets/img/black_coockie.png";
// import cyan from "./../assets/img/cyan_coockie.png";
// import green from "./../assets/img/green_coockie.png";
// import red from "./../assets/img/red_coockie.png";
// import white from "./../assets/img/white_coockie.png";
import yellow from "./../assets/img/yellow_coockie.png";

const MiniCookie = ({booster,color, valor, multiple}) => {

    const colored = "whitecoockie";

    return (
        <div className="cookieBooster">
            <button className="secondButton" onClick={booster}>
                <img className="secondCookie" draggable="false" src={yellow} />
            </button>
            {multiple ? <p>+{valor} 🍪⏲️</p> : <p>+{valor} 🍪🖱️</p>}
            {multiple ? <p>Cost : {valor * 100} 🍪</p> : <p>Cost : {valor * 10} 🍪</p>}
        </div>
    )
}

export default MiniCookie;