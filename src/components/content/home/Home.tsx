import Styles from './home.module.scss';
import { useTranslation } from 'react-i18next';
import { Title } from '../../ui/title/Title';

import item_1 from '../../../images/home/ros.jpg';
import item_2 from '../../../images/home/gas.png';
import item_3 from '../../../images/home/nnk.webp';
import item_4 from '../../../images/home/ink.png';
import item_5 from '../../../images/home/sur.webp';
import item_6 from '../../../images/home/tat.png';
import item_7 from '../../../images/home/bel.png';
import item_8 from '../../../images/home/cas.webp';
import item_9 from '../../../images/home/luc.png';
import item_10 from '../../../images/home/luc_ysb.webp';

import homeItem from '../../../images/home/geography.webp';

export const HomeRu = () => {
  const { t, i18n } = useTranslation('home');

  const imagesByLanguage = {
    en: [
      item_1, item_2, item_3, item_4, item_5,
      item_6, item_7, item_8, item_9, item_10
    ]
  };

  const currentImages = imagesByLanguage.en;

  // Функция для рендеринга карусели с логотипами
  const renderBrandsCarousel = () => {
    return currentImages.map((image, index) => (
      <div key={index} className={Styles.slideContent}>
        <a>
          <img src={image.src} alt={`Логотип ${index + 1}`} />
        </a>
      </div>
    ));
  };

  return (
    <>
      <section className={Styles.hero}>
        <div className={Styles.heroOverlay}>
          <h1>Welcome!</h1>
          <p>We provide top quality equipment around the World.</p>
        </div>
      </section>

      <Title text="Completed projects on the map"></Title>
      <img src={homeItem.src} alt="Карта поставок" className={Styles.homeImg} />
      <Title text="Our customers"></Title>

      <div className={Styles.brandParent}>
        <div className={Styles.brandsCarousel} id="brandsCarousel">
          {renderBrandsCarousel()}
        </div>
        <div className={Styles.brandsCarousel} id="brandsCarousel2">
          {renderBrandsCarousel()}
        </div>
      </div>
    </>
  );
};