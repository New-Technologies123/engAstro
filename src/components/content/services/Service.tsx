import Styles from './services.module.scss';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useState } from 'react';
import serves_4 from '../../../images/services/serves_4.webp';
import dot from '../../../images/dot.svg';
import { BackToTop } from '../../ui/back-to-top/BackToTop';

export const Service = () => {

  const [photoIsOpen, setPhotoIsOpen] = useState(false);

  return (
    <>
      <div className={Styles.card}>
        <div className={Styles.imageWrapper} onClick={() => setPhotoIsOpen(true)}>
          <img src={serves_4.src} alt="сервис" className={Styles.serviceImage}/>
          <div className={Styles.imageOverlay}>
            <p>Zoom</p>
          </div>        
        </div>

        <div className={Styles.content}>
          <h3>Maintenance of the mounted device includes the following periodic types of work:</h3>
          <ul>
            {['Exterior inspection of the movable roller stand for signs of bending and the condition of welded joints;', 
                'Inspection of fasteners;', 'Inspection and oil refill into the gear, if necessary;', 
                'Visual inspection of the wireline condition. If there is a noticeable decrease in the diameter or corrosion, the wire is to be replaced;', 
                'Inspection of the stuffing-box seal and lubricator, and their replacement if necessary;', 
                'Inspection of the minimum weight sensor operation;', 'Device calibration;', 'Inspection of the reducer and the electric motor;', 
                "Inspection of the device's grounding using a megohmmeter;", "Renewal of the device's grounding signs;", 'Control cabinet maintenance;', 
                "Performance inspection of the control cabinet's heating system;", 'Software failure inspection.'].map((item) => (
              <li key={item}>
                <img src={dot.src}/>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BackToTop/>
      {photoIsOpen && <BigPhoto src={serves_4.src} onClose={() => setPhotoIsOpen(false)} />}
    </>
  );
};
