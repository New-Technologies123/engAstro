// pumping-stations.tsx
import { useState } from 'react';
import { Card } from '../../ui/card/Card';
import { LayoutBack } from '../../layout/LayoutBack';
import Styles from './accounting.module.scss';

import product_5_1 from '../../../images/products/product_5.webp';
import product_5_2 from '../../../images/products/product_5_1.webp';
import { BackToTop } from '../../ui/back-to-top/BackToTop';

type TPumping = 'internal' | 'multiphase';

export const PumpingStations = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'specs'>('info');

  const cardTitle: Record<TPumping, string> = {
    internal: 'Block Pumping Station for Internal and External Oil Transfer',
    multiphase: 'Block Multiphase Pumping Station',
  };

  const goToPumping = (item: TPumping) => {
    window.location.href = `/products/pumping-stations/${item}`;
  };

  const onBackProducts = () => {
    window.location.href = '/products';
  };

  return (
    <LayoutBack onBack={onBackProducts} title="Pumping Stations for Oil, Petroleum Products and Water">
      <div className={Styles.container}>
        <div className={Styles.textColumn}>

          <div className={Styles.contentWrapper}>
            <div className={Styles.fadeIn}>
              <p>
                For reliable pumping of oil, petroleum products and water, we offer block pumping stations 
                designed with industrial safety and energy efficiency requirements in mind. This section 
                presents block pumping stations for internal and external oil transfer, as well as block 
                multiphase pumping stations — ready-made solutions for main and process pipelines.
              </p>

              <div className={Styles.featureGrid}>
                <div className={Styles.featureItem}>
                  <div className={Styles.iconWrapper}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
                      <path d="M12 2v4M12 22v-4M4 12H2M6 12H4M20 12h-2M22 12h-2M19.07 4.93l-2.83 2.83M4.93 19.07l2.83-2.83M19.07 19.07l-2.83-2.83M4.93 4.93l2.83 2.83"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Energy Efficiency</h4>
                    <p>Optimized operating modes for reduced energy consumption</p>
                  </div>
                </div>
                <div className={Styles.featureItem}>
                  <div className={Styles.iconWrapper}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Reliability</h4>
                    <p>Uninterrupted operation in extreme operating conditions</p>
                  </div>
                </div>
                <div className={Styles.featureItem}>
                  <div className={Styles.iconWrapper}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Automation</h4>
                    <p>Fully automated monitoring and control systems</p>
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
                    <h4>Modularity</h4>
                    <p>Block design for quick installation and scalability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={Styles.cardsColumn}>
          <Card
            imgSrc={product_5_1.src}
            title={cardTitle.internal}
            onClick={() => goToPumping('internal')}
          />
          <Card
            imgSrc={product_5_2.src}
            title={cardTitle.multiphase}
            onClick={() => goToPumping('multiphase')}
          />
        </div>
      </div>

      <BackToTop />
    </LayoutBack>
  );
};