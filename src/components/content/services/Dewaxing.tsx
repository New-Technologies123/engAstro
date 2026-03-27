import Styles from './services.module.scss'
import { useState } from 'react'
import { motion } from 'framer-motion'
import back from '../../../images/back.svg'
import serves_5 from '../../../images/services/serves_5.webp'

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

export const Dewaxing = () => {
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
              Oil Well <span>Dewaxing </span> Services
            </h1>
            <p>
              Complete removal of asphalt–resin–paraffin deposits and restoration of passage in wells with tubing string using specialized equipment and trained personnel.
            </p>
          </div>
          <div
            className={Styles.imageWrapper}
            onClick={() => setBigPhoto(serves_5.src)}
          >
            <img
              src={serves_5.src}
              alt="депарафинизация"
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
            <h3>Scraping and asphalt–resin–paraffin deposits removal</h3>
            <ul>
              {listItems([
                'Use of milling and blade scrapers in various diameters.',
                'Application of non-metallic scrapers for coated tubing string.',
                'Use of piercing scrapers and paraffin cutters in case of plugging.',
                'Scraping depth: 2,000–3,000 meters.'
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
            <h3>Equipment and Machinery</h3>
            <ul>
              {listItems([
                'High mobility specialized vehicles for well site operations.',
                'Electric submersible pump unit for flowing wells.',
                'Sinker bars with coating to prevent tubing string damage.'
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
            <h3>Personnel and Safety</h3>
            <ul>
              {listItems([
                'Trained personnel with experience in oil well operations.',
                'Use of certified equipment manufactured in house.',
                'Compliance with all oil and gas industry safety regulations.'
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