import React from "react";
import Navbar from "../../compontents/navbar";

const GalleryPage: React.FC = () => {
  return (
    <body className="body primary">
      <Navbar dark={true}/>


        {/* First picture */}
        <a aria-current="page" className='link-light'>
            <div className="w-layout-hflex flex-block-side">
                <div className="image-wide-title2 short-length">
                    <img src="./xt30ii.jpg" alt="Image"/>


                    <div className="overlay">

                    </div>
                </div>
            </div>
        </a>

        <div className="w-layout-hflex flex-block-side">
            <a aria-current="page" className='link-light'>
                <div className="image-wide-title short-length">
                    <img src="./xt30ii.jpg" alt="Image"/>
                </div>
            </a>
            <a aria-current="page" className='link-light'>
                <div className="image-wide-title short-length">
                    <img src="./xt30ii.jpg" alt="Image"/>
                </div>
            </a>
        </div>

        <div className="w-layout-hflex flex-block-side">
            <a aria-current="page" className='link-light'>
                <div className="image-wide-title short-length">
                    <img src="./xt30ii.jpg" alt="Image"/>
                </div>
            </a>
            <a aria-current="page" className='link-light'>
                <div className="image-wide-title short-length">
                    <img src="./xt30ii.jpg" alt="Image"/>
                </div>
            </a>
        </div>

        <div className="spacer"></div>
    </body>
  );
};

export default GalleryPage;
