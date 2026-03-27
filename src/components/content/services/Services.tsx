import { Layout } from '../../layout/Layout';
import { Card } from '../../ui/card/Card';
import { useEffect, useState } from 'react';

import { Repair } from './Repair';
import { Metering } from './Metering';
import { Service } from './Service';
import { Dewaxing } from './Dewaxing';

import serves_12 from '../../../images/services/serves_12.png';
import serves_3 from '../../../images/services/serves_3.webp';
import serves_4 from '../../../images/services/serves_4.webp';
import serves_5 from '../../../images/services/serves_5.webp';

import { BackToTop } from '../../ui/back-to-top/BackToTop';

type TServices = | 'repair' | 'metering' | 'service' | 'dewaxing';

const pathnameToService = (pathname: string): TServices | null => {
  const parts = pathname.split('/').filter(Boolean);

  if (parts.length === 2 && parts[0] === 'services') {
    return parts[1] as TServices;
  }

  return null;
};

export const Services = () => {
  const [currentPage, setCurrentPage] = useState<TServices | null>(null);

  const goTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPage(pathnameToService(path));
    window.scrollTo({ top: 0, behavior: 'smooth', });
  };

  useEffect(() => {
    const sync = () => setCurrentPage(pathnameToService(window.location.pathname));
    sync(); // синхронизируем при монтировании
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  if (currentPage === 'repair') {
    return <Repair />;
  }

  if (currentPage === 'metering') {
    return <Metering />;
  }

  if (currentPage === 'service') {
    return <Service />;
  }

  if (currentPage === 'dewaxing') {
    return <Dewaxing />;
  }

  return (
    <Layout
      title="Services"
      description="Besides equipment manufacturing, «New Technologies» Engineering and Production Enterprise LLC also specializes on well dewaxing and repairing services, maintenance of automation equipment for oil production and treatment."
    >
      <>
        <Card
          imgSrc={serves_12.src}
          title="Overhaul, maintenance and modernization of the automated group metering skid"
          onClick={() => goTo('/services/repair')}
        />

        <Card
          imgSrc={serves_3.src}
          title="Measurement of oil well flow rates by the mobile metering unit"
          onClick={() => goTo('/services/metering')}
        />

        <Card
          imgSrc={serves_4.src}
          title="Tubing String Clarifier Maintenance"
          onClick={() => goTo('/services/service')}
        />

        <Card
          imgSrc={serves_5.src}
          title="Oil Well Dewaxing Services"
          onClick={() => goTo('/services/dewaxing')}
        />
      </>
      <BackToTop />
    </Layout>
  );
};