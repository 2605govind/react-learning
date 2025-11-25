import React, { useReducer, useState } from 'react'
import {reducer, initialValue} from './CounterReduce.js'


const Counter = () => {
    const [amount, setAmount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialValue)
  return (
    <div> 
        <h2>Counter: {state.counter}</h2>
        <button onClick={() => dispatch({type: "increment"})}>+</button>
        <button onClick={() => dispatch({type: "decrement"})}>-</button>

        <br />
        <input type='number' placeholder='Enter Amount' value={amount} onChange={e => setAmount(Number(e.target.value))}/>
        <button onClick={() => dispatch({type: "incrementByAmount", payload: amount})}>+ By Amount</button>
        <button onClick={() => dispatch({type: "decrementByAmount", payload: amount})}>- By Amount</button>
    </div>
  )
}

export default Counter