import { Layout } from '../../layout/Layout';
import { Card } from '../../ui/card/Card';
import { useEffect, useState } from 'react';
import { AccountingSystem } from './AccountingSystem';
import { Accessories } from './Accessories';
import { MeasuringSystem } from './MeasuringSystem';
import { PreparationSystems } from './PreparationSystems';
import { PumpingStations } from './PumpingStations';

import product_1 from '../../../images/products/product_1.webp';
import product_2 from '../../../images/products/product_2.0.webp';
import product_3 from '../../../images/products/product_3.webp';
import product_4 from '../../../images/products/product_4.webp';
import product_5 from '../../../images/products/product_5.webp';
import { BackToTop } from '../../ui/back-to-top/BackToTop'

type TProducts = | 'accounting-system' | 'accessories' | 'measuring-system' | 'preparation-systems' | 'pumping-stations';

const pathnameToProduct = (pathname: string): TProducts | null => {
  const parts = pathname.split('/').filter(Boolean);

  if (parts.length === 2 && parts[0] === 'products') {
    return parts[1] as TProducts;
  }

  return null;
};

export const Products = () => {
  const [currentPage, setCurrentPage] = useState<TProducts | null>(null);

  const goTo = (path: string) => {
  window.history.pushState({}, '', path);
  setCurrentPage(pathnameToProduct(path));
};

const goBack = () => {
  window.history.pushState({}, '', '/products');
  setCurrentPage(null);
};

  useEffect(() => {
    const sync = () => setCurrentPage(pathnameToProduct(window.location.pathname));
    sync(); // синхронизируем при монтировании
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);


  if (currentPage === 'accounting-system') {
    return <AccountingSystem/>;
  }

  if (currentPage === 'accessories') {
    return <Accessories/>;
  }

  if (currentPage === 'measuring-system') {
    return <MeasuringSystem/>;
  }

  if (currentPage === 'preparation-systems') {
    return <PreparationSystems/>;
  }

  if (currentPage === 'pumping-stations') {
    return <PumpingStations/>;
  }

  return (
    <Layout title="Products" 
      description="The quality of products provided by «New Technologies» Engineering and Production Enterprise LLC complies with all 
        safety and quality standards, confirmed by the relevant Russian and Eurasian Economic Union (EAEU) certificates. The company has 
        certificates of conformity to the international standards, quality management systems, environmental management systems and occupational 
        health and safety management systems: ISO 9001:2015, ISO 14001:2016, ISO 45001-2018, ISO 29001:2020.">
      <>
        <Card
          imgSrc={product_1.src} 
          title="Automated group metering skids"
          onClick={() => goTo('/products/accounting-system')}
        />
        <Card
        imgSrc={product_2.src} 
          title="Component parts for automated group metering skids"
          onClick={() => goTo('/products/accessories')}
        />
        <Card
        imgSrc={product_3.src} 
          title="Hydrocarbons and formation fluid metering systems"
          onClick={() => goTo('/products/measuring-system')}
        />
        <Card
        imgSrc={product_4.src} 
          title="Oil, gas and water treatment systems"
          onClick={() => goTo('/products/preparation-systems')}
        />
        <Card
        imgSrc={product_5.src} 
          title="Oil, water and petroleum products pumping stations"
          onClick={() => goTo('/products/pumping-stations')}
        />
      </>
      <BackToTop />
    </Layout>
  );
};
