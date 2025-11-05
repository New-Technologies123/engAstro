import news_1 from '../../../images/news/news_1.webp';
import news_2 from '../../../images/news/news_2.webp';
import news_3 from '../../../images/news/news_3.webp';
import news_4 from '../../../images/news/news_4.webp';
import Styles from './news.module.scss';
import { Gallery } from '../../ui/gallery/Gallery';
import { useState, useEffect } from 'react';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { Title } from '../../ui/title/Title';
import { BackToTop } from '../../ui/back-to-top/BackToTop';

export const News = () => {
  const [photoIsOpen, setPhotoIsOpen] = useState(false);
  const [photoTwoIsOpen, setPhotoTwoIsOpen] = useState(false);
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
            <img src={news_4.src} className={Styles.thumbnail} onClick={() => { setPhotoTwoIsOpen(true); }}/>
            <p>
              On the 27th of March,  2025 the CEO of «New Technologies» Engineering and Production Enterprise LLC, 
              Safarov Yan Raufovich, was awarded with a Certificate of Honor for his achievements in the development 
              of international, foreign economic and interregional relations of the Republic of Bashkortostan with 
              the constituent entities of the Russian Federation.
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
              «New Technologies» Engineering and Production Enterprise LLC successfully participated in the 29th 
              Kazakhstan International «Oil and Gas» Exhibition (KIOGE), held from the 25th of September to the 
              27th of September, 2024. This   event served as a platform to present innovative technologies and 
              fundamental trends within the global oil and gas industry.
            </p>
          </div>

          <div className={Styles.newsItem}>
            <img src={news_3.src} className={Styles.thumbnail} onClick={() => { setPhotoIsOpen(true); }}/>
            <p>
              «New Technologies» Engineering and Production Enterprise LLC won 2nd place in the «Exporter of the 
              Year 2022» competition, in the category of «The breakthrough of the Year among Small and Medium-sized 
              Enterprises» in the Republic of Bashkortostan during the International Business Week.
            </p>
          </div>
        </div>        
      </div>
      {photoIsOpen && <BigPhoto src={news_3.src} onClose={() => setPhotoIsOpen(false)} />}
      {photoTwoIsOpen && <BigPhoto src={news_4.src} onClose={() => setPhotoTwoIsOpen(false)} />}
      <BackToTop/>
    </>
    
  );
};