import React from "react";
import {combineReducers, createStore, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";

type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rooReducer>

const rooReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rooReducer)


