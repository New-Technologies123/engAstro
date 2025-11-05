import { Layout } from '../../layout/Layout';
import { LayoutBack } from '../../layout/LayoutBack';
import { Card } from '../../ui/card/Card';
import { useState } from 'react';
import { AccountingSystem } from './AccountingSystem';
import { Accessories } from './Accessories';
import { MeasuringSystem } from './MeasuringSystem';
import { PreparationSystems } from './PreparationSystems';
import { PumpingStations } from './PumpingStations';
import product_1 from '../../../images/products/product_1.webp';
import product_2_5 from '../../../images/products/product_2_5.webp';
import product_3 from '../../../images/products/product_3.webp';
import product_4 from '../../../images/products/product_4.webp';
import product_5 from '../../../images/products/product_5.webp';
import { useEffect } from 'react';

type TProducts = 'accountingSystem' | 'accessories' | 'measuringSystem' | 'preparationSystems' | 'pumpingStations';

export const Products = () => {

  const cardTitle: Record<TProducts, string> = {
    accountingSystem: "Automated group metering skid",
    accessories: "Component parts for automated group getering skids",
    measuringSystem: "Hydrocarbons and formation fluid metering system",
    preparationSystems: "Oil, gas and water treatment systems",
    pumpingStations: "Oil, water and petroleum products pumping stations",
  };

  const [typeLayoutBackOpen, setTypeLayoutBackOpen] = useState<TProducts | null>(null);

  useEffect(() => {
    setTypeLayoutBackOpen(() => {
      const queryParams = new URLSearchParams(window.location.search);
      const typeFromQuery = queryParams.get('type');
      return typeFromQuery ? (typeFromQuery as TProducts) : null;
    });
  }, []);

  const onBack = () => {
    setTypeLayoutBackOpen(null);

    const newUrl = `${window.location.origin}${window.location.pathname}`;
    window.history.pushState({}, '', newUrl);
  };

  const onClickCard = (typeProduct: TProducts) => {
    setTypeLayoutBackOpen(typeProduct);

    const newUrl = `${window.location.origin}${window.location.pathname}?type=${typeProduct}`;
    window.history.pushState({}, '', newUrl);
  };

  return (
    <>
      {typeLayoutBackOpen === null && (
        <Layout title="Products" 
          description="The quality of products provided by «New Technologies» Engineering and Production Enterprise
           LLC complies with all safety and quality standards, confirmed by the relevant Russian and Eurasian Economic 
           Union (EAEU) certificates. The company has certificates of conformity to the international standards, 
           quality management systems, environmental management systems and occupational health and safety management systems: 
           ISO 9001:2015, ISO 14001:2016, ISO 45001-2018, ISO 29001:2020.">
          <>
            <Card
              imgSrc={product_1.src}
              title={cardTitle.accountingSystem}
              onClick={() => {
                onClickCard('accountingSystem');
              }}
            />
            <Card
              imgSrc={product_2_5.src}
              title={cardTitle.accessories}
              onClick={() => {
                onClickCard('accessories');
              }}
            />
            <Card
              imgSrc={product_3.src}
              title={cardTitle.measuringSystem}
              onClick={() => {
                onClickCard('measuringSystem');
              }}
            />
            <Card
              imgSrc={product_4.src}
              title={cardTitle.preparationSystems}
              onClick={() => {
                onClickCard('preparationSystems');
              }}
            />
            <Card
              imgSrc={product_5.src}
              title={cardTitle.pumpingStations}
              onClick={() => {
                onClickCard('pumpingStations');
              }}
            />
          </>
        </Layout>
      )}
      {typeLayoutBackOpen === 'accountingSystem' && (
        <LayoutBack onBack={onBack} title={cardTitle.accountingSystem}>
          <AccountingSystem />
        </LayoutBack>
      )}
      {typeLayoutBackOpen === 'accessories' && (
        <LayoutBack onBack={onBack} title={cardTitle.accessories}>
          <Accessories />
        </LayoutBack>
      )}
      {typeLayoutBackOpen === 'measuringSystem' && (
        <LayoutBack onBack={onBack} title={cardTitle.measuringSystem}>
          <MeasuringSystem />
        </LayoutBack>
      )}
      {typeLayoutBackOpen === 'preparationSystems' && (
        <LayoutBack onBack={onBack} title={cardTitle.preparationSystems}>
          <PreparationSystems />
        </LayoutBack>
      )}
      {typeLayoutBackOpen === 'pumpingStations' && (
        <LayoutBack onBack={onBack} title={cardTitle.pumpingStations}>
          <PumpingStations />
        </LayoutBack>
      )}
    </>
  );
};
