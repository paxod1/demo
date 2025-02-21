import React, { useState } from 'react'
import './State.css'

function State() {
    const [color, setColor] = useState('green')

    return (
        <div>
            <div className='box' style={{ backgroundColor: color }} ></div>

            <hr />

            <select onChange={(e) => { setColor(e.target.value) }}>
                <option >Red</option>
                <option >blue</option>
                <option >yellow</option>
                <option >green</option>
            </select>

        </div>
    )
}

export default State