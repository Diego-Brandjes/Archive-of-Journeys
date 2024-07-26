import "./contact.css";

function contact() {

  return (
    <body className="body">
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
        <div className="full-image">
          <img
            src="/egypt-palm.jpg"
            loading="lazy"
            sizes="100vw"
            alt=""
            className="big-image"
          />
        </div>
        
        <div className="spacer"></div>
        
        <section className="infofield-transparent">
          <div className="div-block-overlap">
            <p className="paragraph-light less-wide-text">
            Based in the Netherlands with a passion for travel photography. 
            Exploring new places and capturing their atmosphere with a vintage tint. 
            </p>
            <p className="paragraph-light less-wide-text">
            Follow my adventures and see the world through my eyes on this website or if you want a different experience 
            please check out my Instagram or other socials linked below. 
            </p>

            <a href="https://www.instagram.com/dbrandjes/" aria-current="page" className="link-light w--current">
            Instagram: @dbrandjes{" "}
            </a><br></br>

            <a href="https://www.linkedin.com/in/diego-brandjes/" aria-current="page" className="link-light w--current">
            LinkedIn{" "}
            </a><br></br>

            <a href="https://www.youtube.com/c/DBtonight" aria-current="page" className="link-light w--current">
            YouTube{" "}
            </a>
          </div>
        </section>
      </section>


    </body>
  );
}

export default contact;
