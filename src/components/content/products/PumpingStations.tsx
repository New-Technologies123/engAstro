import { useEffect, useState } from 'react';
import { Card } from '../../ui/card/Card';
import { LayoutBack } from '../../layout/LayoutBack';
import Styles from './products.module.scss';

import product_5_1 from '../../../images/products/product_5.webp';
import product_5_2 from '../../../images/products/product_5_1.webp';
import { BackToTop } from '../../ui/back-to-top/BackToTop'

type TPumping = | 'internal' | 'multiphase';

/* ---------------- component ---------------- */
export const PumpingStations = () => {
  const title = 'Oil, water and petroleum products pumping stations';

  const cardTitle: Record<TPumping, string> = {
    internal: 'Modular internal and  external pumping station',
    multiphase: 'Modular multiphase pump station',
  };

  /* открыть карточку */
  const goToPumping = (item: TPumping) => {
    window.location.href = `/products/pumping-stations/${item}`;
  };

  /* назад к продуктам */
  const onBackProducts = () => {
    window.location.href = '/products';
  };

  return (
    <LayoutBack onBack={onBackProducts} title={title}>
      <div className={Styles.ramca}>
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
      <BackToTop />
    </LayoutBack>
  );
};
