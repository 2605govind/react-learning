import React from 'react'

const Greeting = (props) => {

    return props.timeOfDay === 'morning' ? (<h1>Good Morning</h1>) : (<h1>Good Afternoon</h1>)

}

export default Greeting