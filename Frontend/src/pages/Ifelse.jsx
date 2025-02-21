import React, { useState } from 'react'

function Ifelse() {
    const [islogin, setIslogin] = useState(true)
    const [Loggedin, setLoggedin] = useState(false)

    function loged() {
        setLoggedin(!Loggedin)
    }

    return (
        <div>
            <h1>If else Inline</h1>
            {
                islogin ? "Welcome user" : "Please login to contiune"
            }
            <h1 style={{ color: 'red' }}>Condition Rendering with AND oprerator</h1>
            {Loggedin && <h2 style={{ color: 'blue' }}>Welome back ,user</h2>}
            {!Loggedin && <h1 style={{ color: 'green' }}>Please log in to continue.</h1>}
            <button onClick={loged}> {Loggedin ? 'Logout' : 'Login'} </button>
        </div>
    )
}

export default Ifelse   