import { useState, useEffect } from 'react';
import { Cards } from './Cards';
import { Title } from '../../ui/title/Title';
import { LayoutBack } from '../../layout/LayoutBack';

import { AccountingSystem } from './AccountingSystem';
import { Accessories } from './Accessories';
import { MeasuringSystem } from './MeasuringSystem';
import { PreparationSystems } from './PreparationSystems';
import { PumpingStations } from './PumpingStations';

import Styles from './documents.module.scss';

type TDocumentType = | 'accountingSystem' | 'accessories' | 'measuringSystem' | 'preparationSystems' | 'pumpingStations';

const documentsConfig: Record<
  TDocumentType,
  { title: string; component: JSX.Element }
> = {
  accountingSystem: {
    title: 'Documentation of the Automated Metering Unit',
    component: <AccountingSystem />,
  },
  accessories: {
    title:
      'Documentation of components for an automated group measuring installation',
    component: <Accessories />,
  },
  measuringSystem: {
    title:
      'Documentation of the hydrocarbon and reservoir fluid accounting system',
    component: <MeasuringSystem />,
  },
  preparationSystems: {
    title: 'Documentation of the oil, gas, and water treatment system',
    component: <PreparationSystems />,
  },
  pumpingStations: {
    title:
      'Documentation of oil, petroleum products, and water pumping stations',
    component: <PumpingStations />,
  },
};

export const Documents = () => {
  const [activeType, setActiveType] = useState<TDocumentType | null>(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const type = queryParams.get('type') as TDocumentType | null;

    if (type && documentsConfig[type]) {
      setActiveType(type);
    }
  }, []);

  const onBack = () => {
    setActiveType(null);

    const newUrl = `${window.location.origin}${window.location.pathname}`;
    window.history.pushState({}, '', newUrl);
  };

  const onClickCard = (type: TDocumentType) => {
    setActiveType(type);

    const newUrl = `${window.location.origin}${window.location.pathname}?type=${type}`;
    window.history.pushState({}, '', newUrl);
  };

  if (activeType) {
    const document = documentsConfig[activeType];

    return (
      <LayoutBack onBack={onBack} title={document.title}>
        {document.component}
      </LayoutBack>
    );
  }

  return (
    <>
      <Title text="Documents" />

      <div className={Styles.team}>
        {Object.entries(documentsConfig).map(([type, data]) => (
          <Cards
            key={type}
            title={data.title}
            onClick={() => onClickCard(type as TDocumentType)}
          />
        ))}
      </div>
    </>
  );
};