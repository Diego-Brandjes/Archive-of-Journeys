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
  titlecolor: string;
  dark: boolean;
  introduction: string;
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
        <div className="">
          {/* blank page */}
      </div>
    );
  }

  if (!data) {
    return null; // This case should be handled by the redirect
  }

  return (
    <div className={`body ${data.dark ? 'primary' : 'secondary'} light-font`}>
      <Navbar dark={data.dark} />


      <div className='spacer'></div>

      {data.chapters.map((item, index) => (
        <a href={item.link} aria-current="page" className={`w--current ${data.dark ? 'link-light' : 'link-light'}`} key={index}>

          <div className="w-layout-hflex flex-block-side">
            <div className="image-wide-title short-length">
              {item.image ? (
                <img src={item.image} alt="Image" />
              ) : (
                <div className="placeholder"></div>
              )}
              <div className="overlay">
                <section className="infofield-transparent less-wide-text">
                  <div className="div-block-no-overlap">
                    <h2>{item.chapter}</h2>
                    {item.paragraphs.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CountrySelector;
