import Navbar from "../../compontents/navbar";
import "./home.css";


function home() {

  return (
    <body className="body primary">

      <Navbar dark={true} />
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
        
        <section className="infofield primary">
          <div className="div-block-overlap">
            <h1 className="light-font">Matsumoto</h1>
            <p className="light-font even-less-wide-text">
              Nestled in Japan's Nagano Prefecture, is renowned for its stunning
              alpine scenery and historical Matsumoto Castle. A cultural hub, it
              offers vibrant festivals, local crafts, and exquisite soba
              noodles. The city's proximity to the Japanese Alps makes it a
              gateway for outdoor enthusiasts and nature lovers.
            </p>
            <a href="/japan" aria-current="page" className="link-light w--current">
              See more of the Nakasendo chapter →{" "}
            </a>
          </div>
        </section>
      </section>

      <section className="panel">
        <div className="image-wide-border" style={{ backgroundImage: `url("/sinai-road.jpg")` }}></div>
        <section className="infofield secondary">
          <div className="div-block-no-overlap">
            <h1 className="heading dark-font">Sinai Desert </h1>
            <p className="paragraph dark-font even-less-wide-text">
              A vast and rugged expanse in Egypt, is known for its dramatic
              landscapes, including towering mountains and vast sand dunes. This
              desert is a blend of stark beauty and profound spiritual heritage.
            </p>
            <a href="/gear" aria-current="page" className="link-dark w--current">
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
        <section className="infofield primary">
          <div className="div-block-overlap">
            <h1 className="heading light-font">Ueno</h1>
            <p className="paragraph light-font even-less-wide-text">
              Ueno, a vibrant district in Tokyo, is famed for its expansive
              park, rich cultural institutions, and bustling markets. Visitors
              can enjoy panoramic views of the Tokyo Skytree from various
              vantage points. Ueno seamlessly blends history with modernity,
              featuring attractions like Ueno Zoo, museums, and the lively
              Ameya-Yokocho market.
            </p>
            <a href="/contact" aria-current="page" className="link-light w--current">
              See more of the Tokyo chapter →{" "}
            </a>
          </div>
        </section>
      </section>

      <section className="panel">
      <div className="image-wide-border" style={{ backgroundImage: `url("/ohori-park.jpg")` }}></div>
      <div className="image-wide-border" style={{ backgroundImage: `url("/fukuoka-stalls.jpg")` }}></div>

        <section className="infofield secondary">
          <div className="div-block-no-overlap">
            <h1 className="heading dark-font">Fukuoka </h1>
            <p className="paragraph dark-font even-less-wide-text">
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
