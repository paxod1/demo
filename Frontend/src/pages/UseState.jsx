import React, { useState } from 'react'

function UseState() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    console.log(name);


    // function inc() {
    //     setCount(count + 1)
    // }
    // function dec() {
    //     setCount(count - 1)
    // }

    return (
        <div>
            <h1> Count: {count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Increment</button>
            <button onClick={() => { setCount(count - 1) }}>Decrement</button>
            <input type="text" placeholder='Enter your name' onChange={(e) => { setName(e.target.value) }} />
        </div>
    )
}

export default UseState