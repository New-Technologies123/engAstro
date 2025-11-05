import Styles from './services.module.scss';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useState} from 'react';
import serves_1 from '../../../images/services/serves_12.png'

import { useTranslation } from 'react-i18next';
import { BackToTop } from '../../ui/back-to-top/BackToTop';

export const Repair = () => {
  const { t } = useTranslation('services');

  const [photoIsOpen, setPhotoIsOpen] = useState(false);

  return (
    <>
      <div className={Styles.card}>
        <div className={Styles.imageWrapper} onClick={() => setPhotoIsOpen(true)}>
          <img src={serves_1.src} alt="сервис" className={Styles.serviceImage}/>
          <div className={Styles.imageOverlay}>
            <p>Zoom</p>
          </div>
        </div>

        <div className={Styles.content}>
          <h3>«Sputnik-Massomer NT.1» Stationary Automated Group Metering Skid Overhaul</h3>
          <ul>
            {['Separation tank, flanges and pressure safety valves repair;', 'Multi-stream switching manifold repair (shaft, body, rubber protectors);', 
                 'Repair or replacement of 1-50 TOR;', 'Repair or replacement of valves;', 'Process room renovations and bottom restoration;', 
                 'Flow rate controller and processing line (of the pipeline) replacement;', 'GP-1M hydraulic drive, stop-gate valve, non-return valve replacement;', 
                 'Electric installation works.'].map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>
          <h3>Stationary Automated Group Metering Skid Maintenance</h3>
          <ul>
            {['Technical maintenance of the metering skid in accordance with the operating manual, sealing elements, other expendable supplies and component parts, if necessary;', 
            'Test measurements of the well flow rate with the report issuance on the condition of the metering skid.'].map((item) => (
              <li key={item}>
                {t(item)}
              </li>
            ))}
          </ul>
          <h3>Modernization of the Stationary Automated Group Metering Skid</h3>
          <ul>
            {['Modernization with the purpose of bringing the equipment to conformity with GOST 8.1016-2022 can be handled by changing the measurement instrumentation, control cabinets, incorporating modifications into the working equipment and the software.']
            .map((item) => (
              <li key={item}>
                {t(item)}
              </li>
            ))}
          </ul>
        </div>
        
      </div>
      <BackToTop/>
      {photoIsOpen && <BigPhoto src={serves_1.src} onClose={() => setPhotoIsOpen(false)} />}
    </>
  );
};
