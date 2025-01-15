import Navbar from "../../compontents/navbar";

function gear() {

return (
    <body className="body primary">
      <Navbar dark={true} />
        <div className="spacer"></div>

        <a aria-current="page" className='link-light'>
            <div className="w-layout-hflex flex-block-side">
                <div className="image-wide-title short-length">
                    <img src="./xt30ii.jpg" alt="Image" />

                    <div className="overlay">
                    <section className="infofield-transparent less-wide-text">
                        <div className="div-block-no-overlap">
                        <h2 className="light-font">Camera</h2>
                        <a className=" light-font">
                            The <a href="https://fujifilm-x.com/en-us/products/cameras/x-t30-ii/" className="link-light w--current">Fujifilm X-T30 II </a>
                            is a compact, versatile mirrorless camera that boasts 
                            a 26.1MP APS-C X-Trans CMOS 4 sensor and X-Processor 4.
                            It offers fast autofocus, 4K video recording, and impressive low-light 
                            performance. I've been using this camera since 2023.
                        </a>
                        </div>
                    </section>
                    </div>
                </div>
            </div>
        </a>

        <a aria-current="page" className='link-light'>
            <div className="w-layout-hflex flex-block-side">
                <div className="image-wide-title short-length">
                    <img src="./fuji-lens.jpg" alt="Image" />

                    <div className="overlay">
                    <section className="infofield-transparent less-wide-text">
                        <div className="div-block-no-overlap">
                            <h2 className="light-font">Lenses</h2>
                            <a className="light-font">
                                My main lens is the versatile <a href="https://fujifilm-x.com/en-us/products/lenses/xc15-45mmf35-56-ois-pz/" className="link-light w--current">Fujifilm 15-45mm</a> lens, 
                                ideal for wide-angle shots and everyday use. 
                                My second lens is the <a href="https://www.canonclassics.com/canon-nfd-35-70mm-f3.5-4.5/10-113/" className="link-light w--current">Canon FD 35-70mm</a>, 
                                combined with an x-mount converter.
                                Both of these lenses cover a wide range of photographic needs. 
                            </a>
                        </div>
                    </section>
                    </div>
                </div>
            </div>
        </a>
    </body>
);
}

export default gear;