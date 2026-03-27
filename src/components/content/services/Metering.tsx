import Styles from './services.module.scss'
import { useState } from 'react'
import { motion } from 'framer-motion'
import back from '../../../images/back.svg'
import serves_3 from '../../../images/services/serves_3.webp'

import { BigPhoto } from '../../ui/big-photo/BigPhoto'
import { BackToTop } from '../../ui/back-to-top/BackToTop'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const listItems = (items: string[]) =>
  items.map((item) => (
    <motion.li key={item} variants={fadeUp} transition={{ duration: 0.4 }}>
      {item}
    </motion.li>
  ))

interface MeteringBlock {
  title: string
  points: string[]
}

export const Metering = () => {
  const [bigPhoto, setBigPhoto] = useState<string | null>(null)

  const onBack = () => {
    window.location.href = '/services'
  }

  const blocks: MeteringBlock[] = [
    {
      title: 'Preparation and delivery of the skid',
      points: [
        'Delivery of the metering unit to the measurement site;',
        'Equipment completeness check;',
        'Installation and connection of the mobile metering unit  piping to the wellhead valves.'
      ]
    },
    {
      title: 'Measurements and Data Processing',
      points: [
        'Measurements and Data Processing;',
        'Pressure relief and draining of liquid from the measuring tank and pipelines;',        
        'Creation and maintenance of a database based on measurement results.'
      ]
    },
    {
      title: 'Documentation and Control',
      points: [
        'Documentation of measurement results on a 24/7 basis;',
        'Verification of data accuracy and unit calibration;',
        'Ensuring personnel safety during operations.'
      ]
    }
  ]

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
              Well flow rate <span>measurement </span> with a mobile metering skid 
            </h1>
            <p>
              The mobile metering unit provides a complete cycle of oil well flow rate measurement: delivery, installation, 
              measurements, and documentation of results.
            </p>
          </div>
          
          <div
            className={Styles.imageWrapper}
            onClick={() => setBigPhoto(serves_3.src)}
          >
            <img
              src={serves_3.src}
              alt="замер дебита"
              className={Styles.serviceImage}
            />
            <div className={Styles.imageOverlay}>
              <p>Increase</p>
            </div>
          </div>

          
        </motion.div>

        {/* CARDS */}
        <div className={Styles.grid}>
          {blocks.map((block) => (
            <motion.div
              key={block.title}
              className={Styles.card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h3>{block.title}</h3>
              <ul>{listItems(block.points)}</ul>
            </motion.div>
          ))}
        </div>

        <BackToTop />

        {bigPhoto && <BigPhoto src={bigPhoto} onClose={() => setBigPhoto(null)} />}
      </div>
    </>
  )
}