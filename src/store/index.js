import {createStore, combineReducers, applyMiddleware} from "redux";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import {countWatcher} from "../saga/countSaga";
import {rootWatcher} from "../saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    cash: cashReducer,
    customer: customerReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)