import React from 'react'
import './Zomato.css'
import { IoLocationSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropright } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Accordion from 'react-bootstrap/Accordion';
import { TbWorld } from "react-icons/tb";
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";

function Zomato() {
    return (
        <div>
            <section className='first_poster_zomato_main'>
                <div className='first_innerdiv'>
                    <div className='first_navbar'>

                        <div className='first_navbar_left'>
                            <h6 style={{ color: 'white' }}>Get the App</h6>
                        </div>

                        <div className='first_navbar_right'>
                            <h5 style={{ color: 'white' }}>Investor Relations</h5>
                            <h5 style={{ color: 'white' }}>Add resturant</h5>
                            <h5 style={{ color: 'white' }}>Log in</h5>
                            <h5 style={{ color: 'white' }}>Sign up</h5>
                        </div>

                    </div>

                    <div className='First_middle_main'>
                        <img height={'60px'} width={'300px'}
                            src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" />
                        <h1 style={{ color: 'white', marginTop: '2%', marginBottom: '2%' }}>Discover the best food & drinks in Kochi</h1>

                        <div className='first_inputs_main'>

                            <IoLocationSharp className='first_location_icon' />
                            <div className='first_main_dropdown'>
                                <select className='first_dropdown_location'>
                                    <option>Fort Kochi,Kochi</option>
                                </select>
                            </div>
                            <div className='first_line_break_inputs'></div>
                            <div>
                                <input className='first_search' placeholder='Search for resturant, cuisine or a dish' type='text' />
                                <CiSearch className='first_search_icon' />
                            </div>



                        </div>

                    </div>

                </div>

            </section>



            <section className='second_section_main'>
                <div className='second_inner_div'>

                    <div className='second_card_main'>

                        <div className='second_card_onbyone'>
                            <img height={'200px'} width={'100%'} style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                                src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp" alt="" />
                            <div style={{ paddingLeft: '3%' }}>
                                <div style={{ fontSize: '23px' }}>Order online</div>
                                <div style={{ fontSize: '18px' }}>Stay home and order to your doorstep</div>
                            </div>
                        </div>

                        <div className='second_card_onbyone'>
                            <img height={'200px'} width={'100%'} style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                                src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp" alt="" />
                            <div style={{ paddingLeft: '3%' }}>
                                <div style={{ fontSize: '23px' }}>Dining</div>
                                <div style={{ fontSize: '18px' }}>View the city's favourite dining venues </div>
                            </div>
                        </div>
                    </div>

                    <div className='second_collections_main'>
                        <h1>Collections</h1>
                        <div className='second_collection_subheading_main'>

                            <p className='second_collection_subheading_left'>Explore curated lists of top restaurants, cafes, pubs, and bars in Kochi, based on trends</p>
                            <p className='second_collection_subheading_right'>All collections in Kochi <IoMdArrowDropright style={{ fontSize: '25px' }} /></p>

                        </div>

                        <div className='second_collection_card_main'>

                            <div className='second_collection_onebyone_card one_collection'>

                                <div className='second_collection_onebyone_card_inner '>
                                    <h5>Places for Art Lovers</h5>
                                    <h6>7 Places <IoMdArrowDropright style={{ fontSize: '25px' }} /></h6>
                                </div>

                            </div>

                            <div className='second_collection_onebyone_card two_collection'>
                                <div className='second_collection_onebyone_card_inner '>
                                    <h5>Places for Art Lovers</h5>
                                    <h6>7 Places <IoMdArrowDropright style={{ fontSize: '25px' }} /></h6>
                                </div>

                            </div>

                            <div className='second_collection_onebyone_card three_collection'>

                                <div className='second_collection_onebyone_card_inner'>
                                    <h5>Places for Art Lovers</h5>
                                    <h6>7 Places <IoMdArrowDropright style={{ fontSize: '25px' }} /></h6>
                                </div>

                            </div>

                            <div className='second_collection_onebyone_card four_collection'>

                                <div className='second_collection_onebyone_card_inner'>
                                    <h5>Places for Art Lovers</h5>
                                    <h6>7 Places <IoMdArrowDropright style={{ fontSize: '25px' }} /></h6>
                                </div>

                            </div>

                        </div>

                    </div>




                </div>
            </section>

            <section className='third_section_main'>
                <div className='third_inner_div_main'>
                    <div style={{ display: 'flex' }}>
                        <h1 style={{ color: 'rgb(57, 57, 57)' }}>Popular localities in and around </h1> &nbsp; &nbsp; <h1> Kochi</h1>
                    </div>

                    <div className='third_card_section'>

                        <div className='third_card_onbyone'>
                            <div className='third_card_onebyone_inner'>
                                <div className='third_card_onebyone_left'>
                                    <div style={{ fontSize: '24px', color: 'black' }}>Kakkanad</div>
                                    <div style={{ fontSize: '18px', color: 'rgb(57, 57, 57)' }}>525 places</div>
                                </div>
                                <div className='third_card_onebyone_right'>
                                    <MdOutlineKeyboardArrowRight style={{ fontSize: '22px', color: 'rgb(57, 57, 57)' }} />
                                </div>
                            </div>
                        </div>
                        <div className='third_card_onbyone'>
                            <div className='third_card_onebyone_inner'>
                                <div className='third_card_onebyone_left'>
                                    <div style={{ fontSize: '24px', color: 'black' }}>Kakkanad</div>
                                    <div style={{ fontSize: '18px', color: 'rgb(57, 57, 57)' }}>525 places</div>
                                </div>
                                <div className='third_card_onebyone_right'>
                                    <MdOutlineKeyboardArrowRight style={{ fontSize: '22px', color: 'rgb(57, 57, 57)' }} />
                                </div>
                            </div>
                        </div>
                        <div className='third_card_onbyone'>
                            <div className='third_card_onebyone_inner'>
                                <div className='third_card_onebyone_left'>
                                    <div style={{ fontSize: '24px', color: 'black' }}>Kakkanad</div>
                                    <div style={{ fontSize: '18px', color: 'rgb(57, 57, 57)' }}>525 places</div>
                                </div>
                                <div className='third_card_onebyone_right'>
                                    <MdOutlineKeyboardArrowRight style={{ fontSize: '22px', color: 'rgb(57, 57, 57)' }} />
                                </div>
                            </div>
                        </div>
                        <div className='third_card_onbyone'>
                            <div className='third_card_onebyone_inner'>
                                <div className='third_card_onebyone_left'>
                                    <div style={{ fontSize: '24px', color: 'black' }}>Kakkanad</div>
                                    <div style={{ fontSize: '18px', color: 'rgb(57, 57, 57)' }}>525 places</div>
                                </div>
                                <div className='third_card_onebyone_right'>
                                    <MdOutlineKeyboardArrowRight style={{ fontSize: '22px', color: 'rgb(57, 57, 57)' }} />
                                </div>
                            </div>
                        </div>
                        <div className='third_card_onbyone'>
                            <div className='third_card_onebyone_inner'>
                                <div className='third_card_onebyone_left'>
                                    <div style={{ fontSize: '24px', color: 'black' }}>Kakkanad</div>
                                    <div style={{ fontSize: '18px', color: 'rgb(57, 57, 57)' }}>525 places</div>
                                </div>
                                <div className='third_card_onebyone_right'>
                                    <MdOutlineKeyboardArrowRight style={{ fontSize: '22px', color: 'rgb(57, 57, 57)' }} />
                                </div>
                            </div>
                        </div>
                        <div className='third_card_onbyone'>
                            <div className='third_card_onebyone_inner'>
                                <div className='third_card_onebyone_left'>
                                    <div style={{ fontSize: '24px', color: 'black' }}>Kakkanad</div>
                                    <div style={{ fontSize: '18px', color: 'rgb(57, 57, 57)' }}>525 places</div>
                                </div>
                                <div className='third_card_onebyone_right'>
                                    <MdOutlineKeyboardArrowRight style={{ fontSize: '22px', color: 'rgb(57, 57, 57)' }} />
                                </div>
                            </div>
                        </div>
                        <div className='third_card_onbyone'>
                            <div className='third_card_onebyone_inner'>
                                <div className='third_card_onebyone_left'>
                                    <div style={{ fontSize: '24px', color: 'black' }}>Kakkanad</div>
                                    <div style={{ fontSize: '18px', color: 'rgb(57, 57, 57)' }}>525 places</div>
                                </div>
                                <div className='third_card_onebyone_right'>
                                    <MdOutlineKeyboardArrowRight style={{ fontSize: '22px', color: 'rgb(57, 57, 57)' }} />
                                </div>
                            </div>
                        </div>
                        <div className='third_card_onbyone'>
                            <div className='third_card_onebyone_inner'>
                                <div className='third_card_onebyone_left'>
                                    <div style={{ fontSize: '24px', color: 'black' }}>Kakkanad</div>
                                    <div style={{ fontSize: '18px', color: 'rgb(57, 57, 57)' }}>525 places</div>
                                </div>
                                <div className='third_card_onebyone_right'>
                                    <MdOutlineKeyboardArrowRight style={{ fontSize: '22px', color: 'rgb(57, 57, 57)' }} />
                                </div>
                            </div>
                        </div>
                        <div className='third_card_onbyone'>
                            <div className='third_card_onebyone_inner last_card_third'>
                                <div style={{ fontSize: '20px', color: 'black' }}>See More <IoIosArrowDown /></div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>


            <section className='fourth_section_main'>
                <div className='fourth_inner_div'>
                    <div className='fourth_left'>

                        <img height={'450px'} width={'410px'}
                            src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png" alt="" />

                    </div>

                    <div className='fourth_right'>
                        <div style={{ width: '80%' }}>

                            <h1>Get the Zomato app</h1>
                            <div style={{ fontSize: '19px' }}>We will send you a link, open it on your phone to download the app</div>
                            <br />

                            <div className='fourth_radio_main'>
                                <div style={{ fontSize: '20px' }}>
                                    <input className='inputs_fourth_radio' type="radio" />&nbsp; Email
                                </div>
                                <div style={{ fontSize: '20px' }}>
                                    <input className='inputs_fourth_radio_phone' type="radio" />&nbsp; Email
                                </div>

                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                <input type="text" placeholder='Email' className='foruth_input_email' />
                                <button className='Fourth_applink_button'>Share App Link</button>

                            </div>
                            <br />

                            <div style={{ color: 'rgb(88, 88, 88)' }}>Download app from</div>

                            <br />

                            <div style={{ display: 'flex' }} >
                                <img height={'40px'} width={'150px'} style={{ marginRight: '5%' }} src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
                                <img height={'40px'} width={'150px'} src="	https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />
                            </div>



                        </div>


                    </div>
                </div>

            </section>

            <section className='fifth_section_main'>

                <div className='fifth_inner_div'>
                    <h1>Explore options near me</h1>

                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1" style={{ border: '1px solid rgb(158, 158, 158)' }}>
                            <Accordion.Header>Popular cuisines near me</Accordion.Header>
                            <Accordion.Body>
                                Arabian near meBakery near meBeverages near meBiryani near meBurger near meChinese near
                                meContinental near meDesserts near meIce Cream near meJuices near meKerala near meNorth
                                Indian near mePizza near meSandwich near
                                meSeafood near meShake near meShawarma near meSichuan near meSouth Indian near meStreet near me
                            </Accordion.Body>
                        </Accordion.Item>

                        <br />

                        <Accordion.Item eventKey="2" style={{ border: '1px solid rgb(158, 158, 158)' }}>
                            <Accordion.Header>Popular restaurant types near me</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>

                        <br />

                        <Accordion.Item eventKey="3" style={{ border: '1px solid rgb(158, 158, 158)' }}>
                            <Accordion.Header>Top restaurant chains</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>

                        <br />

                        <Accordion.Item eventKey="4" style={{ border: '1px solid rgb(158, 158, 158)' }}>
                            <Accordion.Header>Cities we deliver to</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>

                </div>

            </section>

            <footer className='footer_main'>
                <div className='footer_inner_div'>

                    <div className='footer_heading_main'>
                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="" />
                        <div>
                            <button className='button_india_footer'>
                                <img height={'18px'} width={'22px'} src="https://th.bing.com/th/id/OIP.vIZGd3WidBiWHZx2nisM4wHaEo?rs=1&pid=ImgDetMain" alt="" /> India <IoIosArrowDown />
                            </button>
                            <button className='button_English_footer'>
                                <TbWorld style={{ fontSize: '23px' }} />
                                English
                                <IoIosArrowDown />
                            </button>
                        </div>
                    </div>

                    <div className='middle_footer'>
                        <div className='footer_first'>
                            <h5>About Zomato</h5>
                            <div style={{ marginBottom: '3px', color: 'rgb(158, 158, 158)' }}>Who We Are  </div>
                            <div style={{ marginBottom: '3px', color: 'rgb(158, 158, 158)' }}>Blog</div>
                            <div style={{ marginBottom: '3px', color: 'rgb(158, 158, 158)' }}> Work With Us</div>
                            <div style={{ marginBottom: '3px', color: 'rgb(158, 158, 158)' }}>Investor Relations</div>
                            <div style={{ marginBottom: '3px', color: 'rgb(158, 158, 158)' }}>Report Fraud</div>
                            <div style={{ marginBottom: '3px', color: 'rgb(158, 158, 158)' }}>Press Kit</div>
                            <div style={{ marginBottom: '3px', color: 'rgb(158, 158, 158)' }}>Contact Us</div>
                        </div>

                        <div className='footer_second'>
                            <h5>Zomaverse</h5>
                            <div style={{ marginBottom: '3px', color: 'rgb(158, 158, 158)' }}>Contact Us</div>
                            <div style={{ marginBottom: '3px', color: 'rgb(158, 158, 158)' }}>Contact Us</div>
                            <div style={{ marginBottom: '3px', color: 'rgb(158, 158, 158)' }}>Contact Us</div>
                            <div style={{ marginBottom: '3px', color: 'rgb(158, 158, 158)' }}>Contact Us</div>
                            <div style={{ marginBottom: '3px', color: 'rgb(158, 158, 158)' }}>Contact Us</div>
                            <div style={{ marginBottom: '3px', color: 'rgb(158, 158, 158)' }}>Contact Us</div>
                            <div style={{ marginBottom: '3px', color: 'rgb(158, 158, 158)' }}>Contact Us</div>
                            <div style={{ marginBottom: '3px', color: 'rgb(158, 158, 158)' }}>Contact Us</div>
                        </div>

                        <div className='footer_third'>
                            <h5>For Restaurants</h5>
                            <div style={{ marginBottom: '3px', color: 'rgb(158, 158, 158)' }}>Contact Us</div>
                            <div style={{ marginBottom: '3px', color: 'rgb(158, 158, 158)' }}>Contact Us</div>
                        </div>

                        <div className='footer_fourth'>
                            <h5>Learn More</h5>
                            <div style={{ marginBottom: '3px', color: 'rgb(158, 158, 158)' }}>Contact Us</div>
                            <div style={{ marginBottom: '3px', color: 'rgb(158, 158, 158)' }}>Contact Us</div>
                            <div style={{ marginBottom: '3px', color: 'rgb(158, 158, 158)' }}>Contact Us</div>
                        </div>

                        <div className='footer_fivth'>
                            <h5>Social links</h5>

                            <div>
                                <IoLogoLinkedin style={{ fontSize: '28px', marginRight: '2px' }} />
                                <FaInstagramSquare style={{ fontSize: '25px', marginRight: '2px' }} />
                                <FaSquareXTwitter style={{ fontSize: '25px', marginRight: '2px' }} />
                                <IoLogoYoutube style={{ fontSize: '25px', marginRight: '2px' }} />
                                <IoLogoFacebook style={{ fontSize: '25px' }} />
                            </div>

                            <img height={'40px'} width={'150px'} style={{ marginTop: '10%' }}
                                src="	https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />

                            <img height={'40px'} width={'150px'} style={{ marginTop: '8%' }}
                                src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
                        </div>
                    </div>

                    <hr />
                    
                    <div style={{color:'rgb(158, 158, 158)'}}>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. 
                    All </div>
                </div>

            </footer>


        </div>
    )
}

export default Zomato