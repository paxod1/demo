import React, { useReducer } from 'react'
import './State.css'

function BollRed() {

    const [position, setPosition] = useReducer((state, action) => {
        switch (action) {
            case 'top':
                return { left: state.left, top: state.top - 20 }
            case 'right':
                return { left: state.left + 20, top: state.top }
            case 'left':
                return { left: state.left - 20, top: state.top }
            case 'bottom':
                return { left: state.left, top: state.top + 20 }
        }

    }, { left: 100, top: 100 })

    return (
        <div>
            <button onClick={() => { setPosition('top') }}>top</button>
            <button onClick={() => { setPosition('left') }}>left</button>
            <button onClick={() => { setPosition('right') }}>right</button>
            <button onClick={() => { setPosition('bottom') }}>bottom</button>
            <div className='box' style={{
                left: position.left + 'px',
                top: position.top + 'px'
            }}>
            </div>

        </div>
    )
}

export default BollRed