// accounting.tsx
import { LayoutBack } from '../../layout/LayoutBack';
import { Card } from '../../ui/card/Card';
import Styles from './accounting.module.scss';
import product_1_1 from '../../../images/products/product_1.webp';
import product_1_2 from '../../../images/products/product_1_2.webp';
import { BackToTop } from '../../ui/back-to-top/BackToTop';
import { useState } from 'react';

type TAccounting = 'stationary' | 'mobile' | 'calculator';

export const AccountingSystem = () => {
  const title = 'Automated group metering unit';
  // const [activeTab, setActiveTab] = useState<'info' | 'specs'>('info');

  const cardTitle: Record<TAccounting, string> = {
    stationary: 'AGMU "Sputnik — Mass Meter NT.1" (Stationary)',
    mobile: 'AGMU "Sputnik — Mass Meter NT.1" (Mobile)',
    calculator: 'Calculator',
  };

  const goToAccounting = (item: TAccounting) => {
    window.location.href = `/products/accounting-system/${item}`;
  };

  const onBackProducts = () => {
    window.location.href = '/products';
  };

  return (
    <LayoutBack onBack={onBackProducts} title={title}>
      <div className={Styles.container}>
        <div className={Styles.textColumn}>
          
          <div className={Styles.contentWrapper}>
            <div className={Styles.fadeIn}>
              <p>
                The measuring unit (MU) is designed for measuring the mass and mass flow rate of well fluid 
                as part of the oil and gas mixture, as well as the mass and mass flow rate of well fluid 
                minus the mass of water and associated petroleum gas, reduced to standard conditions.
              </p>

              <div className={Styles.featureGrid}>
                <div className={Styles.featureItem}>
                  <div className={Styles.iconWrapper}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Quantity Control</h4>
                    <p>Of well fluid and gas with results output to the control unit</p>
                  </div>
                </div>
                <div className={Styles.featureItem}>
                  <div className={Styles.iconWrapper}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Operational Purpose</h4>
                    <p>Measurement of fluid mass, dehydrated oil, and gas volume</p>
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
                    <h4>Application Area</h4>
                    <p>Pressure collection systems and automated control systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>          
        </div>

        <div className={Styles.cardsColumn}>
          <Card
            imgSrc={product_1_1.src}
            title={cardTitle.stationary}
            onClick={() => goToAccounting('stationary')}
          />
          <Card
            imgSrc={product_1_2.src}
            title={cardTitle.mobile}
            onClick={() => goToAccounting('mobile')}
          />
        </div>
      </div>

      <BackToTop />
    </LayoutBack>
  );
};