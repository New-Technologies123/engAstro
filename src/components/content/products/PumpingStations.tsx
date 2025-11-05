import Styles from './products.module.scss';
import { useState, useRef } from 'react';
import product_5 from '../../../images/products/product_5.webp';
import product_5_1 from '../../../images/products/product_5_1.webp';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useClickToScroll } from '../../../hooks/useClickToScroll';
import { BackToTop } from '../../ui/back-to-top/BackToTop';


export const PumpingStations = () => {

  const [oneIsOpen, setOneIsOpen] = useState(false);
  const [twoIsOpen, setTwoIsOpen] = useState(false);

  const sectionsRef = useRef([]);
  const handleClick = useClickToScroll();

  return (
    <div className={Styles.container}>
      <div className={Styles.mainContent}>
        <aside className={Styles.sidebar}>
          <div className={Styles.navMenu}>
            <button onClick={() => handleClick('products-1')} className={`${Styles.navItem}`}>
              <span className={Styles.navIcon}>⛽</span>
              <p>Modular internal and external Pumping Station</p>
            </button>
            <button onClick={() => handleClick('products-2')} className={`${Styles.navItem}`}>
              <span className={Styles.navIcon}>🔄</span>
              <p>Modular multiphase Pumping Station</p>
            </button>
          </div>
        </aside>

        <div className={Styles.content}>
          <section id="products-1"  ref={el => sectionsRef.current[0] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2>Modular internal and external Pumping Station</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setOneIsOpen(true)}>
                <img src={product_5.src} alt="#" className={Styles.mainImage} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>Zoom</span>
                </div>
              </div>
            </div>
            <div className={Styles.features}>
              <h3>Designed to measure:</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🛢️</div>
                  <div className={Styles.featureText}>
                    <p>Designed for further transportation of oil into the interfield pipelines in the systems of oil 
                      gathering and treatment and systems of tank farm and external pumping of oil products and condensate.</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🏭</div>
                  <div className={Styles.featureText}>
                    <p>Pumping stations are designed and manufactured on the basis of centrifugal pumping equipment of Russian 
                      or foreign manufacture. Depending on the brand of the pumping equipment, the pumping station can be produced in several designs.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={Styles.features}>
              <h3>Composition:</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>⚙️</div>
                  <div className={Styles.featureText}>                    
                    <p>Pumping equipment;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🔄</div>
                  <div className={Styles.featureText}>
                    <p>Intake and discharge manifolds with shut-off valves;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>💧</div>
                  <div className={Styles.featureText}>
                    <p>Drainage and leakage drain pipelines;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🔥</div>
                  <div className={Styles.featureText}>
                    <p>Fire alarm system and gas pollution control;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🧯</div>
                  <div className={Styles.featureText}>
                    <p>Foam fire extinguishing system;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🤖</div>
                  <div className={Styles.featureText}>
                    <p>Automation and instrumentation equipment;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🏗️</div>
                  <div className={Styles.featureText}>
                    <p>Hoisting equipment for mounting and dismantling of piping valves and connection pipelines;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🎮</div>
                  <div className={Styles.featureText}>
                    <p>Jockey pump control system;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>📡</div>
                  <div className={Styles.featureText}>
                    <p>Upper level data-transmitting system;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>⚡</div>
                  <div className={Styles.featureText}>
                    <p>Power supply system of the pumping equipment;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🏥</div>
                  <div className={Styles.featureText}>
                    <p>The life support system of the containerized module.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-2"  ref={el => sectionsRef.current[1] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2>Modular multiphase Pumping Station</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setTwoIsOpen(true)}>
                <img src={product_5_1.src} alt="#" className={Styles.mainImage} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>Zoom</span>
                </div>
              </div>
            </div>
            <div className={Styles.features}>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>⚡</div>
                  <div className={Styles.featureText}>
                    <h4 className={Styles.featureTitle}>Designed to measure:</h4>
                    <div className={Styles.featureText}>                    
                      <p>Liquid-gas mixture pumping from the wells without the preliminary gas separation with gas phase up to 100%.</p> 
                    </div>
                    {/* <p className={Styles.featureText}>Liquid-gas mixture pumping from the wells without the preliminary gas separation with gas phase up to 100%.</p> */}
                  </div>
                </li>
              </ul>
            </div>
            <div className={Styles.features}>
              <h3>Composition:</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🔄</div>
                  <div className={Styles.featureText}>                    
                    <p>Multiphase pumping equipment;</p> 
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🏗️</div>
                  <div className={Styles.featureText}>                    
                    <p>Containerized module of the pumping station;</p> 
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🛢️</div>
                  <div className={Styles.featureText}>
                    <p>Technological pipelines;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>💧</div>
                  <div className={Styles.featureText}>
                    <p>Drainage pipelines;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>📊</div>
                  <div className={Styles.featureText}>
                    <p>Instrumentation and control equipment package;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🌡️</div>
                  <div className={Styles.featureText}>
                    <p>The life support system of the containerized module (heating and ventilation system);</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🤖</div>
                  <div className={Styles.featureText}>
                    <p>Multiphase pumping equipment control system;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>⚠️</div>
                  <div className={Styles.featureText}>
                    <p>Emergency shutdown system;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>⚡</div>
                  <div className={Styles.featureText}>
                    <p>Variable speed drive unitk;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>📡</div>
                  <div className={Styles.featureText}>
                    <p>Upper level data-transmitting system;</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🔌</div>
                  <div className={Styles.featureText}>
                    <p>Power supply system of the pumping equipment.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <BackToTop/>
      {oneIsOpen && <BigPhoto src={product_5.src} onClose={() => setOneIsOpen(false)} />}
      {twoIsOpen && <BigPhoto src={product_5_1.src} onClose={() => setTwoIsOpen(false)} />}
    </div>      
  );
};
