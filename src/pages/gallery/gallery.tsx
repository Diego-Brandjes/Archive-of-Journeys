import React from "react";
import Navbar from "../../compontents/navbar";

const GalleryPage: React.FC = () => {
  return (
<body className="body primary">
      <Navbar dark={true} />


        <div className="w-layout-hflex flex-block-side">
            <div className="image-wide-title long-length">
                <img src="./fuji-lens.jpg" alt="Image" />

                <div className="overlay">
                    <div className='w-layout-vflex title-box'>
                        <h3 className="title-font light-font">東京</h3>
                    </div>
                </div>
            </div>
        </div>


        <a aria-current="page" className='link-light'>
            <div className="w-layout-hflex flex-block-side">
                <div className="image-wide-title short-length">
                    <img src="./xt30ii.jpg" alt="Image" />


                    {/* Make this appear when hovering */}
                    <div className="overlay">
                    <section className="infofield-transparent less-wide-text">
                        <div className="div-block-no-overlap">
                        <h2 className="light-font">Camera</h2>
                        <a className=" light-font">
                            The Fujifilm X-T30 II
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

        <div className="w-layout-hflex flex-block-side">
            <a aria-current="page" className='link-light'>
                <div className="image-wide-title short-length">
                    <img src="./xt30ii.jpg" alt="Image" />
                </div>
            </a>
            <a aria-current="page" className='link-light'>
                <div className="image-wide-title short-length">
                    <img src="./xt30ii.jpg" alt="Image" />
                </div>
            </a>
        </div>
        <div className="w-layout-hflex flex-block-side">
            <a aria-current="page" className='link-light'>
                <div className="image-wide-title short-length">
                    <img src="./xt30ii.jpg" alt="Image" />
                </div>
            </a>
            <a aria-current="page" className='link-light'>
                <div className="image-wide-title short-length">
                    <img src="./xt30ii.jpg" alt="Image" />
                </div>
            </a>
        </div>



        <div className="spacer"></div>


      
    </body>
  );
};

export default GalleryPage;
