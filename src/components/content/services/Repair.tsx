import Styles from './services.module.scss'
import { useState } from 'react'
import { motion } from 'framer-motion'
import back from '../../../images/back.svg'
import serves_1 from '../../../images/services/serves_12.png'

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

export const Repair = () => {
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
              Maintenance, overhaul services and technical upgrade of the «SPUTNIK» 
              <span> AUTOMATED GROUP METERING SKID</span>
            </h1>
            <p>
              We ensure safe and continuous operation of the automated group metering skid providing regular maintenance, 
              overhaul services and technical upgrade in accordance with the up-to-date standards and GOST (Russian National Standard).
            </p>
          </div>
          <div
            className={Styles.imageWrapper}
            onClick={() => setBigPhoto(serves_1.src)}
          >
            <img
              src={serves_1.src}
              alt="сервис"
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
            <h3>Overhaul services</h3>
            <ul>
              {listItems([
                'Repair of separation tanks, flanges, and pressure safety valves',
                'Multi-stream switching manifold repair',
                'Repair of 1–50 TOR flow meters',
                'Replacement of flow rate controllers and process piping',
                'Restoration of the Bottom and Casing',
                'Replacement of hydraulic drives and completing parts',
                'Electrical installation works'
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
            <h3>Maintenance</h3>
            <ul>
              {listItems([
                'Performance of scheduled maintenance in accordance with the manual',
                'Replacement of consumables',
                'Diagnostics and test measurements',
                'Issuance of a report on serviceability'
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
            <h3>Technical upgrade</h3>
            <ul>
              {listItems([
                'Bringing equipment into compliance with GOST R 8.1016 2022',
                'Replacement of measuring instruments',
                'Upgrading of control cabinets',
                'Modification of software and hardware'
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
