import React, { useState } from 'react'
import './State.css'

function Box() {
    const [position, setPosition] = useState({ left: 100, top: 100 })

    function moveboll(pos) {
        switch (pos) {
            case 'top':
                setPosition({ left: position.left, top: position.top - 20 })
                break;
            case 'right':
                setPosition({ left: position.left + 20, top: position.top })
                break;
            case 'left':
                setPosition({ left: position.left - 20, top: position.top })
                break;
            case 'down':
                setPosition({ left: position.left, top: position.top + 20 })
                break;
        }
    }
    
    return (
        <div>
            <button onClick={() => { moveboll('top') }}>top</button>
            <button onClick={() => { moveboll('right') }}>right</button>
            <button onClick={() => { moveboll('left') }}>left</button>
            <button onClick={() => { moveboll('down') }}>down</button>

            <hr />
            <div className='box' style={{
                backgroundColor: 'red',
                left: position.left + 'px',
                top: position.top + 'px'
            }}>
            </div>

        </div>
    )
}

export default Box