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
      <Title text="Новости"></Title>
      <div className={`${isLoaded ? Styles.loaded : ''}`}>
        <div className={Styles.newsContent}>
          <div className={Styles.newsItem}>
            <img src={news_12.src} className={Styles.thumbnail} onClick={() => { setPhotoFourIsOpen(true); }} />
            <div>
              <p>
                "New Technologies" Engineering and Production Enterprise LLC is excited to announce our participation 
                in the Egypt Energy Show (EGYPES) 2026!
              </p>
              <p>
                Visit us at Stand 1D64 – New Technologies from March 30 to April 1.
              </p>
              <p>
                We will be happy to showcase our cutting-edge technologies and discuss cooperation opportunities.
              </p>
              <p>
                See you at EGYPES!
              </p>
            </div>
              
          </div>
          <div className={Styles.newsItem}>
            <img src={news_11.src} className={Styles.thumbnail} onClick={() => { setPhotoThreeIsOpen(true); }} />
            <div>
              <p>
                "New Technologies" LLC Added to SOCAR’s Approved Vendor List
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
              ООО ИПП «Новые Технологии» успешно приняли участие в международной выставке ADIPEC-2025, прошедшей в
              Абу-Даби, ОАЭ с 3 по 6 ноября 2025 года. Наше предприятие успешно провело переговоры с представителями
              ADNOC, Aramco и других глобальных игроков, обсудив потенциальные контракты на поставку оборудования и
              совместные проекты. Участие нашего предприятия позволило укрепить наши позиции в регионе MENA, где спрос
              на российские технологии остаётся неизменно высоким. Участие в данном международном мероприятии открывает
              путь для успешного глобального сотрудничества и экспорта высокотехнологического оборудования, производимого
              нашим предприятием.
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
              2-4 июня 2025 года ООО ИПП «Новые Технологии» успешно приняли участие в 30-ой Международной Выставке «Нефть
              и Газ Каспия» - Caspian oil & gas 2025, г. Баку. В рамках выставки были проведены несколько десятков переговоров
              и презентаций, в результате которых был выявлен интерес к высокотехнологичной продукции нашего предприятия, что
              открывает нам новые экспортные возможности
            </p>
          </div>
          <div className={Styles.newsItem}>
            <Gallery
              photos={[
                { id: 1, src: news_5.src, alt: '' },
                { id: 2, src: news_6.src, alt: '' },
              ]}
            />
            <p>
              В рамках 30-ой Международной Выставке «Нефть и Газ Каспия» - Caspian oil & gas 2025, г. Баку сотрудники ООО
              ИПП «Новые Технологии» приняли участие в посадке деревьев и цветов на территории Баку Экспо Центра. Эта акция,
              приуроченная к юбилею выставки, направлена на поддержку принципов устойчивого развития и охрану окружающей среды.
            </p>
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