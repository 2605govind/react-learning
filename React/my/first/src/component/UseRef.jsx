import React, { useRef } from 'react'

const UseRef = () => {
    const inputElement = useRef(null);

    const FocusEvent = () => {
        inputElement.current?.focus();
        inputElement.current.value = 'govind'
    }

    console.log(inputElement)
    return (
        <div>

            <input type='text' ref={inputElement} />
            <button onClick={() => FocusEvent()}>Focus</button>
        </div>
    )
}

export default UseRef