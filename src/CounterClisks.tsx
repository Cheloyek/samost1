import React, {useState} from "react";
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;



// let [clicks, setClicks] = useState(1)
//
// export const clickCounter = () => {
//     clicks = clicks + 1;
//     console.log (clicks)
//     return clicks
// }



const CounterClicks = () => {
    let [clicks, setClicks] = useState(0)

    const clickCounter = () => {
        if (clicks < 5) {
            setClicks(++clicks)
        }
    }

    const resetButton = () => {
        setClicks(clicks = 0)
    }

    return (
        <div>
            <div></div>
            <div>Счетчик: {clicks}</div>
            <button onClick={clickCounter}>inc</button>
            <button onClick={resetButton}>reset</button>
        </div>
    )
}


export default CounterClicks;
