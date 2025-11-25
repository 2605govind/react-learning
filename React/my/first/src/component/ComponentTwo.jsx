import React from 'react'

const ComponentTwo = ({count, onClickhandler}) => {
     const handleclick = () => onClickhandler()
  return (
    <div>

        <p>{count}</p>
        <button onClick={handleclick}>Increment</button>
    </div>
  )
}

export default ComponentTwo