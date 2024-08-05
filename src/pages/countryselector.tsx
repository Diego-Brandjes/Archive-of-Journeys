import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../index.css"
import Navbar from '../compontents/navbar';

interface Chapter {
  chapter: string;
  image: string;
  link: string;
  paragraphs: string[];
}

interface PageData {
  title: string;
  dark: boolean;
  bigImage: string;
  chapters: Chapter[];
}

const CountrySelector: React.FC = () => {
  const { country } = useParams<{ country: string }>();
  const [data, setData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/countries/${country}.json`);
        if (!response.ok) {
          throw new Error('Page not found');
        }
        const result: PageData = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate('/page-not-found'); // Redirect to a "Page Not Found" route
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [country]);

  if (loading) {
    return (
        <div className="full-image fullpage">
          {/* blank page */}
      </div>
    );
  }

  if (!data) {
    return null; // This case should be handled by the redirect
  }

  return (
    <div className="body secondary font-dark">
      <Navbar dark={data.dark} />

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
            <h1 className="dark-font">{data.title}</h1>
          </div>
        </section>
      </section>

      {data.chapters.map((item, index) => (
        <a href={item.link} aria-current="page" className="link-dark w--current clickable-div" key={index}>
          <div className="w-layout-hflex flex-block-side">
            <section className="infofield secondary less-wide-text">
              <div className="div-block-no-overlap">
                <h2>{item.chapter}</h2>
                {item.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
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
