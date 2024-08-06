import Navbar from "../../compontents/navbar";
import "./gear.css";

function handleClick() {
    window.open('https://www.canonclassics.com/canon-nfd-35-70mm-f3.5-4.5/10-113/', '_blank'); // Opens the first URL in a new tab
    window.open('https://fujifilm-x.com/en-us/products/lenses/xc15-45mmf35-56-ois-pz/', '_blank'); // Opens the second URL in a new tab
}

function gear() {

return (
    <body className="body primary">
      <Navbar dark={true} />
        <div className="spacer"></div>

        <a aria-current="page" className='link-light'>
            <div className="w-layout-hflex flex-block-side">
                <div className="image-wide-title">
                    <img src="./xt30ii.jpg" alt="Image" />

                    <div className="overlay">
                    <section className="infofield-transparent less-wide-text">
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
                        <a href="https://fujifilm-x.com/en-us/products/cameras/x-t30-ii/" className="link-light w--current">Click here to see the camera</a>
                        </div>
                    </section>
                    </div>
                </div>
            </div>
        </a>

        <a aria-current="page" className='link-light'>
            <div className="w-layout-hflex flex-block-side">
                <div className="image-wide-title">
                    <img src="./fuji-lens.jpg" alt="Image" />

                    <div className="overlay">
                    <section className="infofield-transparent less-wide-text">
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
                            <a href="#" onClick={handleClick} className="link-light w--current">Click here to see the lens</a>
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