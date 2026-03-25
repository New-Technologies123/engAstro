import { LayoutBack } from '../../layout/LayoutBack';
import { Card } from '../../ui/card/Card';
import Styles from './accounting.module.scss';
import product_1_1 from '../../../images/products/product_1.webp';
import product_1_2 from '../../../images/products/product_1_2.webp';
import { BackToTop } from '../../ui/back-to-top/BackToTop';

type TAccounting = 'stationary' | 'mobile' | 'calculator';

export const AccountingSystem = () => {
  const cardTitle: Record<TAccounting, string> = {
    stationary: '"Sputnik-massomer NT.1" the stationary automated group metering skid',
    mobile: '"Sputnik-massomer NT.1" the mobile automated group metering skid',
    calculator: 'Calculator',
  };

  const goToAccounting = (item: TAccounting) => {
    window.location.href = `/products/accounting-system/${item}`;
  };

  const onBackProducts = () => {
    window.location.href = '/products';
  };

  return (
    <LayoutBack onBack={onBackProducts} title='Automated group metering unit'>
      <div className={Styles.container}>
        {/* Левая часть — текст */}
        <div className={Styles.textColumn}>
          <p>
            The automated group metering skid is designed to measure mass and mass flow rate of the total well fluid, the mass and mass 
            flow rate of crude oil (net of water), and the volume and volume flow rate of free petroleum gas, corrected to standard conditions.
          </p>
          <p><strong>Functional Purpose:</strong></p>
          <ul>
            <li>To meter and quantify well liquids and gas.</li>
            <li>To transmit all metering data to a central control unit or Human-Machine Interface (HMI) for monitoring and analysis.</li>
          </ul>
          <p><strong>Operational Purpose:</strong></p>
          <ul>
            <li>To perform calculations for the mass of total liquid and dehydrated (dry) oil, the volume of free petroleum gas.</li>
            <li>To determine daily flow rates for liquid mass, dehydrated oil mass, and gas volume for monitoring and optimizing the processing regimes of oil wells.</li>
          </ul>
          <p>
            <strong>Scope of Application:</strong> This skid is designed for use in pressurized oil well product gathering systems and as a component of automated control systems for oil production processes.
          </p>
        </div>

        {/* Правая часть — карточки */}
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