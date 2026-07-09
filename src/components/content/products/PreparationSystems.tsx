// preparation-systems.tsx
import { useState } from 'react';
import { Card } from '../../ui/card/Card';
import { LayoutBack } from '../../layout/LayoutBack';
import Styles from './accounting.module.scss';

import product_4_1 from '../../../images/products/product_4.webp';
import product_4_2 from '../../../images/products/product_4_2.webp';
import product_4_3 from '../../../images/products/product_4_3.webp';
import product_4_4 from '../../../images/products/product_4_4.webp';
import { BackToTop } from '../../ui/back-to-top/BackToTop';

type TPreparation = 'launch' | 'block' | 'cleaning' | 'dosing';

export const PreparationSystems = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'specs'>('info');

  const cardTitle: Record<TPreparation, string> = {
    launch: 'Launcher and Receiver for Pipeline Cleaning and Diagnostic Tools (L/R-PIG)',
    block: 'Manifold Block (MB)',
    cleaning: 'Tubing String Cleaning Device (TSCD)',
    dosing: 'Chemical Reagent Dosing Unit (CRDU)',
  };

  const goToPreparation = (item: TPreparation) => {
    window.location.href = `/products/preparation-systems/${item}`;
  };

  const onBackProducts = () => {
    window.location.href = '/products';
  };

  return (
    <LayoutBack onBack={onBackProducts} title="Oil, Gas and Water Treatment Systems">
      <div className={Styles.container}>
        <div className={Styles.textColumn}>

          <div className={Styles.contentWrapper}>
            <div className={Styles.fadeIn}>
              <p>
                Deposits, corrosion, and uneven reagent dosing reduce the efficiency of hydrocarbon treatment. 
                Our solutions — launchers and receivers for cleaning tools (L/R-PIG), manifold blocks, 
                tubing string cleaners, and dosing units — help maintain equipment cleanliness and process stability.
              </p>

              <div className={Styles.featureGrid}>
                <div className={Styles.featureItem}>
                  <div className={Styles.iconWrapper}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
                      <path d="M3 12h4l2-3 3 3 3-3 2 3 4-3"/>
                      <path d="M3 8h4l2-3 3 3 3-3 2 3 4-3"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Equipment Cleaning</h4>
                    <p>Removal of deposits and corrosion from pipelines and tubing strings</p>
                  </div>
                </div>
                <div className={Styles.featureItem}>
                  <div className={Styles.iconWrapper}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M8 12h8"/>
                      <path d="M12 8v8"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Reagent Dosing</h4>
                    <p>Precise chemical reagent injection for process stabilization</p>
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
                    <p>Oilfield pipelines, cluster sites, oil treatment plants</p>
                  </div>
                </div>
                <div className={Styles.featureItem}>
                  <div className={Styles.iconWrapper}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Diagnostics</h4>
                    <p>Pipeline condition monitoring and timely problem detection</p>
                  </div>
                </div>
              </div>
              <p style={{ marginTop: '16px' }}>
                Choose comprehensive solutions for oilfield equipment protection — ensure reliability and 
                profitability of your production!
              </p>
            </div>
          </div>
        </div>

        <div className={Styles.cardsColumn}>
          <div className={Styles.cardsRow}>
            <Card
              imgSrc={product_4_1.src}
              title={cardTitle.launch}
              onClick={() => goToPreparation('launch')}
            />
            <Card
              imgSrc={product_4_2.src}
              title={cardTitle.block}
              onClick={() => goToPreparation('block')}
            />
          </div>
          <div className={Styles.cardsRow}>
            <Card
              imgSrc={product_4_3.src}
              title={cardTitle.cleaning}
              onClick={() => goToPreparation('cleaning')}
            />
            <Card
              imgSrc={product_4_4.src}
              title={cardTitle.dosing}
              onClick={() => goToPreparation('dosing')}
            />
          </div>
        </div>
      </div>

      <BackToTop />
    </LayoutBack>
  );
};