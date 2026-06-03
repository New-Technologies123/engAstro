import news_1 from '../../../images/news/news_1.webp';
import news_2 from '../../../images/news/news_2.webp';
import news_3 from '../../../images/news/news_3.webp';
import news_4 from '../../../images/news/news_4.webp';
import news_5 from '../../../images/news/news_5.webp';
import news_6 from '../../../images/news/news_6.webp';
import news_7 from '../../../images/news/news_7.webp';
import news_8 from '../../../images/news/news_8.webp';
import news_9 from '../../../images/news/news_9.webp';
import news_10 from '../../../images/news/news_10.webp';
import news_11 from '../../../images/news/news_11.webp';
import news_12 from '../../../images/news/news_12.webp';
import news_13 from '../../../images/news/news_13.webp';
import Styles from './news.module.scss';
import { Gallery } from '../../ui/gallery/Gallery';
import { useState, useEffect } from 'react';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { Title } from '../../ui/title/Title';
import { BackToTop } from '../../ui/back-to-top/BackToTop'

export const News = () => {
  const [photoIsOpen, setPhotoIsOpen] = useState(false);
  const [photoTwoIsOpen, setPhotoTwoIsOpen] = useState(false);
  const [photoThreeIsOpen, setPhotoThreeIsOpen] = useState(false);
  const [photoFourIsOpen, setPhotoFourIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Имитация загрузки контента
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Title text="News"></Title>
      <div className={`${isLoaded ? Styles.loaded : ''}`}>
        <div className={Styles.newsContent}>
          <div className={Styles.newsItem}>
            <Gallery
              photos={[
                { id: 1, src: news_12.src, alt: '' },
                { id: 2, src: news_13.src, alt: '' },
              ]}
            />
            <div>
              <p>
                We are pleased to announce that “New Technologies” Engineering and Production Enterprise LLC has successfully taken part in the Egypt Energy Show (EGYPES) 2026, held recently in Cairo.
              </p>
              <p>
                Over the course of the exhibition, our team:
              </p>
              <p>
                Presented our latest engineering and production solutions for the energy sector
              </p>
              <p>
                Held productive meetings with industry professionals and potential partners
              </p>
              <p>
                Strengthened existing business ties and established new strategic contacts
              </p>
              <p>
                Received positive feedback on our innovative approach and technological capabilities
              </p>
              <p>
                We thank the organizers of EGYPES for a high-level event and all the visitors who stopped by our stand. Your interest in 
                our solutions confirms that we are moving in the right direction.
              </p>
              <p>
                We look forward to new projects and continued cooperation within the global energy industry!
              </p>
            </div>
              
          </div>
          <div className={Styles.newsItem}>
            <img src={news_11.src} className={Styles.thumbnail} onClick={() => { setPhotoThreeIsOpen(true); }} />
            <div>
              <p>
                "New Technologies" EPE LLC in SOCAR’s Approved Vendor List
              </p>
              <p>                
                On December 29, 2025, our company successfully completed the pre-qualification process and was officially 
                included in the Approved Vendor List of the State Oil Company of Azerbaijan Republic (SOCAR / Azərbaycan 
                Respublikası Dövlət Neft Şirkəti) via the socar.az platform.
              </p>
              <p>
                We highly value this recognition of our manufacturing capabilities from a global energy leader. We look 
                forward to a fruitful and long-term cooperation with SOCAR in Azerbaijan and other countries.
              </p>
            </div>            
          </div>
          <div className={Styles.newsItem}>
            <Gallery
              photos={[
                { id: 1, src: news_9.src, alt: '' },
                { id: 2, src: news_10.src, alt: '' },
              ]}
            />
            <p>
              «New Technologies» Engineering and Production Enterprise LLC successfully took part in the international exhibition ADIPEC 
              2025, held in Abu Dhabi, UAE, from November 3–6, 2025. The company conducted productive negotiations with representatives of
              ADNOC, Aramco, and other global industry leaders, discussing potential equipment supply contracts and joint projects. Our 
              participation strengthened our position in the MENA region, where demand for Russian technology remains consistently strong. 
              Engaging in this international event paves the way for successful global cooperation and the export of high technology equipment
              manufactured by our company.

            </p>
          </div>
          <div className={Styles.newsItem}>
            <Gallery
              photos={[
                { id: 1, src: news_7.src, alt: '' },
                { id: 2, src: news_8.src, alt: '' },
              ]}
            />
            <p>
              From June 2–4, 2025,«New Technologies» Engineering and Production Enterprise LLC successfully participated in the 
              30th Anniversary International Exhibition Caspian Oil & Gas 2025 in Baku. During the event, the company held dozens 
              of negotiations and presentations, resulting in significant interest in our high technology products and opening up 
              new export opportunities.
            </p>
          </div>
          <div className={Styles.newsItem}>
            <Gallery
              photos={[
                { id: 1, src: news_5.src, alt: '' },
                { id: 2, src: news_6.src, alt: '' },
              ]}
            />
            <div>
              <p>
                As part of the 30th Anniversary International Exhibition Caspian Oil & Gas 2025 in Baku, employees of «New Technologies»
              </p>
              <p>                
                Engineering and Production Enterprise LLC took part in a tree and flower planting ceremony on the grounds of the Baku Expo Center. 
                The initiative, held in celebration of the exhibition's anniversary, was aimed at supporting sustainable development principles and 
                environmental protection.dd
              </p>
            </div>
            
          </div>
          <div className={Styles.newsItem}>
            <img src={news_4.src} className={Styles.thumbnail} onClick={() => { setPhotoTwoIsOpen(true); }} />
            <p>
              On the 27th of March, 2025 the CEO of «New Technologies» Engineering and Production Enterprise LLC, Safarov Yan Raufovich, 
              was awarded with a Certificate of Honor for his achievements in the development of international, foreign economic and interregional 
              relations of the Republic of Bashkortostan with the constituent entities of the Russian Federation.
            </p>
          </div>
          <div className={Styles.newsItem}>
            <Gallery
              photos={[
                { id: 1, src: news_1.src, alt: '' },
                { id: 2, src: news_2.src, alt: '' },
              ]}
            />
            <p>
              «New Technologies» Engineering and Production Enterprise LLC successfully participated in the 29th Kazakhstan International 
              «Oil and Gas» Exhibition (KIOGE), held from the 25th of September to the 27th of September, 2024. This event served as a platform 
              to present innovative technologies and fundamental trends within the global oil and gas industry.
            </p>
          </div>

          <div className={Styles.newsItem}>
            <img src={news_3.src} className={Styles.thumbnail} onClick={() => { setPhotoIsOpen(true); }} />
            <p>
              «New Technologies» Engineering and Production Enterprise LLC won 2nd place in the «Exporter of the Year 2022» competition, 
              in the category of «The breakthrough of the Year among Small and Medium-sized Enterprises» in the Republic of Bashkortostan 
              during the International Business Week.
            </p>
          </div>
        </div>
      </div>
      <BackToTop />
      {photoIsOpen && <BigPhoto src={news_3.src} onClose={() => setPhotoIsOpen(false)} />}
      {photoTwoIsOpen && <BigPhoto src={news_4.src} onClose={() => setPhotoTwoIsOpen(false)} />}
      {photoThreeIsOpen && <BigPhoto src={news_11.src} onClose={() => setPhotoThreeIsOpen(false)} />}
      {photoFourIsOpen && <BigPhoto src={news_12.src} onClose={() => setPhotoFourIsOpen(false)} />}
    </>

  );
};