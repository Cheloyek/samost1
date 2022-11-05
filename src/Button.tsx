import React, {useState} from "react";

export type ButtonType = {
    onClickInc?: any
    onClickReset?: any
    onClick: any
    disabledInc?: boolean
    disabled?: boolean
    disabledReset?: boolean
    title: string
}

export const Button = (props: ButtonType) => {
    let [clicks, setClicks] = useState(0)

    return (
        <div className={'buttonMain'}>
            {/*<button onClick={clickCounter} className={'button'} disabled={clicks < 5 ? false : true}>inc</button>*/}
            {/*<button onClick={resetButton} className={'button'} disabled={clicks < 1 ? true : false}>reset</button>*/}
            {/*<button className={'button'} onClick={props.onClickInc} disabled={props.disabledInc}>inc</button>*/}
            {/*<button className={'button'} onClick={props.onClickReset} disabled={props.disabledReset}>reset</button>*/}
            <button className={'button'} onClick={props.onClick} disabled={props.disabled}>{props.title}</button>
            {/*<button className={'button'} onClick={props.onClickReset} disabled={props.disabled}>reset</button>*/}
            <div>
                {/*<button className={'button'}>set</button>*/}
            </div>
        </div>
    )
}