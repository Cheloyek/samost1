import React from "react";

type InputType = {
    title: string
    value: number
}

export const Input = (props: InputType) => {
    return (
        <div>
            <div>
                <div className={ 'inputValue'}>
                    <span>{props.title}</span><input className={'input'}/>
                </div>
            </div>
        </div>
    )
}