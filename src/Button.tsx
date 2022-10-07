import React from "react";
import './App.css';

type ButtonPropsType = {
    name: string,
    isDisabled: boolean,
    callback: any
}



//в кнопку приходит название, функция и условие при котором isDisabled
const Button = (props: ButtonPropsType) => {
    return (
        <span>
            <button className={props.isDisabled ? 'button-disabled' : props.name} onClick={props.callback} disabled={props.isDisabled}>{props.name}</button>
        </span>
    )
}

export default Button;