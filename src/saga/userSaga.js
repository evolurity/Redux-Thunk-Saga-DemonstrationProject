import {put, takeEvery, call} from "redux-saga/effects";
import {addCashAction} from "../store/cashReducer";
import {ADD_SAGA_MANY_CUSTOMERS, addManyCustomersAction} from "../store/customerReducer";

const fetchUserFromApi = () => fetch('https://jsonplaceholder.typicode.com/users/')

function* fetchUserWorker() {
    const data = yield call(fetchUserFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(addManyCustomersAction(json))
}

export function* userWatcher() {
    yield takeEvery(ADD_SAGA_MANY_CUSTOMERS, fetchUserWorker)
}