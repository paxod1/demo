import React from 'react'
import './Navbar.css'
import { FaSearch } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>

            <section className='main_navbar'>

                <div className='inner_navbar'>
                    <section className='leftside_navbar'>
                        <img height={'90px'} width={'200px'}
                            src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2010-2013.png" alt="logo" />

                        <div className='serch_section'>

                            <input type="text" placeholder='Search' className='navbar_search_input' />
                            <FaSearch className='icon_search' />

                        </div>

                    </section>

                    <section className='rightside_navbar'>

                        <Link to={'/home'}>    <div className='menus_navbar'><IoMdHome />Home</div> </Link>
                        <Link to={'/poster'}>  <div className='menus_navbar'>Poster</div></Link>
                        <Link to={'/contact'}>  <div className='menus_navbar'>Contact us</div></Link>
                        <Link to={'/about'}>   <div className='menus_navbar'>About us</div></Link>

                        <select className='dropdown_menus' >
                            <option >Home</option>
                            <option >profile</option>
                            <option >Contact us</option>
                            <option >Logout</option>
                        </select>

                    </section>

                </div>

            </section>


        </div>
    )
}

export default Navbar