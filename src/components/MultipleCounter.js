import { useState } from "react";
import CounterGroup from "./Countergroup";
import CounterSizeGenerator from "./CounterSizeGenerator";

function MultipleCounter(){
    const [counterSize, setCounterSize] = useState(0);

    function updateCounterSize(counterSize){
        setCounterSize(counterSize);
    }

    return (
        <div> 
            <div>Counter Size: {counterSize}</div>
            <CounterSizeGenerator updateCounterSize={updateCounterSize}></CounterSizeGenerator>
            <CounterGroup counterSize={counterSize}></CounterGroup>
            
        </div>
    )
}

export default MultipleCounter;