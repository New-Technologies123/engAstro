import Styles from './products.module.scss';
import { useState, useRef } from 'react';
import product_4 from '../../../images/products/product_4.webp';
import product_4_1 from '../../../images/products/product_4_2.webp';
import product_4_3 from '../../../images/products/product_4_3.webp';
import product_4_4 from '../../../images/products/product_4_4.webp';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useClickToScroll } from '../../../hooks/useClickToScroll';

import { BackToTop } from '../../ui/back-to-top/BackToTop';

export const PreparationSystems = () => {


  const [oneIsOpen, setOneIsOpen] = useState(false);
  const [twoIsOpen, setTwoIsOpen] = useState(false);
  const [threeIsOpen, setThreeIsOpen] = useState(false);
  const [fourIsOpen, setFourIsOpen] = useState(false);

  const sectionsRef = useRef([]);
  const handleClick = useClickToScroll();

  return (
    <div className={Styles.container}>
      <div className={Styles.mainContent}>
        <aside className={Styles.sidebar}>
          <div className={Styles.navMenu}>
            <button onClick={() => handleClick('products-1')} className={`${Styles.navItem}`}>
              <span className={Styles.navIcon}>🚀</span>
              <p>Pig launcher and receiver of intratubal cleaning and diagnostic facilities</p>
            </button>
            <button onClick={() => handleClick('products-2')} className={`${Styles.navItem}`}>
              <span className={Styles.navIcon}>🔘</span>
              <p>Valve Manifold</p>
            </button>
            <button onClick={() => handleClick('products-3')} className={`${Styles.navItem}`}>
              <span className={Styles.navIcon}>🧹</span>
              <p>Tubing String Clarifier</p>
            </button>
            <button onClick={() => handleClick('products-4')} className={`${Styles.navItem}`}>
              <span className={Styles.navIcon}>🧪</span>
              <p>Chemical Injection Skid</p>
            </button>
          </div>
        </aside>
        <div className={Styles.content}>
          <section id="products-1"  ref={el => sectionsRef.current[0] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2>Pig launcher and receiver of intratubal cleaning and diagnostic facilities</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setOneIsOpen(true)}>
                <img src={product_4.src} alt="#" className={Styles.mainImage} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>Zoom</span>
                </div>
              </div>
            </div>
            <div className={Styles.features}>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>⏱️</div>
                  <div className={Styles.featureText}>
                    <h4>Designed to measure:</h4>
                    <p>Periodic launching of intratubal pigs such as inspection pigs, cleaning scrapers 
                      and other in-line tools into the pipeline and receiving them out of the pipeline</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>⛽</div>
                  <div className={Styles.featureText}>
                    <h4>Scope of application:</h4>
                    <p>Oil and gas gathering and transportation systems (crude oil pipelines, gas pipeline)</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-2"  ref={el => sectionsRef.current[1] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2>Valve Manifold</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setTwoIsOpen(true)}>
                <img src={product_4_1.src} alt="#" className={Styles.mainImage} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>Zoom</span>
                </div>
              </div>
            </div>
            <div className={Styles.features}>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🌊</div>
                  <div className={Styles.featureText}>
                    <h4>Designed to measure:</h4>
                    <p>Distribution of pure or reservoir water flows supplied by the modular cluster pump station 
                      under high pressure into the injection wells to maintain reservoir pressure.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-3"  ref={el => sectionsRef.current[2] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2>Tubing String Clarifier</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setThreeIsOpen(true)}>
                <img src={product_4_3.src} alt="#" className={Styles.mainImage} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>Zoom</span>
                </div>
              </div>
            </div>
            <div className={Styles.features}>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🔄</div>
                  <div className={Styles.featureText}>
                    <h4>Designed to measure:</h4>
                    <p>Continuous cleaning of the entire inner surface of the tubing string by cutting a layer of wax from the walls.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={Styles.features}>
              <h3>Advantages:</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🧵</div>
                  <div className={Styles.featureText}>
                    <p>Wire uncoiling is prevented due to the use of a spring-loaded movable roller with a weight sensor;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>⚙️</div>
                  <div className={Styles.featureText}>
                    <p>Fully automated process of clearing blockages;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>📏</div>
                  <div className={Styles.featureText}>
                    <p>Calibration of the scraper position with an accuracy up to 40 сm.;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🔪</div>
                  <div className={Styles.featureText}>
                    <p>The scraper has several basic designs: sliding, ring, milling, blade, auger, etc.;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🧲</div>
                  <div className={Styles.featureText}>
                    <p>The magnets are installed on the roller, the speed sensors (reed switches) are installed on the movable 
                      roller stand, at a distance at which the interaction zone of their magnetic fields overlaps. This arrangement
                       ensures sequential operation of the reed switches in the direction of rotation of the roller.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section id="products-4" ref={el => sectionsRef.current[3] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2>Chemical Injection Skid</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setFourIsOpen(true)}>
                <img src={product_4_4.src} alt="Мобильная АГЗУ" className={Styles.mainImage} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>Zoom</span>
                </div>
              </div>
            </div>
            <div className={Styles.features}>
              <h3>Designed to measure:</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>⚖️</div>
                  <div className={Styles.featureText}>
                    <p>Chemical injection skid is designed for the metered injection of liquid demulsifiers and corrosion inhibitors 
                      into the oil transportation and treatment lines to perform oil demulsification and to protect pipelines from 
                      corrosion and wax deposits etc. Chemical injection skid is used for chemical treatment of oil and gas well products 
                      in the systems of oil and gas treatment, gathering, and transportation. This equipment can be used at cluster pads, 
                      booster pump station pads and oil, gas and water complex treatment units.</p>
                  </div>
                </li>                
              </ul>
            </div>
          </section> 
        </div>
      </div>

      <BackToTop/>
      {oneIsOpen && <BigPhoto src={product_4.src} onClose={() => setOneIsOpen(false)} />}
      {twoIsOpen && <BigPhoto src={product_4_1.src} onClose={() => setTwoIsOpen(false)} />}
      {threeIsOpen && <BigPhoto src={product_4_3.src} onClose={() => setThreeIsOpen(false)} />}
      {fourIsOpen && <BigPhoto src={product_4_4.src} onClose={() => setFourIsOpen(false)} />}
    </div>      
  );
};
