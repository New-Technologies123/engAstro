import { useState, useRef } from 'react';
import product_1 from '../../../images/products/product_1.webp';
import product_1_1 from '../../../images/products/product_1_1.webp';
import product_1_2 from '../../../images/products/product_1_2.webp';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import Styles from './products.module.scss';
import { useClickToScroll } from '../../../hooks/useClickToScroll';
import { BackToTop } from '../../ui/back-to-top/BackToTop';

export const AccountingSystem = () => {
  
  const [firstIsOpen, setFirstIsOpen] = useState(false);
  const [secondIsOpen, setSecondIsOpen] = useState(false);
  const [thirdIsOpen, setThirdIsOpen] = useState(false);

  const sectionsRef = useRef([]);
  const handleClick = useClickToScroll();

  return (
    <div className={Styles.container}>
      <div className={Styles.mainContent}>
        <aside className={Styles.sidebar}>
          <div className={Styles.navMenu}>
            <button onClick={() => handleClick('products-1')} className={`${Styles.navItem}`}>
              <span className={Styles.navIcon}>🏢</span>
              <p>«Sputnik — Massomer NT.1» Stationary Automated Group Metering Skid</p>
            </button>
            <button onClick={() => handleClick('products-2')} className={`${Styles.navItem}`}>
              <span className={Styles.navIcon}>🚚</span>
              <p>«Sputnik — Massomer NT.1» Mobile Automated Group Metering Skid</p>
            </button>
          </div>
        </aside>

        <div className={Styles.content}>
          <section id="products-1" ref={el => sectionsRef.current[0] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2>Stationary System</h2>
            </div>

            <div className={Styles.gallery}>
              <div className={Styles.imageCard} onClick={() => setFirstIsOpen(true)}>
                <img src={product_1.src} alt="Стационарная АГЗУ" className={Styles.image} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>Zoom</span>
                </div>
              </div>
              <div className={Styles.imageCard} onClick={() => setSecondIsOpen(true)}>
                <img src={product_1_1.src} alt="Стационарная АГЗУ" className={Styles.image} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>Zoom</span>
                </div>
              </div>
            </div>

            <div className={Styles.features}>
              <h3>Designed to measure:</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>📊</div>
                  <div className={Styles.featureText}>
                    <p>Mass and mass flow rate of the well fluid (crude oil) contained in the oil and gas mixture.</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🚱</div>
                  <div className={Styles.featureText}>
                    <p>Mass and mass flow rate of crude oil excluding water.</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>📏</div>
                  <div className={Styles.featureText}>
                    <p>Volume and volume flow rate of free petroleum gas, reduced to standard conditions.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section 
            id="products-2" ref={el => sectionsRef.current[1] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2>Mobile version</h2>
            </div>

            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setThirdIsOpen(true)}>
                <img src={product_1_2.src} alt="Мобильная АГЗУ" className={Styles.mainImage} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>Zoom</span>
                </div>
              </div>
            </div>

            <div className={Styles.features}>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🏭</div>
                  <div className={Styles.featureText}>
                    <p>In the mobile version, the skid is installed in the body or on the chassis of a vehicle.</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>⚡</div>
                  <div className={Styles.featureText}>
                    <p>Operation principle of the skid is based on mass and mass flow measurements of crude oil, including and 
                      excluding water,  volume and volume flow measurements of free petroleum gas reduced to standard conditions 
                      after the separation process.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <BackToTop/>
      {firstIsOpen && <BigPhoto src={product_1.src} onClose={() => setFirstIsOpen(false)} />}
      {secondIsOpen && <BigPhoto src={product_1_1.src} onClose={() => setSecondIsOpen(false)} />}
      {thirdIsOpen && <BigPhoto src={product_1_2.src} onClose={() => setThirdIsOpen(false)} />}
    </div>
  );
};