import React from 'react'
import { useState, useEffect } from 'react'

const UseEffect = () => {
    const [value, setValue] = useState(0);
    const [something, setSomething] = useState(0);
    const [data, setData] = useState([]);

    // Error--------------------------
    // if(value > 0 ) {
    //     useEffect(() => {
    //         console.log("call useEffect")
    //         document.title = `Increment ${value}`
    //     }, [value])
    // }

    // useEffect(() => {
    //     if (value > 4) {
    //         console.log("call useEffect")
    //         document.title = `Increment ${value}`
    //     }
    // }, [value])



    useEffect(() => {
        async function getData() {
            const response =await fetch(`https://jsonplaceholder.typicode.com/todos`)
            const data = await response.json();

            if(data && data.length) {
                setData(data)
            }
        }

        getData();

    }, [])

    return (
        <div>
            {/* <h1>{value}</h1>
            <button onClick={() => setValue(v => v + 1)}>Click Me</button>
            <button onClick={() => setSomething(v => v + 1)}>Click Something {something}</button> */}

            <ul>
                {
                    data.map(todo => (
                        <li key={todo.id}>{todo.title[0].toUpperCase() + todo.title.slice(1)}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UseEffect