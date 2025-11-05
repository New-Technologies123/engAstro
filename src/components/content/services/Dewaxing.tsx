import Styles from './services.module.scss';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useState } from 'react';
import serves_5 from '../../../images/services/serves_5.webp';
import { useTranslation } from 'react-i18next';
import { BackToTop } from '../../ui/back-to-top/BackToTop';


export const Dewaxing = () => {
  const { t } = useTranslation('services');
  const [photoIsOpen, setPhotoIsOpen] = useState(false);

  return (
    <>
      <div className={Styles.card}>
        <div className={Styles.imageWrapper} onClick={() => setPhotoIsOpen(true)}>
          <img src={serves_5.src} alt="сервис" className={Styles.serviceImage}/>
          <div className={Styles.imageOverlay}>
            <p>Zoom</p>
          </div>
        </div>

        <div className={Styles.content}>
          <ul>
            {['Services are provided by crews through the use of high-mobility special vehicles.', 
              'The main objective of the services is to completely remove asphaltene-resin-paraffin and other deposits in the oil-well tubing string lift by mechanical means (scraping), to determine and to ensure a proper passage in wells with tubing.', 
              'Scraping is performed using milling and blade scrapers of various diameters to remove asphaltene-resin-paraffin in gusher oil wells and wells equipped with an electrical submersible pump.', 
              'Scraper running depth is 2000 - 3000 m.', 
              'To identify and remove deposits from the tubing with an internal coating, we use non-metallic scrapers/cutters and sinker bars with a coating to prevent damage to the tubing coating. The company also provides puncher scrapers and “paraffin cutters” for the removal of asphaltene-resin-paraffin in case of plugging (for both bare and coated tubing).', 
              'The service is performed by our highly-trained technicians using our own certified equipment. We operate in strict compliance with current safety regulations for the oil and gas industry.']
              .map((item) => (
              <li key={item}>
                {t(item)}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BackToTop/>
      {photoIsOpen && <BigPhoto src={serves_5.src} onClose={() => setPhotoIsOpen(false)} />}
    </>
  );
};
