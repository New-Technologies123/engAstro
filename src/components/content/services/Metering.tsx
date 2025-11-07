import Styles from './services.module.scss';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useState } from 'react';
import serves_3 from '../../../images/services/serves_3.png';
import dot from '../../../images/dot.svg';
import { BackToTop } from '../../ui/back-to-top/BackToTop';

export const Metering = () => {
  const [photoIsOpen, setPhotoIsOpen] = useState(false);

  return (
    <>
      <div className={Styles.card}>
        <div className={Styles.imageWrapper} onClick={() => setPhotoIsOpen(true)}>
          <img 
            src={serves_3.src} 
            alt="сервис" 
            className={Styles.serviceImage}
          />
          <div className={Styles.imageOverlay}>
            <p>Zoom</p>
          </div>
        </div>

        <div className={Styles.content}>
          <h3>The service includes the following:</h3>
          <ul>
            {['Delivery of the metering unit to the measurement site;', "Installation/dismantling of the mobile metering unit's piping to the well's shut-off valves and flowline;", 
              "Pressure relief and fluid drainage from the metering unit's measuring tank and pipelines;", 
              'Building and maintaining a database of well test results and tracking their dynamics over time;', 
              "Pressure testing of the metering unit with the measured well's fluid, performing the well flow rate measurement, and recording the results in a 24/7 mode."]
              .map((item) => (
              <li key={item}>
                <img src={dot.src}/>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BackToTop/>
      {photoIsOpen && <BigPhoto src={serves_3.src} onClose={() => setPhotoIsOpen(false)} />}
    </>
  );
};