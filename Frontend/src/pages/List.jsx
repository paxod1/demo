import React from 'react'

function List() {

    const fruits = ['mango', 'orange', 'apple', 'banana', 'pineapple']

    return (
        <div>
        
            <ul>
                {
                    fruits.map((a, index) => (
                        <li key={index}>{a}</li>
                    ))
                    
                }
            </ul>

        </div>
    )
}

export default List