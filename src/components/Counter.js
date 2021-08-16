import { useState } from "react";

function Counter(){
    const [number, setNumber] = useState(0);

    function increase(){
        setNumber(number+1);
    }

    function decrease(){
        setNumber(number-1);
    }

    return (
        <div>
        <button onClick={decrease} className="minus">-</button>
        <span className="number">{number}</span>
        <button onClick={increase} className="plus">+</button>
        </div>
    );
}

export default Counter;

