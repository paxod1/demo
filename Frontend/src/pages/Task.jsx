import React, { useEffect, useState } from 'react'

function Task() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [sum, setSum] = useState(0)
    const [check, setCheck] = useState(0)

    useEffect(() => {
        let n1 = parseFloat(num1)
        let n2 = parseFloat(num2)
        setSum(n1 + n2)

    }, [check])

    return (

        <div>

            <input type="number" placeholder='Eneter number' onChange={(e) => { setNum1(e.target.value) }} required />
            <input type="number" placeholder='Eneter number' onChange={(e) => { setNum2(e.target.value) }} required />
            <button onClick={() => { setCheck(check + 1) }}>submit</button>
            <h1>{sum} </h1>

        </div>
        
    )
}



export default Task