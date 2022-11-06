import React, {ChangeEvent, useEffect, useState} from 'react';
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

    //get from localStorage on update
    useEffect(() => {
        getFromLocalStorage()
    }, [])

    //set localStorage on change inputStartValue and inputMaxValue
    useEffect(() => {
        onClickSet()
    }, [inputStartValue, inputMaxValue])

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
            localStorage.setItem('inputStartValue', JSON.stringify(inputStartValue)) //set to localStorage
            localStorage.setItem('inputMaxValue', JSON.stringify(inputMaxValue))     //set to localStorage
        }

        // get localStorage
        const getFromLocalStorage = () => {
        let valueToNumberStart = localStorage.getItem('inputStartValue');       //get from localStorage
        let valueToNumberMax = localStorage.getItem('inputMaxValue');           //get from localStorage
        if (valueToNumberStart) {
            let numberStart = JSON.parse(valueToNumberStart)
            setInputStartValue(numberStart)
        }
        if (valueToNumberMax){
            let numberMax = JSON.parse(valueToNumberMax)
            setInputMaxValue(numberMax)
        }
        }

        // clear localStorage
        const clearLocalStorage = () => {
        localStorage.clear();
        setInputStartValue(0);
        setInputMaxValue(0)
        }

        // delete Item from localStorage
        const removeLocalStorage = () => {
        localStorage.removeItem('inputStartValue')
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
        <div className={'localStorage'}>
            LocalStorage
            <Button title={'get from localStorage'} onClick={getFromLocalStorage} disabled={disabledSet}/>
            <Button title={'clear localStorage'} onClick={clearLocalStorage} disabled={disabledSet}/>
            <Button title={'remove startValue from localStorage'} onClick={removeLocalStorage} disabled={disabledSet}/>
        </div>
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
