import React, { useState } from 'react'
import './calculator.css'

function Calculator() {

    var display = ''
    var num1
    var ops
    var num2

    function displayvalue(s) {
        display += s
        document.getElementById('display').value = display
    }

    function opclick(op) {
        console.log(display);
        num1 = display
        ops = op
        console.log(num1, ops);
        display += ops
        document.getElementById('display').value = display

    }

    function calcu(s) {
        console.log(">>>>>>>>>>>>>>>>",s);
        num2 = s
        console.log(num1, ops, num2);
        let n1 = parseFloat(num1)
        let n2 = parseFloat(num2)
        let A

        switch (ops) {
            case '+':
                A = n1 + n2
                break;
            default:
                break;
        }

        console.log(A);
        document.getElementById('display').value = A
    }

    function clear() {
        document.getElementById('display').value = ''
        display = ''
        num1 = ''
        num2 = ''
        ops = ''
    }


    return (
        <div className='main_cal'>
            <section className='inner_cal'>
                <input type="text" className='display_cal' value={display} id='display' readOnly />
                <section className='button_section_Cal'>
                    <button className='button_cal' onClick={() => { displayvalue(7) }}>7</button>
                    <button className='button_cal' onClick={() => { displayvalue(8) }}>8</button>
                    <button className='button_cal'>9</button>
                    <button className='button_cal'>X</button>
                    <button className='button_cal'>4</button>
                    <button className='button_cal'>5</button>
                    <button className='button_cal'>6</button>
                    <button className='button_cal'>/</button>
                    <button className='button_cal'>1</button>
                    <button className='button_cal'>2</button>
                    <button className='button_cal'>3</button>
                    <button className='button_cal'>-</button>
                    <button className='button_cal'>.</button>
                    <button className='button_cal'>0</button>
                    <button className='button_cal' onClick={() => { calcu(display) }}>=</button>
                    <button className='button_cal' onClick={() => { opclick('+') }} >+</button>
                    <button className='button_cal' onClick={clear} >clear</button>

                </section>

            </section>
        </div>
    )
}

export default Calculator