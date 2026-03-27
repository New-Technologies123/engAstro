import Styles from './services.module.scss'
import { useState } from 'react'
import { motion } from 'framer-motion'
import back from '../../../images/back.svg'
import serves_4 from '../../../images/services/serves_4.webp'

import { BigPhoto } from '../../ui/big-photo/BigPhoto'
import { BackToTop } from '../../ui/back-to-top/BackToTop'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const listItems = (items: string[]) =>
  items.map((item) => (
    <motion.li
      key={item}
      variants={fadeUp}
      transition={{ duration: 0.4 }}
    >
      {item}
    </motion.li>
  ))

export const Service = () => {
  const [bigPhoto, setBigPhoto] = useState<string | null>(null)

  const onBack = () => {
    window.location.href = '/services'
  }

  return (
    <>
      <button className={Styles.backButton} onClick={onBack}>
        <img src={back.src} alt=""/>
      </button>
      <div className={Styles.wrapper}>
        {/* HERO */}
        <motion.div className={Styles.hero} initial="hidden" animate="visible" variants={fadeUp}>
          <div className={Styles.heroText}>
            <h1>
              Tubing String <span>Clarifier</span> Maintenance
            </h1>
            <p>
              Complete technical maintenance of the installed tubing string clarifier, including inspection of all assemblies and components.
            </p>
          </div>
          <div
            className={Styles.imageWrapper}
            onClick={() => setBigPhoto(serves_4.src)}
          >
            <img
              src={serves_4.src}
              alt="обслуживание устройства"
              className={Styles.serviceImage}
            />
            <div className={Styles.imageOverlay}>
              <p>Increase</p>
            </div>
          </div>          
        </motion.div>

        {/* CARDS */}
        <div className={Styles.grid}>
          <motion.div
            className={Styles.card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3>Inspection and Maintenance of Mechanical Components</h3>
            <ul>
              {listItems([
                'Visual inspection for bending of the traveling roller stand and condition of welds;',
                'Check of bolted connections;',
                'Inspection and top-up of gearbox oil as required;',
                'Visual inspection of wire condition and replacement if worn.'
              ])}
            </ul>
          </motion.div>

          <motion.div
            className={Styles.card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3>Inspection and Maintenance of Electronic Components</h3>
            <ul>
              {listItems([
                'Verification of minimum weight sensor actuation;',
                'Unit calibration;',
                'Inspection of gearbox and electric motor;',
                'Check and maintenance of the control cabinet.'
              ])}
            </ul>
          </motion.div>

          <motion.div
            className={Styles.card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3>Safety and Documentation</h3>
            <ul>
              {listItems([
                'Inspection and verification of unit grounding;',
                'Replacement of grounding labels;',
                'Verification of control cabinet heater functionality;',
                'Software error check.'
              ])}
            </ul>
          </motion.div>
        </div>

        <BackToTop />

        {bigPhoto && (
          <BigPhoto
            src={bigPhoto}
            onClose={() => setBigPhoto(null)}
          />
        )}
      </div>
    </>
  )
}