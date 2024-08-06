import Navbar from "../../compontents/navbar";
import "./gear.css";

function gear() {
return (
    <body className="body primary">
      <Navbar dark={false} />
        <div className="spacer"></div>

        <div className="w-layout-hflex flex-block-side">
            <section className="infofield primary">
                <div className="div-block-no-overlap">
                    <h2 className="light-font">Camera</h2>
                    <p className=" light-font">
                        The Fujifilm X-T30 II is a compact, versatile mirrorless camera that boasts 
                        a 26.1MP APS-C X-Trans CMOS 4 sensor and X-Processor 4.
                    </p>
                    <p className="light-font">
                        It offers fast autofocus, 4K video recording, and impressive low-light 
                        performance. 
                    </p>
                    <p className="light-font">
                        I've been using this camera since 2023.
                    </p>
                </div>
            </section>
            <div className="image-block-border" style={{ backgroundImage: `url("/xt30ii.jpg")` }}></div>
        </div>
        

        <div className="w-layout-hflex flex-block-side">
        <div className="image-block-border" style={{ backgroundImage: `url("/fuji-lens.jpg")` }}></div>
        <section className="infofield primary">
                <div className="div-block-no-overlap">
                    <h2 className="light-font">Lenses</h2>
                    <p className="light-font">
                        My main lens is the versatile Fujifilm 15-45mm lens, 
                        ideal for wide-angle shots and everyday use. 
                    </p>
                    <p className="light-font">
                        My second lens is the Canon FD 35-70mm, 
                        combined with an x-mount converter. 
                    </p>
                    <p className="light-font">
                        Both of these lenses cover a wide range of photographic needs. 
                    </p>
                </div>
            </section>
        </div>

    </body>
);
}

export default gear;