import Styles from './products.module.scss';
import { useState, useRef } from 'react';
import product_3 from '../../../images/products/product_3.webp';
import product_3_1 from '../../../images/products/product_3_1.webp';
import product_3_2 from '../../../images/products/product_3_2.webp';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useClickToScroll } from '../../../hooks/useClickToScroll';
import { BackToTop } from '../../ui/back-to-top/BackToTop';

export const MeasuringSystem = () => {

  const [oneIsOpen, setOneIsOpen] = useState(false);
  const [twoIsOpen, setTwoIsOpen] = useState(false);
  const [threeIsOpen, setThreeIsOpen] = useState(false);
  

  const sectionsRef = useRef([]);
  const handleClick = useClickToScroll();

  return (
    <div className={Styles.container}>
      <div className={Styles.mainContent}>
        <aside className={Styles.sidebar}>
          <div className={Styles.navMenu}>
            <button onClick={() => handleClick('products-1')} className={`${Styles.navItem}`}>
              <span className={Styles.navIcon}>🛢️</span>
              <p>Oil quantity and parameters metering system</p>
            </button>
            <button onClick={() => handleClick('products-2')} className={`${Styles.navItem}`}>
              <span className={Styles.navIcon}>💨</span>
              <p>Gas Quantity and Quality Parameters Metering System</p>
            </button>
            <button onClick={() => handleClick('products-3')} className={`${Styles.navItem}`}>
              <span className={Styles.navIcon}>💧</span>
              <p>Water Quantity and Quality Parameters Metering System</p>
            </button>
            
          </div>
        </aside>

        <div className={Styles.content}>
          <section id="products-1" ref={el => sectionsRef.current[0] = el} className={Styles.section}>
              <div className={Styles.sectionHeader}>
              <h2>Oil quantity and parameters metering system</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setOneIsOpen(true)}>
                <img src={product_3.src} alt="Мобильная АГЗУ" className={Styles.mainImage} />
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
                    <p>Oil Quantity and Quality Parameters Metering System;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🔍</div>
                  <div className={Styles.featureText}>
                    <p>For quality evaluation of such indicators as density, viscosity, moisture content, and such oil parameters as pressure and temperature;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🧪</div>
                  <div className={Styles.featureText}>
                    <p>Composite sample acquisition in accordance with GOST 2517</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>💻</div>
                  <div className={Styles.featureText}>
                    <p>Issuance of information transmitted by automation facilities and its subsequent archiving and displaying on the operator's automated workstation.</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🏭</div>
                  <div className={Styles.featureText}>
                    <p>The system is manufactured on the basis of volumetric, ultrasonic or mass flow transmitters.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-2" ref={el => sectionsRef.current[1] = el} className={Styles.section}>
              <div className={Styles.sectionHeader}>
              <h2>Gas Quantity and Quality Parameters Metering System</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setTwoIsOpen(true)}>
                <img src={product_3_1.src} alt="Мобильная АГЗУ" className={Styles.mainImage} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>Zoom</span>
                </div>
              </div>
            </div>
            <div className={Styles.features}>
              <h3>Designed to measure:</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🤖</div>
                  <div className={Styles.featureText}>
                    <p>Gas quality control system is designed for an automated (operational or commercial) quantity metering, 
                      quality evaluation of free petroleum gas and its composition analysis during storage, transportation, 
                      processing, as well as during clearing and settlement.</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🏗️</div>
                  <div className={Styles.featureText}>
                    <p>The metering system is a part of oil treatment units of gas producing enterprises (gas producing fields 
                      and gas-condensate fields) at the border between gas producing enterprise and gas transmission operator, 
                      at the boundary between gas transmission operator and gas-distribution enterprise.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={Styles.features}>
              <h3>Composition:</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🌪️</div>
                  <div className={Styles.featureText}>
                    <p>Gas flow transmitter;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🧮</div>
                  <div className={Styles.featureText}>
                    <p>Flow measuring computer providing execution of all the functions required for flow measuring and control both on a single and on several measuring lines;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🎛️</div>
                  <div className={Styles.featureText}>
                    <p>Pressure or flow regulators;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>💾</div>
                  <div className={Styles.featureText}>
                    <p>Hardware and software tools for the final element control;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>📊</div>
                  <div className={Styles.featureText}>
                    <p>Gas chromatographic system analyzing the entire gas blend composition or the concentration of components of interest;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>💧</div>
                  <div className={Styles.featureText}>
                    <p>Dew point analyser;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🌡️</div>
                  <div className={Styles.featureText}>
                    <p>Pressure and temperature transmitters;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🧪</div>
                  <div className={Styles.featureText}>
                    <p>Sample collection system.</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🛠️</div>
                  <div className={Styles.featureText}>
                    <p>Depending on the category and class of the metering system, the following types of flow-measuring 
                      complexes can be used: vortex, turbine, ultrasonic, thermoanemometric, multiple-parameter, based on 
                      standard constriction device.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-3" ref={el => sectionsRef.current[2] = el} className={Styles.section}>
              <div className={Styles.sectionHeader}>
              <h2>Water Quantity and Quality Parameters Metering System</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setThreeIsOpen(true)}>
                <img src={product_3_2.src} alt="Мобильная АГЗУ" className={Styles.mainImage} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>Zoom</span>
                </div>
              </div>
            </div>
            <div className={Styles.features}>
              <h3>Designed to measure:</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>💧</div>
                  <div className={Styles.featureText}>
                    <p>Water quantity and quality parameters metering system is a special-purpose equipment and measuring 
                      tools complex intended for measuring mass and volume flow, pressure and temperature.</p>
                  </div>
                </li>                
              </ul>
            </div>
            <div className={Styles.features}>
              <h3>Composition:</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>📊</div>
                  <div className={Styles.featureText}>
                    <p>Meter Run Assembly;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>💻</div>
                  <div className={Styles.featureText}>
                    <p>Data-processing system;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🛠️</div>
                  <div className={Styles.featureText}>
                    <p>Process and drainage pipelines.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <BackToTop/>
      {oneIsOpen && <BigPhoto src={product_3.src} onClose={() => setOneIsOpen(false)} />}
      {twoIsOpen && <BigPhoto src={product_3_1.src} onClose={() => setTwoIsOpen(false)} />}
      {threeIsOpen && <BigPhoto src={product_3_2.src} onClose={() => setThreeIsOpen(false)} />}
    </div>      
  );
};
