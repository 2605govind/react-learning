import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [list, setList] = useState([]);

    const addInList = () => {
        setList((prev) => [...prev, {
            name: "Goind",
            id: Math.floor(Math.random() * 10)
        }])

        // setList((prev) => prev.concat({
        //     name: "Goind",
        //     id: Math.floor(Math.random() * 10)
        // }))
    }

    console.log(list)
  return (
    <div>Counter

        <button onClick={addInList}>Add</button>
    </div>
  )
}

export default Counter