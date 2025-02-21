import React, { useEffect, useState } from 'react'

function Effect() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [check, setCheck] = useState(0)

    useEffect(() => {
        console.log("helooo");
        setCount(count + 1)
    }, [check])

    return (
        <div>Effect
            <h1>count:{count}</h1>

            <h1>check{check}</h1>
            <button onClick={() => { setCheck(check + 1) }}>inc</button>
            <hr />

            <h1>count1:{count1}</h1>
            <button onClick={() => { setCount1(count1 + 1) }}>inc count 1</button>

        </div>
    )
}

export default Effect