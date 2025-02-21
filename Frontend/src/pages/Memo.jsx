import React, { useMemo, useState } from 'react'

function Memo() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const sum = useMemo(() => {
        console.log("iam working");
        return count2 + 1
    }, [count2])


    return (
        <div>

            <h1> count1:{count1} </h1>
            <h1>count2:{count2} </h1>
            <h1>sum: {sum}</h1>
            <button onClick={() => { setCount1(count1 + 1) }}>incre count1</button>
            <button onClick={() => { setCount2(count2 + 1) }}>incre count2</button>
            
        </div>
    )
}

export default Memo