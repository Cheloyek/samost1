import React, {ChangeEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import CounterClicks, {CounterType} from "./CounterClisks";
import {Input} from "./Input";
import {Button} from "./Button";
import CounterClisks from "./CounterClisks";

function App(props: any) {
    //
    const [inputMaxValue, setInputMaxValue] = useState<any>(0)
    const [inputStartValue, setInputStartValue] = useState<any>(0)
    const onChangeSetMaxInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInputMaxValue(Number(e.currentTarget.value))
    }
    const onChangeSetStartInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInputStartValue(Number(e.currentTarget.value))
    }

        let [clicks, setClicks] = useState(0)
        const clickCounter = () => {
            if (clicks < inputMaxValue) {
                // setClicks(++clicks)
                setClicks(++clicks)
            }
        }
        const onClickSet = () => {
            setClicks(inputStartValue)
        }

        const resetButton = () => {
            // setClicks(clicks = 0)
            setClicks(clicks = inputStartValue)
        }
        const disabledInc = clicks < inputMaxValue && inputStartValue > 0 && inputMaxValue > 0 && inputStartValue < inputMaxValue  ? false : true
        const disabledReset = clicks <= inputStartValue || inputStartValue < 0 || inputMaxValue < 0 ? true : false
        const disabledSet = clicks <= inputStartValue && inputStartValue <= inputMaxValue ? false : true
    const errorClassName = inputStartValue <= inputMaxValue && inputStartValue >= 0 && inputMaxValue >= 0 ? 'inputValue' : 'inputError'

    //

  return (
    <div className="App">
      <div className={'mainInput'}>
        <Input className={errorClassName} title={'max value'} onChange={onChangeSetMaxInput} value={inputMaxValue}/>
        <Input className={errorClassName} title={'start value'} onChange={onChangeSetStartInput} value={inputStartValue}/>
          <span className={errorClassName}>{inputStartValue < inputMaxValue && inputStartValue >= 0 && inputMaxValue >= 0 ? 'Enter values and press "set" ' : 'Incorrect value'}</span>
        {/*<Input title={'start value'} value={1}/>*/}
      </div>
        <CounterClisks startValue={inputStartValue} maxValue={inputMaxValue} clicks={clicks} />
        <Button title={'inc'} onClick={clickCounter} disabled={disabledInc}/>
        <Button title={'reset'} onClick={resetButton} disabled={disabledReset}/>
        <Button title={'set'} onClick={onClickSet} disabled={disabledSet}/>
        {/*<Button title={'set'} onClickInc={clickCounter} disabledInc={clicks < 5 ? false : true} onClickReset={resetButton} disabledReset={clicks < 1 ? true : false}/>*/}
        {/*<div className='name1'>*/}
        {/*    <div className='blocks'>*/}
        {/*        <div className='block'>sdsdsd</div>*/}
        {/*        <div className='block'>sdsdsd</div>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </div>
  );
}

export default App;
