import React, {ChangeEvent, useState} from "react";
import CounterClicks from "./CounterClisks";
import CounterClisks from "./CounterClisks";

type InputType = {
    title: string
    value: number
}

export const Input = (props: any) => {
    // const [inputMaxValue, setInputMaxValue] = useState<any>(0)
    // const [inputStartValue, setInputStartValue] = useState<any>(0)
    // const onChangeSetMaxInput = (e: ChangeEvent<HTMLInputElement>) => {
    //     setInputMaxValue(e.currentTarget.value)
    //     console.log(inputMaxValue)
    // }
    // const onChangeSetStartInput = (e: ChangeEvent<HTMLInputElement>) => {
    //     setInputStartValue(e.currentTarget.value)
    //     console.log(inputMaxValue)
    // }
    return (
        <div>
            <div>
                <div className={props.className}>

                    {/*<div>*/}
                    {/*    <span>max value</span><input type={'number'} className={'input'} onChange={onChangeSetMaxInput} title={'max value'} value={inputMaxValue}/>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <span>start value</span><input type={'number'} className={'input'} onChange={onChangeSetStartInput} title={'start value'} value={inputStartValue}/>*/}
                    {/*</div>*/}
                    <div>
                        <span>{props.title}</span><input type={'number'} className={'input'} onChange={props.onChange} title={'max value'} value={props.value}/>
                    </div>
                    {/*<div>*/}
                    {/*    <span>start value</span><input type={'number'} className={'input'} onChange={onChangeSetStartInput} title={'start value'} value={inputStartValue}/>*/}
                    {/*</div>*/}

                    {/*<div>{inputMaxValue}</div>*/}
                </div>
            </div>
            {/*<div>{e.currentTarget.value}</div>*/}
        </div>
    )
}