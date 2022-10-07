import React, {useState} from 'react';
import './App.css';
// import CounterClicks  from "./CounterClisks";
import Button from "./Button";
import InputValue from "./InputValue";

function App() {
    //максимальное значение
    const MAXVALUE = 5;
    //стартовое значение
    const STARTVALUE = 0;
    //шаг
    const STEP = 1;

    //useState со стартовым значением
    const [counter, setCounter] = useState<number>(STARTVALUE)

    //счетчик - при нажатии на кнопку inc увеличивает счетчик на STEP
    const clickCounter = () => {
        if (counter < MAXVALUE && counter >= STARTVALUE) {
            // setCounter(++counter)
            // clicks = clicks + 1 - изменять значение state не допустимо
            setCounter(click => click + STEP)
        }
    }

    //сброс счетчика при нажатии кнопки reset на STARTVALUE
    const resetCounter = () => {
        setCounter(STARTVALUE)
    }

    //неактивна кнопка inc при значении счетчика MAXVALUE
    const isAddButtonDisabled = (
        counter === MAXVALUE
    )

    //неактивна кнопка reset при значении счетчика STARTVALUE
    const isResetButtonDisabled = (
        counter === STARTVALUE
    )

    //изменение цвета счетчика при достижении MAXVALUE
    const countColorStyle = {
        color: counter === MAXVALUE ? "red" : "green"
    }

  return (
    <div className="App">
        <div className="counter">Счетчик до {MAXVALUE}: <span style={countColorStyle}>{counter}</span></div>
            <InputValue />
            <Button name={"inc"} isDisabled={isAddButtonDisabled} callback={clickCounter}/>
            <Button name={"reset"} isDisabled={isResetButtonDisabled} callback={resetCounter}/>
    </div>
  );
}

export default App;
