import Styles from './products.module.scss';
import { useState, useRef } from 'react';
import product_2 from '../../../images/products/product_2.webp';
import product_2_1 from '../../../images/products/product_2_1.webp';
import product_2_2 from '../../../images/products/product_2_2.webp';
import product_2_3 from '../../../images/products/product_2_3.webp';
import product_2_4 from '../../../images/products/product_2_4.webp'; 
import product_2_5 from '../../../images/products/product_2_5.webp';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useClickToScroll } from '../../../hooks/useClickToScroll';
import { BackToTop } from '../../ui/back-to-top/BackToTop';


// Комплектующие для автоматизированной групповой замерной установки
export const Accessories = () => {
  
  const [srcForBigPhoto, setSrcForBigPhoto] = useState<string | null>(null);

  const sectionsRef = useRef([]);
  const handleClick = useClickToScroll();

  return (
    <div className={Styles.container}>
      <div className={Styles.mainContent}>
        <aside className={Styles.sidebar}>
          <div className={Styles.navMenu}>
            <button onClick={() => handleClick('products-1')} className={`${Styles.navItem}`}>
              <span className={Styles.navIcon}>🌊</span>
              <p>ERVIP Vortex Flowmeter</p>
            </button>
            <button onClick={() => handleClick('products-2')} className={`${Styles.navItem}`}>
              <span className={Styles.navIcon}>📉</span>
              <p>Differential Pressure Adjusting Device</p>
            </button>
            <button onClick={() => handleClick('products-3')} className={`${Styles.navItem}`}>
              <span className={Styles.navIcon}>🔄</span>
              <p>Multi-stream Switching Manifold</p>
            </button>
            <button onClick={() => handleClick('products-4')} className={`${Styles.navItem}`}>
              <span className={Styles.navIcon}>🧲</span>
              <p>Magnetically adjusted Flow Control Valve</p>
            </button>
            <button onClick={() => handleClick('products-5')} className={`${Styles.navItem}`}>
              <span className={Styles.navIcon}>💦</span>
              <p>Hydraulic drive</p>
            </button>
            <button onClick={() => handleClick('products-6')} className={`${Styles.navItem}`}>
              <span className={Styles.navIcon}>⚗️</span>
              <p>Separation tank</p>
            </button>
          </div>
        </aside>

        <div className={Styles.content}>

          <section id="products-1"  ref={el => sectionsRef.current[0] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2>ERVIP Vortex Flowmeter</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.minFoto}>
                <div className={Styles.imageCard} onClick={() => setSrcForBigPhoto(product_2.src)}>
                  <img src={product_2.src} alt="#" className={Styles.mainImage} />                               
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.zoomText}>Zoom</span>
                  </div>
                </div>
              </div>              
            </div>
            <div className={Styles.features}>
              <h3>Main application</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>💎</div>
                  <div className={Styles.featureText}>
                    <h4 className={Styles.featureTitle}>Advantage:</h4>
                    <p className={Styles.featureText}>High performance stability, measurement precision, flexibility in 
                      application, resistance to pollution, absence of moving parts, longevity and easy maintenance.</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🔧</div>
                  <div className={Styles.featureText}>
                    <h4>Flexibility of customization</h4>
                    <p>Flow meter calibration flexibility (measurement range regulation) complete with flow control valve 
                      and position indicator helps to reduce fluid volume measurement error. Recalibration interval - 4 
                      years. Service life - 12 years.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={Styles.features}>
              <h3>Operating Principle:</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🌪️</div>        
                  <div className={Styles.featureText}>                    
                    <p>The flow measurement method includes placement of an obstacle (perturbation barrier) on the fluid 
                      flow path. When the liquid (gas) passes this barrier, perturbations, called vortices, are created in 
                      the flow. The vortices leave traces behind the barrier. These vortex paths are commonly called Karman 
                      vortex street. Vortices' production frequency behind the flow body is proportional to the flow velocity. 
                      Vortices' detection and determination of their formation frequency allow to establish the speed and the 
                      volumetric fluid flow rate.</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>⚡</div>            
                  <div className={Styles.featureText}>
                    <p>Inside the perturbation barrier there is a piezo crystal that creates small but measured voltage impulses, 
                      proportional to the flow of liquid (gas). Values of these impulses are measured by the electronics of the 
                      vortex flow meter.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-2"  ref={el => sectionsRef.current[1] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2>Differential Pressure Adjusting Device</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.minFoto}>
                <div className={Styles.imageCard} onClick={() => setSrcForBigPhoto(product_2_1.src)}>
                  <div>
                    <img src={product_2_1.src} alt="#" className={Styles.mainImage} />
                  </div>                
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.zoomText}>Zoom</span>
                  </div>
                </div>
              </div>              
            </div>
            <div className={Styles.features}>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🛡️</div> 
                  <div className={Styles.featureText}>
                    <h4>Designed to measure:</h4>
                    <p>Operation in the differential pressure and level adjusting system of the Automated Group Metering Skid. 
                      Gate sealability is ensured by pressing the gate against the sealing rings; both parts are made of stainless 
                      steel. The absence of rubber parts at the contact point provides long service life and long overhaul period.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-3"  ref={el => sectionsRef.current[2] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2>Multi-stream Switching Manifold</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.minFoto}>
                <div className={Styles.imageCard} onClick={() => setSrcForBigPhoto(product_2_2.src)}>
                  <img src={product_2_2.src} alt="#" className={Styles.mainImage} />
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.zoomText}>Zoom</span>
                  </div>
                </div>
              </div>              
            </div>
            <div className={Styles.features}>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>⛽</div> 
                  <div className={Styles.featureText}>
                    <h4>Designed to measure:</h4>
                    <p>Designed for manual and automatic well switching for the measurement process. Bimetallic pipes with annealing 
                      and pre-machining were used for the manufacture of wear-resistant casing of multi-stream switching manifold.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-4"  ref={el => sectionsRef.current[3] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2>Magnetically adjusted Flow Control Valve</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.minFoto}>
                <div className={Styles.imageCard} onClick={() => setSrcForBigPhoto(product_2_3.src)}>
                  <img src={product_2_3.src} alt="#" className={Styles.mainImage} />
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.zoomText}>Zoom</span>
                  </div>
                </div>
              </div>              
            </div>
            <div className={Styles.features}>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🔄</div>
                  <div className={Styles.featureText}>
                    <h4>Designed to measure:</h4>
                    <p>It's used for the operation in the liquid flow control system of the metering skid instead of conventional flow control valves.</p> 
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-5"  ref={el => sectionsRef.current[4] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2>Hydraulic drive</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.minFoto}>
                <div className={Styles.imageCard} onClick={() => setSrcForBigPhoto(product_2_4.src)}>
                  <img src={product_2_4.src} alt="#" className={Styles.mainImage} />
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.zoomText}>Zoom</span>
                  </div>
                </div>
              </div>              
            </div>
            <div className={Styles.features}>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>⏲️</div>
                  <div className={Styles.featureText}>
                    <h4>Designed to measure:</h4>
                    <p>Creation of hydraulic pressure in the power cylinder of the multi-stream switching manifold.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-6"  ref={el => sectionsRef.current[5] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2>Separation tank</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.minFoto}>
                <div className={Styles.imageCard} onClick={() => setSrcForBigPhoto(product_2_5.src)}>
                  <img src={product_2_5.src} alt="#" className={Styles.mainImage} />
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.zoomText}>Zoom</span>
                  </div>
                </div>
              </div>              
            </div>
            <div className={Styles.features}>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🔀</div>
                  <div className={Styles.featureText}>
                    <h4 className={Styles.featureTitle}>Designed to measure:</h4>
                    <p className={Styles.featureText}>Separation of oil and gas mixtures into liquid and gas</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>   

      <BackToTop/>
      {srcForBigPhoto && <BigPhoto src={srcForBigPhoto} onClose={() => setSrcForBigPhoto(null)} />}
    </div>
  );
};
