import React, { useReducer } from 'react'

function Reducer() {
    const [count, setCount] = useReducer((state, action) => {
        switch (action) {
            case 'inc':
                return state + 1
            case 'dec':
                return state - 1
            default:
                return state
        }
    },0)

    return (
        <div>
            <div>Count :{count}</div>
            <button onClick={() => { setCount('inc') }}>Increment</button>
            <button onClick={() => { setCount('dec') }}>Decrement</button>
        </div>
    )
}

export default Reducer