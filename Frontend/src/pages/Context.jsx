import React, { createContext, useContext, useState } from 'react'

const CreateContext = createContext()


function Context() {
    const username = 'alan'
    const [name, setName] = useState('')
    return (
        <div>
            <CreateContext.Provider value={name} >
                <div>
                    <h1>Main component</h1>
                    <input type="text" placeholder='Enter a name' onChange={(e) => { setName(e.target.value) }} />
                    <hr />
                    <Hooks />
                    
                </div>
            </CreateContext.Provider>
        </div>
    )
}

function Hooks() {
    const name = useContext(CreateContext)

    return (
        <div>
            <h1>HOOK</h1>
            <h2>user name :{name}</h2>
        </div>
    )

}


export default Context