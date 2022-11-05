import React, {ChangeEvent} from "react";
import CounterClicks from "./CounterClisks";

type InputType = {
    title: string
    value: number
}

export const Input = (props: InputType, e: ChangeEvent<HTMLInputElement>) => {
    return (
        <div>
            <div>
                <div className={ 'inputValue'}>
                    <span>{props.title}</span><input type={'number'} className={'input'}/>
                </div>
            </div>
        </div>
    )
}