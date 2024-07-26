import "./gear.css";

function gear() {
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
                src="https://cdn.prod.website-files.com/669fd653a78ebf02669a936a/66a0180d23b0eabef44432b2_Component%201.svg"
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
        <div className="spacer"></div>

        <div className="w-layout-hflex flex-block-5">
            <section className="infofield-dark">
                <div className="div-block-no-overlap">
                    <h1 className="heading">My Gear</h1>
                    <p className="paragraph">
                        The Fujifilm X-T30 II is a compact, versatile mirrorless camera that boasts 
                        a 26.1MP APS-C X-Trans CMOS 4 sensor and X-Processor 4.
                    </p>
                    <p className="paragraph">
                        It offers fast autofocus, 4K video recording, and impressive low-light 
                        performance. 
                    </p>
                    <p className="paragraph">
                        I've been using this camera since 2023.
                    </p>
                </div>
            </section>
            <div className="image-wide-border-4"></div>
        </div>
        

        <div className="w-layout-hflex flex-block-5">
            <div className="image-wide-border-5"></div>
            <section className="infofield-dark">
                <div className="div-block-no-overlap">
                    <h1 className="heading">Lenses</h1>
                    <p className="paragraph">
                        My main lens is the versatile Fujifilm 15-45mm lens, 
                        ideal for wide-angle shots and everyday use. 
                    </p>
                    <p className="paragraph">
                        My second lens is the Canon FD 35-70mm, 
                        combined with an x-mount converter. 
                    </p>
                    <p className="paragraph">
                        Both of these lenses cover a wide range of photographic needs. 
                    </p>
                </div>
            </section>
        </div>

    </body>
);
}

export default gear;