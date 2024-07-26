import "./home.css";

function home() {

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
        <div className="imagefield">
          <img
            src="/matsumoto.jpg"
            loading="lazy"
            sizes="100vw"
            alt=""
            className="big-image"
          />
        </div>
        
        <section className="infofield-dark">
          <div className="div-block-overlap">
            <h1 className="heading-light">Matsumoto</h1>
            <p className="paragraph-light">
              Nestled in Japan's Nagano Prefecture, is renowned for its stunning
              alpine scenery and historical Matsumoto Castle. A cultural hub, it
              offers vibrant festivals, local crafts, and exquisite soba
              noodles. The city's proximity to the Japanese Alps makes it a
              gateway for outdoor enthusiasts and nature lovers.
            </p>
            <a href="/Contact" aria-current="page" className="link-light w--current">
              See more of the Nakasendo chapter →{" "}
            </a>
          </div>
        </section>
      </section>

      <section className="panel">
        <div className="image-wide-border-1"></div>
        <section className="infofield-light">
          <div className="div-block-no-overlap">
            <h1 className="heading-dark">Sinai Desert </h1>
            <p className="paragraph-dark">
              A vast and rugged expanse in Egypt, is known for its dramatic
              landscapes, including towering mountains and vast sand dunes. This
              desert is a blend of stark beauty and profound spiritual heritage.
            </p>
            <a href="/" aria-current="page" className="link-dark w--current">
              See more of the Egypt chapter →{" "}
            </a>
          </div>
        </section>
      </section>

      <section className="panel">
        <div className="imagefield">
          <img
            src="/ueno.jpg"
            loading="lazy"
            sizes="100vw"
            alt=""
            className="big-image"
          />
        </div>
        <section className="infofield-dark">
          <div className="div-block-overlap">
            <h1 className="heading-light">Ueno</h1>
            <p className="paragraph-light">
              Ueno, a vibrant district in Tokyo, is famed for its expansive
              park, rich cultural institutions, and bustling markets. Visitors
              can enjoy panoramic views of the Tokyo Skytree from various
              vantage points. Ueno seamlessly blends history with modernity,
              featuring attractions like Ueno Zoo, museums, and the lively
              Ameya-Yokocho market.
            </p>
            <a href="/" aria-current="page" className="link-light w--current">
              See more of the Tokyo chapter →{" "}
            </a>
          </div>
        </section>
      </section>

      <section className="panel">
        <div className="image-wide-border-2"></div>
        <div className="image-wide-border-3"></div>

        <section className="infofield-light">
          <div className="div-block-no-overlap">
            <h1 className="heading-dark">Fukuoka </h1>
            <p className="paragraph-dark">
              Fukuoka, a vibrant city on Japan's Kyushu island, is renowned for
              its lively yattai culture. These mobile food stalls line the
              streets, offering a variety of delicious local dishes such as
              ramen, tempura, and yakitori, creating a unique and charming
              dining experience.
            </p>
            <a href="/" aria-current="page" className="link-dark w--current">
              See more of the Fukuoka chapter →{" "}
            </a>
          </div>
        </section>
        
      </section>
    </body>
  );
}

export default home;
