import React, { useEffect, useState } from 'react'

const ExampleOne = () => {
    const [count, setCount] = useState(() => {
        const initialcount = 10;
        return initialcount;
    })

    const [randomNumber, setRandomNumber] = useState(() => (Math.floor(Math.random()*100)));

    const [name, setName] = useState(() => {
        const savedname = localStorage.getItem("name");
        return savedname ? JSON.parse(savedname): "";
    })

    const increment = () => setCount(prev => prev + 1)

    const generateRandomNumber = () =>  {
        setRandomNumber((Math.floor(Math.random()*100)))
    }


    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name))
    } ,[name])

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleClaer = (event) => {
        setName("")
    }
  return (
    <div>
        <h1>Count: {count}</h1>
        <h2>randomNumber: {randomNumber}</h2>
        <button onClick={increment}>Increament</button>
        <button onClick={generateRandomNumber}>change Random Number</button>

        <div>
            <h1>Your Name: {name}</h1>

                <input type='text' value={name} onChange={handleChange} placeholder='Enter your name'/>
            <button onClick={handleClaer}>Clear Name</button>
   
        </div>
    </div>
  )
}

export default ExampleOne