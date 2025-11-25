import React from 'react'
import { useRef, useEffect, useState } from 'react'


const Timer = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    const handleStop = () => {
        if (intervalRef.current){
            clearInterval(intervalRef.current)
            intervalRef.current = null;
        }
    }

    const handleStart = () => {
        if (!intervalRef.current) {
            console.log("hey")
            intervalRef.current = setInterval(() => {
                setCount(prevCount => prevCount + 1)
            }, 1000)
        }
    }

    return (
        <div>
            <h1>Timer: {count} seconds</h1>
            <button onClick={handleStop}>Stop Timer</button>
            <button onClick={handleStart}>Start Timer</button>
        </div>
    )
}

export default Timer