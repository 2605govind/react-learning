import React, { useReducer } from 'react'

const initialValue = {
    counter: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + 1 }
        case 'decrement':
            return { ...state, counter: state.counter - 1 }
        case 'incrementByAmount':
            return {...state, counter: state.counter + action.payload}
        case 'decrementByAmount':
            return {...state, counter: state.counter - action.payload}    
        case "reset":
            return { ...state, counter: 0 }
        default:
            return state
    }
}



export {reducer, initialValue};