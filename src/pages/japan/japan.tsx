import "./japan.css";

function japan() {

  return (
    <body className="body secondary">
      <section className="navbar">
        <div className="w-layout-hflex flex-block">
          <a
            href="/"
            aria-current="page"
            className="logo-link w-inline-block w--current"
          >
            <img
              src="/logo.svg"
              loading="lazy"
              alt=""
              className="logo"
            />
          </a>
          <div className="w-layout-hflex navbar_btns">
            <div className="w-layout-vflex locations_box"></div>
          </div>
          <div
            className="w-nav-overlay"
            data-wf-ignore=""
            id="w-nav-overlay-2"
          ></div>
        </div>
      </section>

      <section className="panel">
        <div className="imagefield">
          <img
            src="/fuji.jpg"
            loading="lazy"
            sizes="100vw"
            alt=""
            className="big-image"
          />
        </div>
        
        <section className="infofield-transparent">
                <div className="div-block-no-overlap">
                    <h1 className="heading dark-font">Japan</h1>
                </div>
        </section>
      </section>


      <div className="w-layout-hflex flex-block-side">
            <section className="infofield secondary">
                <div className="div-block-no-overlap">
                    <h2 className="heading dark-font">Chapter one: <br></br>Tokyo</h2>
                    <p className="paragraph dark-font">
                        Arriving in late March, I witnessed the Cherry Blossoms at their end, adding to the city's charm.
                    </p>
                    <p className="paragraph dark-font">
                        Tokyo became a cherished home, filled with unforgettable memories and vibrant culture.
                    </p>
                    <a href="/" aria-current="page" className="link-dark w--current">
                        Read more →{" "}
                    </a>
                </div>
            </section>
            <div className="image-block-border-secondary" style={{ backgroundImage: `url("/tokyo-bay.jpg")` }}></div>
        </div>

        <div className="w-layout-hflex flex-block-side">
            <section className="infofield secondary">
                <div className="div-block-no-overlap">
                    <h2 className="heading dark-font">Chapter two: <br></br>Osaka & Nara</h2>
                    <p className="paragraph dark-font">
                        Arriving in late March, I witnessed the Cherry Blossoms at their end, adding to the city's charm.
                    </p>
                    <p className="paragraph dark-font">
                        Tokyo became a cherished home, filled with unforgettable memories and vibrant culture.
                    </p>
                    <a href="/" aria-current="page" className="link-dark w--current">
                        Read more →{" "}
                    </a>
                </div>
            </section>
            <div className="image-block-border-secondary" style={{ backgroundImage: `url("/osaka.jpg")` }}></div>
        </div>

        <div className="w-layout-hflex flex-block-side">
            <section className="infofield secondary">
                <div className="div-block-no-overlap">
                    <h2 className="heading dark-font">Chapter three: <br></br>Hiking the Nakasendo</h2>
                    <p className="paragraph dark-font">
                        Arriving in late March, I witnessed the Cherry Blossoms at their end, adding to the city's charm.
                    </p>
                    <p className="paragraph dark-font">
                        Tokyo became a cherished home, filled with unforgettable memories and vibrant culture.
                    </p>
                    <a href="/" aria-current="page" className="link-dark w--current">
                        Read more →{" "}
                    </a>
                </div>
            </section>
            <div className="image-block-border-secondary" style={{ backgroundImage: `url("/nakasendo.jpg")` }}></div>
        </div>

        <div className="w-layout-hflex flex-block-side">
            <section className="infofield secondary">
                <div className="div-block-no-overlap">
                    <h2 className="heading dark-font">Chapter four: <br></br>To the south</h2>
                    <p className="paragraph dark-font">
                        Arriving in late March, I witnessed the Cherry Blossoms at their end, adding to the city's charm.
                    </p>
                    <p className="paragraph dark-font">
                        Tokyo became a cherished home, filled with unforgettable memories and vibrant culture.
                    </p>
                    <a href="/" aria-current="page" className="link-dark w--current">
                        Read more →{" "}
                    </a>
                </div>
            </section>
            <div className="image-block-border-secondary" style={{ backgroundImage: `url("/south.jpg")` }}></div>
        </div>

        <div className="w-layout-hflex flex-block-side">
            <section className="infofield secondary">
                <div className="div-block-no-overlap">
                    <h2 className="heading dark-font">Chapter five: <br></br>Okinawa</h2>
                    <p className="paragraph dark-font">
                        Arriving in late March, I witnessed the Cherry Blossoms at their end, adding to the city's charm.
                    </p>
                    <p className="paragraph dark-font">
                        Tokyo became a cherished home, filled with unforgettable memories and vibrant culture.
                    </p>
                    <a href="/" aria-current="page" className="link-dark w--current">
                        Read more →{" "}
                    </a>
                </div>
            </section>
            <div className="image-block-border-secondary" style={{ backgroundImage: `url("/okinawa.jpg")` }}></div>
        </div>

    </body>
  );
}

export default japan;
