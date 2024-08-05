import React, { useState } from "react";

interface NavbarProps {
    dark?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ dark }) => {
    const [more, setMore] = useState(false);
    const [location, setLocation] = useState(false);

    return (
        <section className="navbar">
            <div className="w-layout-hflex flex-block">
                <a href="/home" aria-current="page" className="">
                    <img src={dark ? "/logo-dark.svg" : "/logo.svg"} loading="lazy" alt="" className="logo" />
                </a>

                {/* {/* BIGSCREEN NAVBAR */}
                <div className="w-layout-hflex navbar_btns">
                    <div className="navbar_btns">
                        <div className="block">
                            
                            <div className={dark ? "dark-font dark-button" : "light-font button"} onClick={()=>{
                                setLocation(!location)
                                setMore(false)
                                }}>
                                <p className="other-font">
                                    Locations
                                </p>
                            </div>

                            {location && (
                                    <div className="dropdown-content">
                                        <a href="/country/japan" aria-current="page" className={dark ? "dark-font dark-button" : "light-font button"}>
                                            <p className="other-font">
                                            Japan
                                            </p>            
                                        </a>

                                        <a href="/country/italy" aria-current="page" className={dark ? "dark-font dark-button" : "light-font button"}>
                                            <p className="other-font">
                                            Italy
                                            </p>            
                                        </a>

                                        <a href="/country/egypt" aria-current="page" className={dark ? "dark-font dark-button" : "light-font button"}>
                                            <p className="other-font">
                                            Egypt
                                            </p>            
                                        </a>
                                </div>
                            )}
                        </div>
                        
                        <div className="block">
                            <div className={dark ? "dark-font dark-button" : "light-font button"} onClick={()=>{
                                setMore(!more)
                                setLocation(false)
                                }}>
                                <p className="other-font">
                                    More
                                </p>
                            </div>

                            {more && (
                            <div className="dropdown-content">
                                <a href="/gear" aria-current="page" className={dark ? "dark-font dark-button" : "light-font button"}>
                                    <p className="other-font">
                                    Gear
                                    </p>            
                                </a>

                                <a href="/contact" aria-current="page" className={dark ? "dark-font dark-button" : "light-font button"}>
                                    <p className="other-font">
                                    Contact
                                    </p>            
                                </a>
                            </div>
                            )}
                        </div>


                    {/* <div className="nav-container" onClick={()=>setMore(!more)}>
                        <input className="checkbox" type="checkbox" name="" id="" />
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line"></span>
                            <span className="line line3"></span>
                        
                     

                    {more && (
                        <div className="dropdown-content button fade-in">
                            <a
                                href="/gear"
                                aria-current="page"
                                className={dark ? "dark-font w--current" : "block light-font w--current"}
                            >
                                <p className="other-font">Japan</p>
                            </a>
                            <a
                                href="/gear"
                                aria-current="page"
                                className={dark ? "dark-font w--current" : "block light-font w--current"}
                            >
                                <p className="other-font">Italy</p>
                            </a>
                            <a
                                href="/gear"
                                aria-current="page"
                                className={dark ? "dark-font w--current" : "block light-font w--current"}
                            >
                                <p className="other-font">Egypt</p>
                            </a>
                            <a
                                href="/gear"
                                aria-current="page"
                                className={dark ? "dark-font w--current" : "block light-font w--current"}
                            >
                                <p className="other-font">Gear</p>
                            </a>
                            <a
                                href="/contact"
                                aria-current="page"
                                className={dark ? "dark-font w--current" : "block light-font w--current"}
                            >
                                <p className="other-font">Contact</p>
                            </a>
                        </div>
                    )}
                    </div>
                    </div> */}
                    
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Navbar;
