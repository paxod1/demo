import React from 'react'
import '../App.css'
import Navbar from './Navbar'

function Poster() {
    return (
        <div>
            <Navbar />
            <div className='main_poster'>
                <section className='left_side_poster'>
                    <img height={'100%'} width={'80%'} src="../public/hari19.png" alt="" />

                </section>

                <section className='right_side_poster'>
                    <h1 style={{ color: 'white', fontSize: '50px' }}>No Advanced Degrees? <br />
                        No Problem!</h1>

                    <p style={{ color: 'white', fontSize: '20px' }}>If you can read, write, and do basic math, you're already on your way to becoming a <br /> software engineer. No advanced degrees are needed—just your determination and a <br /> willingness to learn</p>
                    <br />
                    <h3 style={{ color: 'white', fontSize: '28px' }}>What's your background?</h3>
                    <br />

                    <div className='poster_buttons_IT'>
                        <button className='buton_IT_back one'>I'm from IT background</button>
                        <button className='buton_IT_back two'> I'm from non IT background</button>

                    </div>
                    <br />
                    <button className='button_career_poster'>Show me a career path</button>

                </section>

            </div>

        </div>
    )
}

export default Poster