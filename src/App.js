import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, addSagaManyCustomersAction, removeCustomerAction} from "./store/customerReducer";
import {addCashAction, asyncAddCashAction, asyncGetCashAction, getCashAction} from "./store/cashReducer";

function App() {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customer.customers)
    console.log(cash)

    const addCash = () => {
        dispatch(addCashAction())
    }

    const getCash = () => {
        dispatch(getCashAction())
    }

    const addCustomer = (name) => {
        dispatch(addCustomerAction({name}))
    }

    const deleteCustomer = (name) => {
        dispatch(removeCustomerAction({name}))
    }

    return (
        <div>
            <div
                style={{display: "flex", width: 500, flexDirection: 'column', margin: 'auto', padding: '50'}}>
                <button onClick={() => dispatch(asyncAddCashAction())}>Add Cash</button>
                <button onClick={() => dispatch(asyncGetCashAction())}>Get Cash</button>
                <button onClick={() => addCustomer(prompt('Customer name'))}>Add Customer</button>
                <button onClick={() => deleteCustomer(prompt('Customer name'))}>Delete Customer</button>
                <button onClick={() => dispatch(addSagaManyCustomersAction())}>Get Customers from DB</button>
                <h1>{cash}</h1>
            </div>
            <div>
                {customers.length > 0
                    ?
                    customers.map(customer => <p onClick={() => deleteCustomer(customer.name)}>{customer.name}</p>)
                    : 'Customers does not exists'
                }
            </div>
        </div>
    );
}

export default App;
