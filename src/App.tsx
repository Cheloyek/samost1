import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterClicks  from "./CounterClisks";
import {Input} from "./Input";
import {Button} from "./Button";

function App() {
  return (
    <div className="App">
      <CounterClicks/>
      <div className={'mainInput'}>
        <Input title={'max value'} value={5}/>
        <Input title={'start value'} value={1}/>
        <Button/>
      </div>
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
