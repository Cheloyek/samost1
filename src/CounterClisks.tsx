import React, {ChangeEvent, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;
import {Input} from "./Input";



// let [clicks, setClicks] = useState(1)
//
// export const clickCounter = () => {
//     clicks = clicks + 1;
//     console.log (clicks)
//     return clicks
// }

export type CounterType = {
    startValue: number,
    maxValue: number
}

const CounterClicks = (props: CounterType) => {
    let [clicks, setClicks] = useState(0)


    const clickCounter = () => {
        if (clicks < 5) {
            setClicks(++clicks)
        }
    }

    const resetButton = () => {
        // setClicks(clicks = 0)
        setClicks(clicks = 1)
    }


    return (
        <div>
            <div className={'mainCounter'}>
                <div className={clicks < 5 ? 'counterNumber' : 'counterIsDone'}>{clicks}</div>
                <div className='buttonMain'>
                    {/*<button onClick={clickCounter} className={'button'} disabled={clicks < 5 ? false : true}>inc</button>*/}
                    <button onClick={clickCounter} className={'button'} disabled={clicks < 5 ? false : true}>inc</button>
                    <button onClick={resetButton} className={'button'} disabled={clicks < 1 ? true : false}>reset</button>
                </div>
            </div>
        </div>

    )
}


export default CounterClicks;
