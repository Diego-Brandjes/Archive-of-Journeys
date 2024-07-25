import "./home.css";

function home() {

  return (
    <body className="body">
      <section className="navbar">
        <div className="w-layout-hflex flex-block">
          <a
            href="/"
            aria-current="page"
            className="link-block-4 w-inline-block w--current"
          >
            <img
              src="https://cdn.prod.website-files.com/669fd653a78ebf02669a936a/66a0180d23b0eabef44432b2_Component%201.svg"
              loading="lazy"
              alt=""
              className="image"
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

      <section className="panel-1">
        <div className="imagefield">
          <img
            src="https://cdn.prod.website-files.com/669fd653a78ebf02669a936a/66a0179f2e77d8897c51aa5d_DSCF4565.jpg"
            loading="lazy"
            sizes="100vw"
            alt=""
            className="image-3"
          />
        </div>
        
        <section className="infofield">
          <div className="div-block-overlap">
            <h1 className="heading">Matsumoto</h1>
            <p className="paragraph">
              Nestled in Japan's Nagano Prefecture, is renowned for its stunning
              alpine scenery and historical Matsumoto Castle. A cultural hub, it
              offers vibrant festivals, local crafts, and exquisite soba
              noodles. The city's proximity to the Japanese Alps makes it a
              gateway for outdoor enthusiasts and nature lovers.
            </p>
            <a href="/" aria-current="page" className="link w--current">
              See more of the Nakasendo chapter →{" "}
            </a>
          </div>
        </section>
      </section>

      <section className="panel-2">
        <div className="image-border"></div>
        <section className="infofieldlight">
          <div className="div-block-no-overlap">
            <h1 className="heading-copy">Sinai Desert </h1>
            <p className="paragraph-copy">
              A vast and rugged expanse in Egypt, is known for its dramatic
              landscapes, including towering mountains and vast sand dunes. This
              desert is a blend of stark beauty and profound spiritual heritage.
            </p>
            <a href="/" aria-current="page" className="link-copy w--current">
              See more of the Egypt chapter →{" "}
            </a>
          </div>
        </section>
      </section>

      <section className="panel-1">
        <div className="imagefield">
          <img
            src="https://cdn.prod.website-files.com/669fd653a78ebf02669a936a/66a05373c0c1ae6b5b1c6433_DSCF4919.jpg"
            loading="lazy"
            sizes="100vw"
            alt=""
            className="image-3"
          />
        </div>
        <section className="infofield">
          <div className="div-block-overlap">
            <h1 className="heading">Ueno</h1>
            <p className="paragraph">
              Ueno, a vibrant district in Tokyo, is famed for its expansive
              park, rich cultural institutions, and bustling markets. Visitors
              can enjoy panoramic views of the Tokyo Skytree from various
              vantage points. Ueno seamlessly blends history with modernity,
              featuring attractions like Ueno Zoo, museums, and the lively
              Ameya-Yokocho market.
            </p>
            <a href="/" aria-current="page" className="link w--current">
              See more of the Tokyo chapter →{" "}
            </a>
          </div>
        </section>
      </section>

      <section className="panel-2">
        <div className="image-wide"></div>
        <div className="imagefield-wborder"></div>
        <section className="infofieldlight">
          <div className="div-block-no-overlap">
            <h1 className="heading-copy">Fukuoka </h1>
            <p className="paragraph-copy">
              Fukuoka, a vibrant city on Japan's Kyushu island, is renowned for
              its lively yattai culture. These mobile food stalls line the
              streets, offering a variety of delicious local dishes such as
              ramen, tempura, and yakitori, creating a unique and charming
              dining experience.
            </p>
            <a href="/" aria-current="page" className="link-copy w--current">
              See more of the Fukuoka chapter →{" "}
            </a>
          </div>
        </section>
      </section>
    </body>
  );
}

export default home;
