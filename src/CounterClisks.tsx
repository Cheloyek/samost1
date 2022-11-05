import React, {ChangeEvent, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;
import {Input} from "./Input";
import {Button} from "./Button";



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
    clicks: number
}

// const setOnClick = () => {
//     onclick()
// }

const CounterClicks = (props: CounterType) => {
//     let [clicks, setClicks] = useState(0)
//     const clickCounter = () => {
//         if (clicks < 5) {
//             setClicks(++clicks)
//         }
//     }

    // const resetButton = () => {
    //     // setClicks(clicks = 0)
    //     setClicks(clicks = 1)
    // }
    const error = () => {
        if (props.startValue > props.maxValue) {
            return "Error"
        }
    }

    return (
        <div>
            <div className={'mainCounter'}>
                {/*<div>{props.startValue}</div>*/}
                {/*<div>{props.maxValue}</div>*/}
                <div className={props.clicks < props.maxValue ? 'counterNumber' : 'counterIsDone'}>{props.clicks}</div>
                {/*<div className='buttonMain'>*/}
                    {/*<button onClick={clickCounter} className={'button'} disabled={clicks < 5 ? false : true}>inc</button>*/}
                    {/*<button onClick={clickCounter} className={'button'} disabled={clicks < 5 ? false : true}>inc</button>*/}
                    {/*<button onClick={resetButton} className={'button'} disabled={clicks < 1 ? true : false}>reset</button>*/}
                {/*</div>*/}
                {/*<Button onClickInc={clickCounter} disabledInc={clicks < 5 ? false : true} onClickReset={resetButton} disabledReset={clicks < 1 ? true : false}/>*/}
            </div>
        </div>

    )
}


export default CounterClicks;
