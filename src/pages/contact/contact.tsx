import Navbar from "../../compontents/navbar";

function contact() {

  return (
    <body className="body-image secondary">
      <Navbar dark={true} />
        
        <div className="spacer"></div>
        
        <section className="infofield-transparent">
          <div className="div-block-no-overlap">
            <p className="light-font even-less-wide-text">
            Based in the Netherlands with a passion for travel photography. 
            Exploring new places and capturing their atmosphere with a vintage tint. 
            </p>
            <p className="light-font even-less-wide-text">
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

    </body>
  );
}

export default contact;
