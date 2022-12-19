import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValueAC} from "./bll/counter-reducer";

function AppWithRedux() {

    const value = useSelector<AppStateType, number>( state => state.counter.value)
    const dispatch = useDispatch()

    const clickCounter = () => {
        dispatch(incValueAC())
    }


return (
    <div>
        <h1>{value}</h1>
        <button onClick={clickCounter}>inc</button>
    </div>
)
}
export default AppWithRedux