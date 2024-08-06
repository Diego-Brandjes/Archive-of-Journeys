import React, { useState } from "react";

interface NavbarProps {
    dark?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ dark }) => {
    const [location, setLocation] = useState(false);

    return (
        <section >
            <div className="navbar">
            <div className="w-layout-hflex flex-block">
                <a href="/home" aria-current="page" className="">
                    <img src={dark ? "/logo-dark.svg" : "/logo.svg"} loading="lazy" alt="" className="logo" />
                </a>

                {/* {/* BIGSCREEN NAVBAR */}
                <div className="w-layout-hflex navbar_btns big-screen">
                    <div className="navbar_btns">
                        <div className="block">
                            <p className="other-font">
                                <a href="#menu" className={dark ? "dark-font other-font" : "light-font other-font"}>Menu</a>
                            </p>
                        </div>
                        
                        <div className="block">
                            <p className="other-font">
                                <a href="/contact" className={dark ? "dark-font other-font dark-button" : "light-font other-font light-button"}>Contact</a>
                            </p>            
                        </div>

                    </div>
                </div>

                {/* SMALL NAVBAR */}
                <div className="w-layout-hflex burger-container small-screen">
                    <div className="burger-container">
                        <a href="#menu" className="block ">
                            <div className={dark ? "hamburger-lines dark-font" : "hamburger-lines light-font light-button"} onClick={() => {
                                setLocation(!location);
                            }}>
                                <span className={dark ? "dark-line line1" : "line line1"}></span>
                                <span className={dark ? "dark-line line2" : "line line2"}></span>
                                <span className={dark ? "dark-line line3" : "line line3"}></span>
                            </div>
                        </a>

                       
                    </div>
                </div>
            </div>
            </div>

                <div className="popover" id="menu">
                    <div className = 'content'>
                        <a href="#" className="close"></a>
                        <div className = 'nav'>
                            <ul className = 'nav_list'>
                            
                            <div className = 'nav_list_item'>                                
                                <li><a href="/home">Home</a></li>
                            </div>
                            <div className = 'nav_list_item'>
                                <li><a href="/country/japan">Japan</a></li>
                            </div>
                            <div className = 'nav_list_item'>
                                <li><a href="/country/egypt">Egypt</a></li>
                            </div>
                            <div className = 'nav_list_item'>
                                <li><a href="/country/italy">Italy</a></li>
                            </div>
                            <div className = 'nav_list_item'>
                                <li><a href="/gear">Gear</a></li>
                            </div>
                            <div className="small-screen">
                                <div className = 'nav_list_item'>
                                    <li><a href="/contact">Contact</a></li>
                                </div>
                            </div>
                            
                            </ul>
                        </div>
                    </div>
            </div>


        </section>





    );
}

export default Navbar;