// measuring-system.tsx
import { LayoutBack } from '../../layout/LayoutBack';
import { Card } from '../../ui/card/Card';
import Styles from './accounting.module.scss';

import product_3_1 from '../../../images/products/product_3.webp';
import product_3_2 from '../../../images/products/product_3_1.webp';
import product_3_3 from '../../../images/products/product_3_2.webp';
import { BackToTop } from '../../ui/back-to-top/BackToTop';
import { useState } from 'react';

type TMeasuring = 'oil' | 'gas' | 'water';

export const MeasuringSystem = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'specs'>('info');

  const cardTitle: Record<TMeasuring, string> = {
    oil: 'Oil Quantity and Quality Measurement System (OQMS)',
    gas: 'Gas Quantity Measurement System (GQMS)',
    water: 'Water Quantity Measurement System (WQMS)',
  };

  const goToMeasuring = (item: TMeasuring) => {
    window.location.href = `/products/measuring-system/${item}`;
  };

  const onBackProducts = () => {
    window.location.href = '/products';
  };

  return (
    <LayoutBack onBack={onBackProducts} title="Hydrocarbon and Formation Fluid Measurement System">
      <div className={Styles.container}>
        <div className={Styles.textColumn}>
          
          <div className={Styles.contentWrapper}>
            <div className={Styles.fadeIn}>
              <p>
                Accurate measurement is the foundation of effective production management. We develop 
                and supply oil, gas, and water measurement systems for any field conditions. The equipment 
                meets metrological requirements and is ready for integration into your automation system.
              </p>

              <div className={Styles.featureGrid}>
                <div className={Styles.featureItem}>
                  <div className={Styles.iconWrapper}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <div>
                    <h4>High Accuracy</h4>
                    <p>Measurement error within regulatory standards</p>
                  </div>
                </div>
                <div className={Styles.featureItem}>
                  <div className={Styles.iconWrapper}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Reliability</h4>
                    <p>Operation in extreme conditions: low temperatures, high pressure</p>
                  </div>
                </div>
                <div className={Styles.featureItem}>
                  <div className={Styles.iconWrapper}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Automation</h4>
                    <p>Real-time data for prompt response</p>
                  </div>
                </div>
                <div className={Styles.featureItem}>
                  <div className={Styles.iconWrapper}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Integration</h4>
                    <p>Easy connection to existing process control systems and telemetry systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={Styles.cardsColumn}>
          <Card
            imgSrc={product_3_1.src}
            title={cardTitle.oil}
            onClick={() => goToMeasuring('oil')}
          />
          <Card
            imgSrc={product_3_2.src}
            title={cardTitle.gas}
            onClick={() => goToMeasuring('gas')}
          />
          <Card
            imgSrc={product_3_3.src}
            title={cardTitle.water}
            onClick={() => goToMeasuring('water')}
          />
        </div>
      </div>

      <BackToTop />
    </LayoutBack>
  );
};