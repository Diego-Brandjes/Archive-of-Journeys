import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Chapter {
  chapter: string;
  image: string;
  link: string;
  paragraphs: string[];
}

interface PageData {
  title: string;
  logo: string;
  bigImage: string;
  chapters: Chapter[];
}

const CountrySelector: React.FC = () => {
  const { country } = useParams<{ country: string }>();
  const [data, setData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/json/${country}.json`);
        const result: PageData = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [country]);

  if (loading) {
    return (
      <div className='font-light'>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!data) {
    return <div>Error: Data not found</div>;
  }

  return (
    <div className="body secondary font-dark">
      <section className="navbar">
        <div className="w-layout-hflex flex-block">
          <a
            href="/"
            aria-current="page"
            className="logo-link w-inline-block w--current"
          >
            <img
              src={data.logo}
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
            src={data.bigImage}
            loading="lazy"
            sizes="100vw"
            alt=""
            className="big-image"
          />
        </div>
        
        <section className="infofield-transparent">
          <div className="div-block-no-overlap">
            <h1 className="heading dark-font">{data.title}</h1>
          </div>
        </section>
      </section>

      {data.chapters.map((item, index) => (
        <a href={item.link} aria-current="page" className="link-dark w--current clickable-div" key={index}>
          <div className="w-layout-hflex flex-block-side">
            <section className="infofield secondary">
              <div className="div-block-no-overlap">
                <h2 className="heading">{item.chapter}</h2>
                {item.paragraphs.map((paragraph, i) => (
                  <p className="paragraph" key={i}>{paragraph}</p>
                ))}
              </div>
            </section>
            <div className="image-block-border-secondary" style={{ backgroundImage: `url(${item.image})` }}></div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CountrySelector;
