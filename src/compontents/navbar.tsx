import React, { useState, useEffect } from "react";

interface NavbarProps {
  dark?: boolean;
}

interface Country {
    name: string;
}

const Navbar: React.FC<NavbarProps> = ({ dark }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        // Fetch the configuration file
        const configResponse = await fetch('/config.json');
        const config = await configResponse.json();
        const countryFiles = config.countries;

        // Fetch each country file based on the list from config
        const countryDataPromises = countryFiles.map(file =>
          fetch(`/countries/${file}`)
            .then(res => res.json())
            .catch(error => {
              console.error(`Error fetching ${file}:`, error);
              return null; // Return null if there's an error
            })
        );

        const countriesData = await Promise.all(countryDataPromises);
        const validCountries = countriesData.filter(country => country !== null);
        setCountries(validCountries);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <section>
      <div className="navbar">
        <div className="w-layout-hflex flex-block">
          <a href="/home" aria-current="page" className="">
            <img 
              src={dark ? "/logo.svg" : "/logo-dark.svg"} 
              loading="lazy" 
              alt="Logo" 
              className="logo" 
            />
          </a>

          {/* BIGSCREEN NAVBAR */}
          <div className="w-layout-hflex navbar_btns big-screen">
            <div className="navbar_btns">
              <div className="block">
                <p className="other-font">
                  <a href="#menu" className={dark ? "light-font other-font" : "dark-font other-font"}>Menu</a>
                </p>
              </div>
              
              <div className="block">
                <p className="other-font">
                  <a href="/contact" className={dark ? "light-font other-font" : "dark-font other-font"}>Contact</a>
                </p>            
              </div>

              <div className="block">
                <p className="other-font">
                  <a href="#" onClick={(e) => { e.preventDefault(); window.history.back(); }} className={dark ? "light-font other-font" : "dark-font other-font"}>Return</a>
                </p> 
              </div>
            </div>
          </div>

          {/* SMALL NAVBAR */}
          <div className="w-layout-hflex burger-container small-screen">
            <div className="burger-container">
              <a href="#menu" className="block">
                <div className={dark ? "hamburger-lines light-font" : "hamburger-lines dark-font"}>
                  <span className={dark ? "line line1" : "dark-line line1"}></span>
                  <span className={dark ? "line line2" : "dark-line line2"}></span>
                  <span className={dark ? "line line3" : "dark-line line3"}></span>
                </div>
              </a>   
            </div>
          </div>
        </div>
      </div>

      <div className="popover" id="menu">
        <div className="content">
          <a href="#" className="close"></a>
          <div className="nav">
            <ul className="nav_list">
              <div className="nav_list_item">
                <li><a href="/home">Home</a></li>
              </div>

              {countries.map((country, index) => (
                <div key={index} className="nav_list_item">
                  <li><a href={`/country/${country.name.toLowerCase()}`}>{country.name}</a></li>
                </div>
              ))}

              <div className="nav_list_item">
                <li><a href="/gear">Gear</a></li>
              </div>
              
              <div className="small-screen">
                <div className="nav_list_item">
                  <li><a href="/contact">Contact</a></li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;