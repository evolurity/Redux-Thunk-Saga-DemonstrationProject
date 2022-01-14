const defaultState = {
    customers: []
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'
export const ADD_SAGA_MANY_CUSTOMERS = 'ADD_SAGA_MANY_CUSTOMERS'
const DELETE_CUSTOMER = 'DELETE_CUSTOMER'


export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case ADD_MANY_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]}
        case DELETE_CUSTOMER:
            const filteredCustomers = state.customers.filter(customer => customer.name !== action.payload.name)
            return {...state, customers: filteredCustomers}
        default:
            return state
    }
}

export const addCustomerAction = payload => ({type: ADD_CUSTOMER, payload})
export const addManyCustomersAction = payload => ({type: ADD_MANY_CUSTOMERS, payload})
export const removeCustomerAction = payload => ({type: DELETE_CUSTOMER, payload})
export const addSagaManyCustomersAction = payload => ({type: ADD_SAGA_MANY_CUSTOMERS, payload})
